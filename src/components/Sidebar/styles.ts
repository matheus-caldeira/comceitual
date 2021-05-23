import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 6;

  padding: 0;
`;

export const Content = styled.nav`
  width: 100%;
  max-width: 100%;
  min-width: 320px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;

  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.primary};

  img {
    object-fit: contain;
    width: 90%;
    margin: 15px auto 40px;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

export const Menu = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
  z-index: 7;
  width: 40px;
  height: 40px;
  border: 2px solid ${props => props.theme.colors.a.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: none;
  background: none;

  svg {
    color: ${props => props.theme.colors.a.color};
    border: none;
    background-color: none;
    padding: 5px;
  }
`;
