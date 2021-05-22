import React from 'react';
import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default AppProvider;
