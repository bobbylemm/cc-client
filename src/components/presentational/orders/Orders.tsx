import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import CustomTable from "./OrdersTable";
import AddOrderModal, { AddOrderModalProps } from "./NewOrder";

interface OrdersViewProps {
  headers: string[];
  data: any[];
  handleFetch: (direction: "next" | "prev") => void;
  addNewOrderProps: Partial<AddOrderModalProps>;
  modalIsOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  handleEdit: (item: any) => void;
}

const OrdersView: React.FC<OrdersViewProps> = ({
  headers,
  data,
  handleFetch,
  handleOpenModal,
  handleCloseModal,
  addNewOrderProps,
  modalIsOpen,
  handleEdit,
}) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        backgroundColor="#000F08"
        flexDirection="column"
      >
        <Flex mb="1rem" justifyContent="flex-end" width="60%">
          <Button size="md" color="#1C3738" onClick={handleOpenModal}>
            New Order
          </Button>
        </Flex>
        <Box
          width="60%"
          backgroundColor="#F4FFF8"
          p="1rem"
          borderRadius=".4rem"
          overflowX="auto"
        >
          <CustomTable {...{ headers, data, handleFetch, handleEdit }} />
        </Box>
      </Flex>
      <AddOrderModal
        {...addNewOrderProps}
        onClose={handleCloseModal}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default OrdersView;
