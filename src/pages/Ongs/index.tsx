import React from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/HeaderLanding';

import { ongs } from '../../utils/datas';

import { Container, Input, Ong, Ongs as Content, Search } from './styles';

const Ongs: React.FC = () => {
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
