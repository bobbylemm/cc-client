import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

import OrdersView from "../../components/presentational/orders/Orders";
import { getOrders, addNewOrder } from "../../apis";
import MainLayout from "../../components/layouts/main";
import { OrderType } from "../../types";
import { OrdersProvider, useOrdersDispatch } from "../../context/OrdersContext";

interface OrdersProps {}

interface OrdersState {
  orders: OrderType[];
  lastDoc: any;
  firstDoc: any;
  openAddModal: boolean;
}

const Orders: React.FC<OrdersProps> = () => {
  const history = useHistory();
  const toast = useToast();
  const ordersDispatch = useOrdersDispatch();

  const [state, setState] = useState<OrdersState>({
    orders: [],
    lastDoc: null,
    firstDoc: null,
    openAddModal: false,
  });

  const NewOrderSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    addressStreet: Yup.string().required("Address street required"),
    addressCountry: Yup.string().required("Address country required"),
    addressCity: Yup.string().required("Address city required"),
    bookingDate: Yup.string().required("booking date required"),
    customerName: Yup.string().required("customer name required"),
    customerPhone: Yup.string().required("customer phone required").min(12),
    customerEmail: Yup.string().required("customer email required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      addressStreet: "",
      addressCountry: "",
      addressCity: "",
      bookingDate: "",
      customerName: "",
      customerPhone: "",
      customerEmail: "",
    },
    validationSchema: NewOrderSchema,
    onSubmit: async (
      {
        addressCity,
        addressCountry,
        addressStreet,
        bookingDate,
        customerEmail,
        customerName,
        customerPhone,
        title,
      },
      { resetForm }
    ) => {
      const payload = {
        title,
        address: {
          city: addressCity,
          country: addressCountry,
          street: addressStreet,
        },
        bookingDate,
        customer: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
        },
      };
      await addNewOrder(payload);
      resetForm();
      setState((s) => ({ ...s, openAddModal: false }));
      toast({
        title: "New Order Added.",
        description: "you have successfully added a new order",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  useEffect(() => {
    (async () => {
      await fetchOrders("next");
    })();
  }, []);

  const fetchOrders = async (direction: "next" | "prev", doc?: any) => {
    const response = await getOrders(direction, doc);
    setState((s) => ({ ...s, ...response }));
    ordersDispatch({ type: "currentOrders", payload: response.orders });
  };

  const handleFetch = async (direction: "next" | "prev") => {
    const docToUse = {
      next: state.lastDoc,
      prev: state.firstDoc,
    };
    await fetchOrders(direction, docToUse[direction]);
  };

  const handleEdit = (item: any) => {
    if (!item.uid) {
      return toast({
        title: "No Order ID",
        description: "This order id was not found!!",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    history.push(`/orders/${item.uid}`);
  };

  return (
    <MainLayout>
      <OrdersView
        headers={[
          "title",
          "bookingDate",
          "address",
          "country",
          "customer name",
        ]}
        data={state.orders}
        handleFetch={handleFetch}
        addNewOrderProps={{
          errors: formik.errors,
          onChange: formik.handleChange,
          onSubmit: formik.handleSubmit,
          submitting: formik.isSubmitting,
          touched: formik.touched,
          values: formik.values,
        }}
        handleOpenModal={() => setState((s) => ({ ...s, openAddModal: true }))}
        handleCloseModal={() =>
          setState((s) => ({ ...s, openAddModal: false }))
        }
        modalIsOpen={state.openAddModal}
        handleEdit={handleEdit}
      />
    </MainLayout>
  );
};

export default Orders;
