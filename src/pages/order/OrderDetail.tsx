import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OrderType } from "../../types";
import MainLayout from "../../components/layouts/main";
import { useOrdersState } from "../../context/OrdersContext";
import OrderDetailView from "../../components/presentational/orders/OrderDetail";
import { updateOrder } from "../../apis";

interface OrderDetailProps extends RouteComponentProps<{ orderId: string }> {}

const OrderDetail: React.FC<OrderDetailProps> = ({ match }) => {
  const history = useHistory();
  const { orders } = useOrdersState();

  const toast = useToast();

  const [orderToEdit, setOrderToEdit] = useState<OrderType | undefined>();

  const UpdateOrderSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    bookingDate: Yup.string().required("booking date required"),
  });

  console.log(match.params.orderId, "-=>orderIdorderId");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: orderToEdit?.title || "",
      bookingDate: orderToEdit?.bookingDate || "",
      addressStreet: orderToEdit?.address.street || "",
      addressCountry: orderToEdit?.address.country || "",
      addressCity: orderToEdit?.address.city || "",
      customerName: orderToEdit?.customer.name || "",
      customerPhone: orderToEdit?.customer.phone || "",
      customerEmail: orderToEdit?.customer.email || "",
    },
    validationSchema: UpdateOrderSchema,
    onSubmit: async ({ bookingDate, title }, { resetForm }) => {
      const payload = {
        title,
        bookingDate,
      };
      await updateOrder(payload, match.params.orderId);
      resetForm();
      toast({
        title: "Order Updated Successfully.",
        description: "you have updated this order successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  useEffect(() => {
    if (orders.length) {
      const order = orders.find((item) => item.uid === match.params.orderId);
      if (!order) {
        toast({
          title: "Order Not Found",
          description: "This order id was not found!!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      setOrderToEdit(order);
    }
  }, [orders.length]);

  return (
    <MainLayout>
      <OrderDetailView
        {...{
          errors: formik.errors,
          onChange: formik.handleChange,
          onSubmit: formik.handleSubmit,
          submitting: formik.isSubmitting,
          touched: formik.touched,
          values: formik.values,
        }}
        navigateBack={() => history.push("/orders")}
      />
    </MainLayout>
  );
};

export default OrderDetail;
