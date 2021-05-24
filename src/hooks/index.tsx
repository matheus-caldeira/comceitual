import React from 'react';
import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
