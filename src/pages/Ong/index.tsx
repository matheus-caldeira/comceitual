import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/HeaderLanding';

import { Container, Content, Nav } from './styles';

interface IRouteProps {
  id: string;
}

const Ong: React.FC = () => {
  const { id } = useParams<IRouteProps>();
  const [subPage, setSubPage] = useState(0);

  const ongs = [
    {
      id: 0,
      name: 'Sol',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      types: ['Infantil', 'violencia', 'Drogas'],
      image:
        'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
    },
    {
      id: 1,
      name: 'Lua',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      types: ['Infantil', 'violencia', 'Drogas'],
      image:
        'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
    },
    {
      id: 2,
      name: 'Casa',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      types: ['Infantil', 'violencia', 'Drogas'],
      image:
        'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
    },
  ];
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

      <Content />
    </Container>
  );
};

export default Ong;
