import React from 'react';
import ReactDOM from 'react-dom/client';

import StyledProvider from '@/components/provider/StyledProvider.tsx';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledProvider>
      <App />
    </StyledProvider>
  </React.StrictMode>,
);
