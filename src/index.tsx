import React from 'react';
import { render } from 'react-dom';

import AppRoutes from './routes/index'

render(<React.StrictMode>
  <AppRoutes />
</React.StrictMode>, document.getElementById('root'));