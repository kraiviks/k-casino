import { FC } from 'react';
import { Container, Sprite } from '@pixi/react';
import bg from '../../../../assets/hummers/bg.jpg';

const HummersBgPX: FC = () => {
  return (
    <Container>
      <Sprite x={0} y={0} image={bg} />
    </Container>
  );
};

export default HummersBgPX;
