import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: ${props => props.theme.colors.input.background};
  border-radius: 10px;
  height: 40px;
  padding: 0 1rem;
  width: 100%;

  border: 2px solid ${props => props.theme.colors.input.border};
  color: ${props => props.theme.colors.input.color};

  display: flex;
  flex-direction: row;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.status.errorLabel};
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid ${props.theme.colors.input.colorFocus};
      color: ${props.theme.colors.input.colorFocus};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.input.colorFocus};
    `}

  input {
    flex-grow: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${props => props.theme.colors.input.color};
    }
  }

  svg {
    margin-right: 16px;
    min-width: 20px;
    min-height: 20px;
  }

  @media (max-width: 481px) {
    input {
      width: 80%;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${props => props.theme.colors.status.errorLabel};
    color: ${props => props.theme.colors.status.errorText};

    &::before {
      border-color: ${props => props.theme.colors.status.errorLabel} transparent;
    }
  }
`;
