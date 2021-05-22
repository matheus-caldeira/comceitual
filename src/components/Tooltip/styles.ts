import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${props => props.theme.colors.button.background};
    padding: 8px;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;

    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    right: -2px;
    /* transform: translateX(-50%); */

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${props => props.theme.colors.button.background} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      right: 0;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
