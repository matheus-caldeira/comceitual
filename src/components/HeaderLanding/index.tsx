import React, { useState } from 'react';
import { FiMenu, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { useModal } from '../../hooks/modal';

import Sidebar from '../Sidebar';

import { Container, Nav, Section, Button, GoBack } from './styles';

interface IProps {
  back?: boolean;
  custom?: boolean;
  name?: string;
  description?: string;
}

const HeaderLanding: React.FC<IProps> = ({
  back = false,
  custom = false,
  name = '',
  description = '',
}) => {
  const [show, setShow] = useState(false);
  const { goBack } = useHistory();
  const { open } = useModal();

  if (custom)
    return (
      <Container className="custom">
        <Nav className="custom">
          <Section className="custom">
            <h1>{name}</h1>
            <p>{description}</p>
          </Section>
          <Section className="links custom">
            <button type="button" onClick={open} className="active">
              Acompanhar
            </button>
          </Section>
          <GoBack className="custom" type="button" onClick={goBack} show>
            <FiArrowLeft size={25} />
            Voltar
          </GoBack>
        </Nav>
      </Container>
    );

  return (
    <Container>
      <Nav className={back ? 'custom' : ''}>
        <Section>
          <Link to="/">
            <h1>COMceitual</h1>
          </Link>
        </Section>
        <Section className="links">
          <Link to="/ongs">Ongs</Link>
          <Link to="/signin" className="active">
            Entrar
          </Link>
          <Link to="/signup" className="active">
            Junte-se a nós!
          </Link>
        </Section>
        <Section className="menu">
          <Button onClick={() => setShow(true)}>
            <FiMenu size={30} />
          </Button>
          <Sidebar close={() => setShow(false)} show={show} />
        </Section>
        <GoBack type="button" onClick={goBack} show={back}>
          <FiArrowLeft size={25} />
          Voltar
        </GoBack>
      </Nav>
    </Container>
  );
};

export default HeaderLanding;
