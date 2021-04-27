import React from 'react';
import {IStackScreenProps} from 'src/shared/types';
import styled from 'styled-components/native';
import {
  Root,
  H1,
  PressableButton,
  Typography,
  HighScoreContainer,
} from '../shared/components';
import {routes} from '../navigation';

const ButtonContainer = styled.View``;

const GameOver: React.FC<IStackScreenProps> = ({navigation}) => {
  const navigate = navigation?.navigate;
  return (
    <Root>
      <H1>GAME OVER</H1>
      <ButtonContainer>
        <PressableButton
          onPress={() => navigate(routes.menu.name)}
          title="Go Back To Menu"
        />
        <PressableButton
          onPress={() => navigate(routes.leaderBoards.name)}
          title="Leader Board"
        />
      </ButtonContainer>
    </Root>
  );
};

export default GameOver;
