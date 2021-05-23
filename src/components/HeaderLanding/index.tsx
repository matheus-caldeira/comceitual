import React, { useCallback, useState } from 'react';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { useTheme } from '../../hooks/theme';
import { useToast } from '../../hooks/toast';

import Sidebar from '../Sidebar';

import { Container, Nav, Section, Button } from './styles';

const HeaderLanding: React.FC = () => {
  const { changeTheme, theme } = useTheme();
  const { addToast } = useToast();
  const [show, setShow] = useState(false);

  const switchTheme = useCallback(() => {
    try {
      changeTheme();
      addToast({
        title: 'Tema trocado com sucesso',
        type: 'success',
      });
    } catch {
      addToast({
        title: 'Erro ao trocar de tema',
        description: 'Um erro inesperado ocorreu ao trocar o tema.',
        type: 'error',
      });
    }
  }, [addToast, changeTheme]);

  return (
    <Container>
      <Nav>
        <Section>
          <Link to="/">
            <VscGithubAlt size={40} className="icon" />
            <h1>Desafio Github</h1>
          </Link>
        </Section>
        <Section className="links">
          <a href="/">Para voluntários</a>
          <a href="/">Para empresas</a>
          <Button onClick={switchTheme}>
            {theme.title === 'dark' ? (
              <FiMoon size={30} />
            ) : (
              <FiSun size={30} />
            )}
          </Button>
        </Section>
        <Section className="menu">
          <Button onClick={() => setShow(true)}>
            <FiMenu size={30} />
          </Button>
          <Sidebar close={() => setShow(false)} show={show} />
        </Section>
      </Nav>
    </Container>
  );
};

export default HeaderLanding;
