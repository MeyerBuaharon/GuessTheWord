import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  position: absolute;
  top: 15;
  left: 15;
`;
const Image = styled.Image`
  height: 35;
  width: 35;
`;

const Life: React.FC<any> = ({CurrentLives}) => {
  const lives = [];
  for (let index = 0; index < CurrentLives; index++) {
    lives.push(<Image source={require('../assets/heart.gif')} />);
  }
  return <Container>{lives.map((life, index) => life)}</Container>;
};
export default Life;
