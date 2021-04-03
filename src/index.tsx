import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AppRoutes from "./routes/index";
import { AuthProvider } from "./context/AuthContext";
import { OrdersProvider } from "./context/OrdersContext";

render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <OrdersProvider>
          <AppRoutes />
        </OrdersProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
