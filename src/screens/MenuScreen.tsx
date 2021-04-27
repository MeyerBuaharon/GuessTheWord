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

const MenuScreen: React.FC<IStackScreenProps> = ({navigation}) => {
  const navigate = navigation?.navigate;
  return (
    <Root>
      <H1>Guess The Word</H1>
      <ButtonContainer>
        <PressableButton
          onPress={() => navigate(routes.game.name)}
          title="Start Game"
        />
        <PressableButton
          onPress={() => navigate(routes.leaderBoards.name)}
          title="Leader Board"
        />
      </ButtonContainer>
      <HighScoreContainer>
        <Typography>High Score: 15</Typography>
      </HighScoreContainer>
    </Root>
  );
};

export default MenuScreen;
