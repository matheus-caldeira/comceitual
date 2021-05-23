import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
        <Link to="/ongs">
          <p>Ongs</p>
          <FiChevronRight size={30} />
        </Link>
        <Link to="/signin">
          <p>Entrar</p>
          <FiChevronRight size={30} />
        </Link>
        <Link to="/signup">
          <p>Junte-se a nós!</p>
          <FiChevronRight size={30} />
        </Link>
      </Content>
    </Container>
  );
};

export default StoreHeader;
