import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/HeaderLanding';
import Photos from '../../components/Photos';
import Performance from '../../components/Performance';

import { projects, photos, feedback } from '../../utils/datas';
import { Background, Section } from '../Landing/styles';

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
          Relátorios
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
        {subPage === 0 && (
          <>
            {feedback.map(feed => (
              <Section key={`feed-${feed.id}`}>
                <div className="info">
                  <h1>{feed.name}</h1>
                  <h4>
                    Lorem <span>ipsum dolor sit amet</span> consectetur
                    adipisicing elit. Fuga assumenda minima fugiat vero dolore
                    nisi at minus id expedita molestias nam maiores eos
                    temporibus iure, neque quasi, debitis tempore similique.
                  </h4>
                  <h4>
                    Lorem <span>ipsum dolor sit amet</span> consectetur
                    adipisicing elit. Fuga assumenda minima fugiat vero dolore
                    nisi at minus id expedita molestias nam maiores eos
                    temporibus iure, neque quasi, debitis tempore similique.
                  </h4>
                </div>
                <Background url={feed.image} />
              </Section>
            ))}
          </>
        )}
        {subPage === 1 && <Performance />}
        {subPage === 2 && <Photos photos={photos} />}
      </Content>
    </Container>
  );
};

export default Project;
