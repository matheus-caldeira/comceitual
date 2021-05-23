import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import { FiX } from 'react-icons/fi';

import logo from '../../assets/images/logo.png';

import { Container, Content, Menu } from './styles';

interface IProps {
  close(): void;
  show: boolean;
}

const StoreHeader: React.FC<IProps> = ({ close, show }) => {
  const { left } = useSpring({
    from: { left: '-120%' },
    left: show ? '0' : '-120%',
  });

  useEffect(() => {
    document.querySelectorAll('#sidebar button').forEach(element => {
      element.addEventListener('click', close);
    });
  }, [close]);

  return (
    <Container style={{ left }} id="sidebar">
      <Content>
        <img src={logo} alt="Comceitual" />
        <Menu type="button">
          <FiX size={30} />
        </Menu>
        <p>links</p>
      </Content>
    </Container>
  );
};

export default StoreHeader;
