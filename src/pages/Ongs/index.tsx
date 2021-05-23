import React from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/HeaderLanding';

import { Container, Input, Ong, Ongs as Content, Search } from './styles';

const Ongs: React.FC = () => {
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
      <Header back />
      <Search>
        <Input>
          <FiSearch size={25} />
          <input type="search" placeholder="Procurar" />
        </Input>
        <Input>
          <select name="" id="">
            <option value="value">Necessidade</option>
            <option value="value">Infantil</option>
            <option value="value">Drogas</option>
            <option value="value">Tipos</option>
          </select>
        </Input>
      </Search>

      <Content>
        {ongs.map(ong => (
          <Ong key={ong.id} to={`/ongs/${ong.id}`}>
            <div className="img-container">
              <img src={ong.image} alt={ong.name} />
              <div className="types">
                {ong.types.map(type => (
                  <p key={`${type}-${ong.id}`}>{type}</p>
                ))}
              </div>
            </div>
            <div className="info">
              <h1>{ong.name}</h1>
              <p>{ong.description}</p>
            </div>
          </Ong>
        ))}
      </Content>
    </Container>
  );
};

export default Ongs;
