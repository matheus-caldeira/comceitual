import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useModal } from '../../hooks/modal';

import Header from '../../components/HeaderLanding';
import Photos from '../../components/Photos';
import Performance from '../../components/Performance';

import { ongs, photos, projects } from '../../utils/datas';

import { Container, Content, Nav, Project } from './styles';

interface IRouteProps {
  id: string;
}

const Ong: React.FC = () => {
  const { id } = useParams<IRouteProps>();
  const [subPage, setSubPage] = useState(0);
  const { open } = useModal();

  return (
    <Container>
      <Header
        custom
        name={ongs[parseFloat(id)].name}
        description={ongs[parseFloat(id)].description}
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
        {subPage === 0 &&
          projects.map(project => (
            <Project key={project.id}>
              <img src={project.image} alt={project.name} />
              <div className="name">
                <h1>{project.name}</h1>
                <Link to={`/projects/${project.id}`}>Ver projeto</Link>
                <button type="button" onClick={open}>
                  Acompanhar
                </button>
              </div>
              <p>{project.description}</p>
            </Project>
          ))}
        {subPage === 1 && <Performance />}
        {subPage === 2 && <Photos photos={photos} />}
      </Content>
    </Container>
  );
};

export default Ong;
