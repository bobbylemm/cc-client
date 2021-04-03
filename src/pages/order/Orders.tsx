import React, { useEffect, useState } from "react";

import OrdersView from "../../components/presentational/orders/Orders";
import { getOrders } from "../../apis";
import MainLayout from "../../components/layouts/main";
import { OrderType } from "../../types";

interface OrdersProps {}

interface OrdersState {
  orders: OrderType[];
  lastDoc: any;
  firstDoc: any;
}

const Orders: React.FC<OrdersProps> = () => {
  const [state, setState] = useState<OrdersState>({
    orders: [],
    lastDoc: null,
    firstDoc: null,
  });

  useEffect(() => {
    (async () => {
      await fetchOrders("next");
    })();
  }, []);

  const fetchOrders = async (direction: "next" | "prev", doc?: any) => {
    const orders = await getOrders(direction, doc);
    setState(orders);
  };

  const handleFetch = async (direction: "next" | "prev") => {
    const docToUse = {
      next: state.lastDoc,
      prev: state.firstDoc,
    };
    await fetchOrders(direction, docToUse[direction]);
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
      />
    </MainLayout>
  );
};

export default Orders;
