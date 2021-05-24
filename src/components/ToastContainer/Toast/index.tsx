import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { SpringValue } from 'react-spring';

import IToastMessage from '../../../DTOS/IToastMessage';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface IStyle extends Omit<React.CSSProperties, 'opacity' | 'right'> {
  opacity: undefined | SpringValue<number>;
  right: undefined | SpringValue<string>;
}

interface IToastProps {
  message: IToastMessage;
  style: IStyle;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasdescription={message.description ? 'true' : 'false'}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        data-testid="closeToast"
        type="button"
        onClick={() => removeToast(message.id)}
      >
        <FiXCircle />
      </button>
    </Container>
  );
};

export default Toast;
