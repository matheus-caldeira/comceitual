import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 6;

  background-color: rgba(0, 0, 0, 0.1);
  padding: 0;
`;

export const Content = styled.nav`
  width: 95%;
  max-width: 100%;
  min-width: 320px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};

  img {
    object-fit: contain;
    width: 90%;
    margin: 0 auto;
  }

  section {
    margin: 20px 0;

    h3 {
      margin-bottom: 16px;
    }

    div {
      button,
      a {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
        border: none;
        margin: 5px;
        padding: 5px;
        border-radius: 8px;
        text-decoration: none;
      }
    }
  }
`;

export const Menu = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
  z-index: 7;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};

  svg {
    background: none;
    color: ${props => props.theme.colors.background};
  }
`;
