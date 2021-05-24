import styled from 'styled-components';

interface IImagem {
  url?: string;
}

const image =
  'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=332&q=80';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  padding-bottom: 50px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 50px 10%;

  &.custom {
    img {
      width: 150px;
      object-fit: contain;
    }
    .info {
      width: auto;
      h4,
      h1 {
        text-align: center;
      }
      span {
        margin: 15px;
      }
    }
  }

  header + & {
    margin-top: 60px;
    h1 {
      font-size: 2rem;
    }

    .name {
      font-size: 1.8rem;
    }
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;
    background-color: ${props => props.theme.colors.background.primary};

    .info {
      margin: 0 0 0 10px;
    }
  }

  & + section {
    margin-top: 40px;
  }

  div {
    min-width: 40%;

    @media (max-width: 360px) {
      min-width: 0;
    }
  }

  .info {
    width: 100%;
    max-width: 400px;
    padding: 40px 0;
    margin: 0 10px 0 0;

    h1 {
      color: ${props => props.theme.colors.a.color};
      margin-bottom: 20px;
    }

    h4 + h4 {
      margin-top: 40px;
    }

    span {
      font-size: 1rem;
      color: ${props => props.theme.colors.secondary};
    }

    @media (min-width: 830px) {
      max-width: 500px;
    }

    @media (min-width: 930px) {
      max-width: 600px;
    }

    @media (min-width: 1030px) {
      max-width: 700px;
    }

    @media (min-width: 1130px) {
      max-width: 800px;
    }
  }
`;

export const Background = styled.div<IImagem>`
  flex: 1;
  background: url(${props => (props.url ? props.url : image)}) no-repeat center;
  background-size: ${props => (props.url ? 'contain' : 'cover')};
`;
