import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const signUpBackgroundImg =
  'https://images.unsplash.com/photo-1621696431089-2d580893465f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 100%;
  min-height: 100%;
  padding: 20px 0;

  animation: ${apperFromRight} 1s;

  img {
    object-fit: contain;
    width: 70%;
    margin: 0 auto;
  }

  form {
    margin: 0;
    width: 340px;
    text-align: center;
    position: relative;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: ${props => props.theme.colors.a.color};
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.a.color)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
