import styled from 'styled-components';

export const Container = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  padding: 0 15px;
  z-index: 10;
`;

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.header.color};
  }

  h1 {
    margin-left: 16px;
  }

  svg {
    background-color: ${props => props.theme.colors.header.color};
    color: ${props => props.theme.colors.header.background};
    border-radius: 50%;
    padding: 5px;
  }
`;
