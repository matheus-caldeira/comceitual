import React from 'react';

import Header from '../../components/HeaderLanding';

import logo from '../../assets/images/logo_1.svg';
import pc from '../../assets/images/pc.png';
import benificios from '../../assets/images/benificios.png';

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
      <Section>
        <div className="info">
          <h1>Beneficios da transformação digital</h1>
          <h4>
            <span>Redução de custos operacionais:</span> A tecnologia muitas
            vezes ajudará a reduzir alguns custos do dia a dia, além de tornar o
            processo muito mais prático e automatizado, permitindo que a ONG
            consiga reduzir os gastos.
          </h4>
          <h4>
            <span>Facilidade na comunicação:</span> Hoje, graças às redes
            sociais e canais digitais, é possível que o consumidor não só se
            comunique diretamente com a empresa, como seja o produtor principal
            de conteúdo a respeito da sua organização.
          </h4>
          <h4>
            <span>Otimização de processos: </span> Quando usamos a tecnologia a
            nosso favor, podemos encontrar os gargalos durante todo o processo e
            conseguimos utilizar ferramentas diversas para tornar tudo mais
            simples e prático, melhorando não só a gestão da ONG de modo geral,
            como a experiência do dos voluntários .
          </h4>
          <h4>
            <span>Aumento da segurança:</span> A tecnologia proveniente da
            transformação digital também é uma grande aliada da segurança,
            principalmente nos meios digitais. É por meio de ferramentas
            adequadas que você irá conseguir que seu site seja seguro.
          </h4>
        </div>
        <Background url={benificios} />
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
