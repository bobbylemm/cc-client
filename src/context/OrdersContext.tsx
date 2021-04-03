import React from "react";
import { OrderType } from "~/types";

type Action = { type: "currentOrders"; payload: any };
type Dispatch = (action: Action) => void;
type State = {
  orders: OrderType[];
};
type OrdersProviderProps = { children: React.ReactNode };
const OrdersStateContext = React.createContext<State | undefined>(undefined);
const OrdersDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const OrdersReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "currentOrders": {
      return { ...state, orders: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [state, dispatch] = React.useReducer(OrdersReducer, {
    orders: [],
  });

  return (
    <OrdersStateContext.Provider value={state}>
      <OrdersDispatchContext.Provider value={dispatch}>
        {children}
      </OrdersDispatchContext.Provider>
    </OrdersStateContext.Provider>
  );
};

const useOrdersState = () => {
  const context = React.useContext(OrdersStateContext);
  if (context === undefined) {
    throw new Error("useOrdersState must be used within an OrdersProvider");
  }
  return context;
};

const useOrdersDispatch = () => {
  const context = React.useContext(OrdersDispatchContext);
  if (context === undefined) {
    throw new Error("useOrdersDispatch must be used within an OrdersProvider");
  }
  return context;
};

export { OrdersProvider, useOrdersState, useOrdersDispatch };
