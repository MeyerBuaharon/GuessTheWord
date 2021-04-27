import {routes} from '../../navigation';
import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Typography} from '.';

const Container = styled.View`
  position: absolute;
  top: 15;
  right: 15;
`;

const Timer: React.FC<any> = ({navigate}) => {
  const [seconds, setSeconds] = React.useState(3);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      navigate(routes.gameOver.name);
    }
  });

  return (
    <Container>
      <Typography>{seconds}</Typography>
    </Container>
  );
};
export default Timer;
