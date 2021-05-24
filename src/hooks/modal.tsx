import React, { createContext, useCallback, useContext } from 'react';

import Modal from '../components/Modal';

interface IModalContextData {
  open(): void;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const open = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.querySelector('#modal')?.classList.add('active');
  }, []);

  const close = useCallback(() => {
    document.body.style.overflow = 'visible';
    document.querySelector('#modal')?.classList.remove('active');
  }, []);

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      <Modal close={close} />
    </ModalContext.Provider>
  );
};

function useModal(): IModalContextData {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModal must be used within a ModalProvider');

  return context;
}

export { useModal, ModalProvider };
