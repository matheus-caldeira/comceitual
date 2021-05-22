import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: 'true' | 'false';
}

const toastTypeVariations = {
  info: css`
    background: ${props => props.theme.colors.status.infoLabel};
    color: ${props => props.theme.colors.status.infoText};
  `,
  success: css`
    background: ${props => props.theme.colors.status.successLabel};
    color: ${props => props.theme.colors.status.successText};
  `,
  error: css`
    background: ${props => props.theme.colors.status.errorLabel};
    color: ${props => props.theme.colors.status.errorText};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 320px;

  position: relative;
  padding: 16px 40px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 0.87rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    font-size: 16px;
    right: 10px;
    top: 10px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    props.hasdescription === 'false' &&
    css`
      align-items: center;

      svg: {
        margin-top: 0;
      }
    `}

  @media (max-width: 320px) {
    max-width: 300px;
  }
`;
