import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { OrderType } from "../../../types";

interface CustomTableProps {
  headers: string[];
  data: OrderType[];
  handleFetch: (direction: "next" | "prev") => void;
  handleEdit: (item: OrderType) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({
  headers,
  data,
  handleFetch,
  handleEdit,
}) => {
  return (
    <Table size="sm">
      <TableCaption>Orders Data</TableCaption>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      {data.length ? (
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.title}</Td>
              <Td>{item.bookingDate}</Td>
              <Td>{item.address.street}</Td>
              <Td>{item.address.country}</Td>
              <Td>{item.customer.name}</Td>
              <Td>
                <Button
                  onClick={() => handleEdit(item)}
                  backgroundColor="#8BAAAD"
                  size="sm"
                >
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      ) : (
        <Flex justifyContent="center" py="2rem" width="100%">
          <Heading>No Data</Heading>
        </Flex>
      )}
      <Tfoot>
        <Tr>
          <Th>
            <Button onClick={() => handleFetch("prev")}>Prev</Button>
          </Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th>
            <Button onClick={() => handleFetch("next")}>Next</Button>
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default CustomTable;
