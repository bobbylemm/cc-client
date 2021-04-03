import React from "react";
import { CustomModal } from "../../reusable";
import OrderForm from "./OrderForm";

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
  isOpen?: boolean;
  onClose?: () => void;
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
    <CustomModal
      title="New Order"
      isOpen={isOpen as boolean}
      onClose={onClose as () => void}
    >
      <OrderForm
        {...{ errors, touched, values, onChange, onSubmit, submitting }}
        actionType="creating"
      />
    </CustomModal>
  );
};

export default AddOrderModal;
