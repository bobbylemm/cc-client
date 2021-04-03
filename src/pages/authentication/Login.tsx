import React from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { LoginView } from "../../components/presentational";
import { login } from "../../apis/authentication";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const history = useHistory();
  const toast = useToast();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await login(values);
      history.push("/orders");
      toast({
        title: "Login successfull.",
        description: "you were successfully authenticated",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <LoginView
      onChange={formik.handleChange}
      values={{ email: formik.values.email, password: formik.values.password }}
      onSubmit={formik.handleSubmit}
      errors={{ email: formik.errors.email, password: formik.errors.password }}
      submitting={formik.isSubmitting}
    />
  );
};

export default Login;
