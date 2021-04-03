import React from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { CustomModal } from "../../reusable";

interface OrderFields {
  title?: any;
  addressStreet?: any;
  addressCountry?: any;
  addressCity?: any;
  bookingDate?: any;
  customerName?: any;
  customerPhone?: any;
  customerEmail?: any;
}

export interface AddOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  touched: OrderFields;
  onChange: (e: React.ChangeEvent<any>) => void;
  values: OrderFields;
  errors: OrderFields;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  submitting: boolean;
}

const AddOrderModal: React.FC<AddOrderModalProps> = ({
  isOpen,
  onClose,
  errors,
  touched,
  values,
  onChange,
  onSubmit,
  submitting,
}) => {
  return (
    <CustomModal title="New Order" isOpen={isOpen} onClose={onClose}>
      <Flex py="10" flexDirection="column" alignItems="center">
        <FormControl id="title" isInvalid={!!errors.title && !!touched.title}>
          <FormLabel htmlFor="waiter">Title</FormLabel>
          <Input
            placeholder="order title"
            onChange={onChange}
            value={values.title as string}
          />
          <FormErrorMessage>{errors.title}</FormErrorMessage>
        </FormControl>

        <Flex width="100%" flexDirection="column" mt="1.3rem">
          <Text mb=".4rem" fontWeight="600">
            Address
          </Text>
          <FormControl
            id="addressStreet"
            isInvalid={!!errors.addressStreet && !!touched.addressStreet}
            mb="1rem"
          >
            <Input
              placeholder="enter address street"
              onChange={onChange}
              value={values.addressStreet as string}
            />
            <FormErrorMessage>{errors.addressStreet}</FormErrorMessage>
          </FormControl>

          <Flex alignItems="center" justifyContent="space-between">
            <FormControl
              id="addressCountry"
              isInvalid={!!errors.addressCountry && !!touched.addressCountry}
              mr="1rem"
            >
              <Select
                placeholder="Select country"
                onChange={onChange}
                value={values.addressCountry as string}
              >
                <option value="germany">Germany</option>
                <option value="spain">Spain</option>
                <option value="nigeria">Nigeria</option>
              </Select>
              <FormErrorMessage>{errors.addressCountry}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="addressCity"
              isInvalid={!!errors.addressCity && !!touched.addressCity}
            >
              <Input
                placeholder="enter city"
                onChange={onChange}
                value={values.addressCity as string}
              />
              <FormErrorMessage>{errors.addressCity}</FormErrorMessage>
            </FormControl>
          </Flex>
        </Flex>

        <FormControl
          id="bookingDate"
          pt="6"
          isInvalid={!!errors.bookingDate && !!touched.bookingDate}
        >
          <FormLabel htmlFor="bookingDate">Booking Date</FormLabel>
          <Flex alignItems="center" flexDirection="column">
            <Input
              placeholder="12/12/2020"
              onChange={onChange}
              value={values.bookingDate as string}
            />
            <FormErrorMessage>{errors.bookingDate}</FormErrorMessage>
          </Flex>
        </FormControl>

        <Flex width="100%" flexDirection="column" mt="1.3rem">
          <Text mb=".4rem" fontWeight="600">
            Customer
          </Text>
          <FormControl
            id="customerName"
            isInvalid={!!errors.customerName && !!touched.customerName}
            mb="1rem"
          >
            <Input
              placeholder="enter customer name"
              onChange={onChange}
              value={values.customerName as string}
            />
            <FormErrorMessage>{errors.customerName}</FormErrorMessage>
          </FormControl>

          <Flex alignItems="center" justifyContent="space-between">
            <FormControl
              id="customerEmail"
              isInvalid={!!errors.customerEmail && !!touched.customerEmail}
              mr="1rem"
            >
              <Input
                placeholder="enter customer email"
                onChange={onChange}
                value={values.customerEmail as string}
              />
              <FormErrorMessage>{errors.customerEmail}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="customerPhone"
              isInvalid={!!errors.customerPhone && !!touched.customerPhone}
            >
              <Input
                placeholder="enter city"
                onChange={onChange}
                value={values.customerPhone as string}
              />
              <FormErrorMessage>{errors.customerPhone}</FormErrorMessage>
            </FormControl>
          </Flex>
        </Flex>

        <Button
          mt="4rem"
          size="lg"
          width="80%"
          backgroundColor="yellow.200"
          onClick={(e: any) => onSubmit(e)}
          isLoading={submitting}
        >
          Submit
        </Button>
      </Flex>
    </CustomModal>
  );
};

export default AddOrderModal;
