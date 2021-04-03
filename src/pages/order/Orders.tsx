import React from "react";
import MainLayout from "../../components/layouts/main";

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {
  return (
    <MainLayout>
      <div>Orders page</div>
    </MainLayout>
  );
};

export default Orders;
