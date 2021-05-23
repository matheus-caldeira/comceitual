import React from 'react';
import { v4 } from 'uuid';

import { Container, Photo } from './styles';

interface IProps {
  photos: string[];
}

const Photos: React.FC<IProps> = ({ photos }) => {
  return (
    <Container>
      {photos.map(photo => (
        <Photo src={photo} key={v4()} />
      ))}
    </Container>
  );
};

export default Photos;
