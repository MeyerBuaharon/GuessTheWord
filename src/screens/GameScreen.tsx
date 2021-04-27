import React from 'react';
import {
  Root,
  H1,
  PressableButton,
  HighScoreContainer,
  Typography,
  Timer,
} from '../shared/components';
import {IStackScreenProps} from 'src/shared/types';

const GameScreen: React.FC<IStackScreenProps> = ({navigation, route}) => {
  const navigate = navigation?.navigate;
  return (
    <Root>
      <Timer />
      <H1>Guess The Word</H1>

      <HighScoreContainer>
        <Typography>Score: 3</Typography>
        <Typography>High Score: 15</Typography>
      </HighScoreContainer>
    </Root>
  );
};

export default GameScreen;
