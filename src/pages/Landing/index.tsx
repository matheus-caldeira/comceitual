import React from 'react';

import Header from '../../components/HeaderLanding';

import logo from '../../assets/images/logo_1.svg';
import pc from '../../assets/images/pc.png';

import { Background, Container, Section } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <Section>
        <div className="info">
          <h1>Estrategize</h1>
          <h4>
            <span className="name">
              Otimizando a performance do terceiro setor
            </span>
          </h4>
          <h4>
            A <span>Estrategize</span>, não é apenas uma plataforma e sim, um
            grupo de pessoas que buscam transformar digitalmente a qualidade das
            <span> ONG’s</span>, ao perceber a necessidade que possuem ao tentar
            adquirir informações e assessoria para a implementação das suas
            novas ideias.
          </h4>
        </div>
        <Background url={logo} />
      </Section>
      <Section>
        <div className="info">
          <h1>O que é transformação digital</h1>
          <h4>
            Transformação Digital é um processo que busca reestruturar os
            processos da sua empresa, utilizando da tecnologia para melhorar seu
            desempenho, ampliar seu alcance e otimizar os resultados, gerando
            assim, uma mudança de mindset em toda a empresa, tanto internamente
            quanto externamente, para os clientes.
          </h4>

          <h4>
            Lorem <span>ipsum dolor sit amet</span> consectetur adipisicing
            elit. Fuga assumenda minima fugiat vero dolore nisi at minus id
            expedita molestias nam maiores eos temporibus iure, neque quasi,
            debitis tempore similique.
          </h4>
        </div>
        <Background url={pc} />
      </Section>
      {/* <Section className="custom">
        <img src={pc} alt="Ongs" />
        <div className="info">
          <h1>Principais Ongs</h1>
          <h4>
            <span>Playing For Change</span>
            <br />
            <span>CECAP PARANAVAÍ</span>
            <br />
            <span>Goodtruck Brasil</span>
            <br />
            <span>Aldeias Infantis SOS Brasil </span>
            <br />
            <span>Escola Nilza Tartuce </span>
            <br />
            <span>Projeto Maestro da Bola</span>
          </h4>
        </div>
        <img src={pc} alt="Ongs" />
      </Section> */}
    </Container>
  );
};

export default Landing;
