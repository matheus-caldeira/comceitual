import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  width: 200px;
  margin: 0.5rem;
  object-fit: contain;

  @media (max-width: 538px) {
    width: 100%;
    object-fit: cover;
  }
`;
