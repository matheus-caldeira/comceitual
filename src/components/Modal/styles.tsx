import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: none;
  overflow: hidden;
  outline: 0;
  padding-bottom: 2rem;

  &.active {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Content = styled.div`
  min-width: 320px;
  max-width: 500px;
  margin: 80px;
  padding: 40px;
  border-radius: 18px;
  height: 300px;
  position: relative;

  background-color: ${props => props.theme.colors.background.primary};

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    background: none;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.button.background};
    color: ${props => props.theme.colors.button.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
