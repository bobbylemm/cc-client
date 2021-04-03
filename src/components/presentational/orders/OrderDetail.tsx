import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import OrderForm from "./OrderForm";
import { AddOrderModalProps } from "./NewOrder";

interface OrderDetailViewProps extends AddOrderModalProps {
  navigateBack: () => void;
}

const OrderDetailView: React.FC<OrderDetailViewProps> = ({
  errors,
  touched,
  values,
  onChange,
  onSubmit,
  submitting,
  navigateBack,
}) => {
  return (
    <Flex minHeight="100vh" backgroundColor="#1C3738" flexDirection="column">
      <Flex justifyContent="flex-start" flex={0.2} p="1rem">
        <Button onClick={navigateBack}>Go back</Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          background="white"
          px="2rem"
          borderRadius=".4rem"
          flexDirection="column"
          alignItems="center"
          pt="1rem"
        >
          <Text fontSize="2rem" fontWeight="700">
            Update Order
          </Text>
          <OrderForm
            {...{ errors, touched, values, onChange, onSubmit, submitting }}
            actionType="updating"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDetailView;
