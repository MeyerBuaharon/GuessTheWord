import {routes} from '../../navigation';
import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

const Timer: React.FC<any> = ({navigate}) => {
  const [seconds, setSeconds] = React.useState(10);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      navigate(routes.gameOver.name);
    }
  });

  return (
    <Container>
      <Text>{seconds}</Text>
    </Container>
  );
};
export default Timer;
