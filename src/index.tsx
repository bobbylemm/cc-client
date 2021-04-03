import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AppRoutes from "./routes/index";
import { AuthProvider } from "./context/AuthContext";

render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
