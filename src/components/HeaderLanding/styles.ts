import styled from 'styled-components';

interface IGoBack {
  show: boolean;
}

export const Container = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  padding: 0 15px;
  z-index: 10;

  &.custom {
    position: relative;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 15px 90px;

  height: auto;

  .menu {
    display: none;
  }

  @media (max-width: 768px) {
    &.custom {
      padding: 50px 40px 15px;
    }
    padding: 20px 0;
  }

  @media (max-width: 750px) {
    &.custom {
      padding: 50px 0 15px;
    }
    padding: 20px 0;
  }

  @media (max-width: 582px) {
    &.custom {
      padding: 50px 0 15px;
    }
    padding: 20px 0;

    .links {
      display: none;
      &.custom {
        margin: 20px auto 0;
        display: block;
      }
    }

    .menu {
      display: block;
    }
  }
`;

export const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 32px;

  img {
    height: 60px;

    @media (max-width: 320px) {
      max-width: 300px;
    }
  }

  &.custom {
    flex-direction: column;
    align-items: flex-start;
    p {
      margin-top: 10px;
    }
  }

  &.links {
    a.active,
    button.active {
      color: ${props => props.theme.colors.a.color};
      background: none;
      border: 2px solid ${props => props.theme.colors.a.color};
      border-radius: 16px;
      padding: 5px 8px;

      & + a,
      & + button {
        background-color: ${props => props.theme.colors.a.color};
        color: ${props => props.theme.colors.secondary};
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.header.color};

    margin-right: 16px;
  }

  svg {
    color: ${props => props.theme.colors.a.color};
    background: none;
    padding: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.a.color};
  border-radius: 50%;
`;

export const GoBack = styled.button<IGoBack>`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 5px;
    padding: 2px;
  }

  display: ${props => (props.show ? 'flex' : 'none')};

  @media (max-width: 768px) {
    &.custom {
      top: 10px;
    }
  }
`;
