import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { LoginView } from "../../components/presentational";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
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
      console.log(values);
    },
  });

  return (
    <LoginView
      onChange={formik.handleChange}
      values={{ email: formik.values.email, password: formik.values.password }}
      onSubmit={formik.handleSubmit}
      errors={{ email: formik.errors.email, password: formik.errors.password }}
    />
  );
};

export default Login;
