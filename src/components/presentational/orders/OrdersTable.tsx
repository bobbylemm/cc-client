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
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { OrderType } from "../../../types";

interface CustomTableProps {
  headers: string[];
  data: OrderType[];
  handleFetch: (direction: "next" | "prev") => void;
  handleEdit: (item: OrderType) => void;
}

const parseDate = (data: any) => {
  if (["number", "string"].includes(typeof data)) {
    return new Date(Number(data)).toLocaleDateString();
  } else {
    return "N/A";
  }
};

const CustomTable: React.FC<CustomTableProps> = ({
  headers,
  data,
  handleFetch,
  handleEdit,
}) => {
  return (
    <>
      {data.length ? (
        <Table size="sm">
          <TableCaption>Orders Data</TableCaption>
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>{item?.title || "N/A"}</Td>
                <Td>{parseDate(item.bookingDate)}</Td>
                <Td>{item?.address?.street || "N/A"}</Td>
                <Td>{item?.address?.country || "N/A"}</Td>
                <Td>{item?.customer?.name || "N/A"}</Td>
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

          <Tfoot>
            <Tr>
              <Th py="1rem">
                <Button
                  backgroundColor="#4D4847"
                  onClick={() => handleFetch("prev")}
                  color="#fff"
                >
                  Prev Page
                </Button>
              </Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th py="1rem">
                <Button
                  backgroundColor="#4D4847"
                  onClick={() => handleFetch("next")}
                  color="#fff"
                >
                  Next Page
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      ) : (
        <Flex justifyContent="center" py="2rem">
          <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </>
  );
};

export default CustomTable;
