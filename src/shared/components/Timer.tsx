import {routes} from '../../navigation';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Typography} from '.';

const Container = styled.View`
  position: absolute;
  top: 15;
  right: 15;
`;

const Timer: React.FC<any> = ({navigate, resetTimer, setResetTimer}) => {
  const [seconds, setSeconds] = React.useState(30);
  useEffect(() => {
    if (resetTimer) {
      setSeconds(30);
      setResetTimer(false);
    } else if (seconds > 0) {
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
