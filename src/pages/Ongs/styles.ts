import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  padding-bottom: 50px;
  min-height: 100vh;
`;

export const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: relative;
  width: 100%;
  padding: 0 10%;

  margin-top: 60px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.border};
  width: 230px;

  input,
  select {
    flex: 1;
    height: 100%;
    border: none;
    background: none;
  }

  & + div {
    margin-left: 40px;

    @media (max-width: 450px) {
      margin: 15px 0;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Ongs = styled.div`
  display: flex;
  padding: 40px 10%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Ong = styled(Link)`
  width: 300px;
  position: relative;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  color: ${props => props.theme.colors.primary};
  margin: 1rem;

  .img-container {
    width: 100%;
    border-radius: 8px;
    position: relative;

    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
    }

    .types {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

      p {
        font-size: 14px;
        border: 2px solid ${props => props.theme.colors.border};
        padding: 2px 4px;
        border-radius: 16px;
        margin: 1px;
      }
      bottom: 0px;
    }
  }

  .info {
    padding: 10px;
  }

  @media (max-width: 830px) {
    width: 100%;
  }
`;
