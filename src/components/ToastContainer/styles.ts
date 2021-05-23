import styled from 'styled-components';

interface IProps {
  show: boolean;
}

export const Container = styled.div<IProps>`
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
  z-index: 10;

  display: ${props => (props.show ? 'block' : 'none')};
`;
