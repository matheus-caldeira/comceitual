import React, { useCallback } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { lighten } from 'polished';
import Switch from 'react-switch';

import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/theme';
import { useToast } from '../../hooks/toast';

import { Container, Nav, Section } from './styles';

const HeaderLanding: React.FC = () => {
  const { changeTheme, theme } = useTheme();
  const { addToast } = useToast();

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
        <Section>
          <a href="/">Para voluntários</a>
          <a href="/">Para empresas</a>
          <Switch
            onChange={switchTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            uncheckedHandleIcon={<FiSun size={30} />}
            checkedHandleIcon={<FiMoon size={30} />}
            height={10}
            width={40}
            handleDiameter={30}
            onColor={lighten(0.08, theme.colors.header.background)}
            offColor={lighten(0.08, theme.colors.header.background)}
            data-testid="changeTheme"
          />
        </Section>
      </Nav>
    </Container>
  );
};

export default HeaderLanding;
