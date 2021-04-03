import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"

import AppRoutes from './routes/index'

render(<React.StrictMode>
  <ChakraProvider>
    <AppRoutes />
  </ChakraProvider>
</React.StrictMode>, document.getElementById('root'));