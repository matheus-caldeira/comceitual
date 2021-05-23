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
  /* max-width: 1000px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 90px;

  .menu {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 750px) {
    padding: 0 20px;
  }

  @media (max-width: 590px) {
    padding: 0 20px;

    .links {
      display: none;
    }

    .menu {
      display: block;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.header.color};

    margin-right: 16px;
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;
