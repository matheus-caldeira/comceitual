import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/HeaderLanding';
import Photos from '../../components/Photos';

import { projects, photos } from '../../utils/datas';

import { Container, Content, Nav } from './styles';

interface IRouteProps {
  id: string;
}

const Project: React.FC = () => {
  const { id } = useParams<IRouteProps>();
  const [subPage, setSubPage] = useState(0);

  return (
    <Container>
      <Header
        custom
        name={projects[parseFloat(id)].name}
        description={projects[parseFloat(id)].description}
      />
      <Nav>
        <button
          type="button"
          onClick={() => setSubPage(0)}
          className={subPage === 0 ? 'active' : ''}
        >
          Projetos
        </button>
        <button
          type="button"
          onClick={() => setSubPage(1)}
          className={subPage === 1 ? 'active' : ''}
        >
          Desempenho
        </button>
        <button
          type="button"
          onClick={() => setSubPage(2)}
          className={subPage === 2 ? 'active' : ''}
        >
          Fotos
        </button>
      </Nav>

      <Content>
        {subPage === 0 && <div>relatorios</div>}
        {subPage === 1 && (
          <div>
            <p>Desempenho</p>
          </div>
        )}
        {subPage === 2 && <Photos photos={photos} />}
      </Content>
    </Container>
  );
};

export default Project;
