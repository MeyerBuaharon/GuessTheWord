import React, {useEffect, useState} from 'react';
import RandomWord from 'random-words';
import {
  Root,
  H1,
  PressableButton,
  HighScoreContainer,
  Typography,
  Timer,
  TextInput,
  Life,
} from '../shared/components';
import {IStackScreenProps} from 'src/shared/types';
import theme from '../shared/theme';
import {routes} from '../navigation';

const GameScreen: React.FC<IStackScreenProps> = ({navigation, route}) => {
  const [word, setWord] = useState<string>(RandomWord());
  const [guessWord, setGuessWord] = useState<string>('');
  const [maskedWord, setMaskedWord] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(1);
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [lives, setLives] = useState<number>(3);

  const guessWordHandler = () => {
    setResetTimer(true);
    if (guessWord === word) {
      setScore(score + 1);
      if (score % 5 === 0) setDifficulty(difficulty + 1);
      setWord(RandomWord());
    } else {
      if (lives - 1 === 0) {
        navigation.navigate(routes.gameOver.name);
      }
      setLives(lives - 1);
    }
  };

  useEffect(() => {
    setMaskedWord(maskWord);
  }, [word]);
  const maskWord = () => {
    const splittedWord = word.split('');
    for (
      let index = 0;
      index < splittedWord.length / 2 && index < difficulty;
      index++
    ) {
      let randomIndex = Math.floor(Math.random() * word.length);
      if (
        splittedWord[randomIndex] !== '_' &&
        splittedWord[randomIndex] !== ' '
      ) {
        splittedWord[randomIndex] = '_';
      }
    }
    return splittedWord.join('');
  };

  const navigate = navigation?.navigate;
  return (
    <Root>
      <Timer
        navigate={navigate}
        resetTimer={resetTimer}
        setResetTimer={setResetTimer}
      />
      <Life CurrentLives={lives} />
      <H1>{maskedWord}</H1>
      <TextInput
        value={guessWord}
        onChangeText={text => setGuessWord(text)}
        placeholder="Guess A Word"
        placeholderTextColor={theme.colors.text}
      />
      <PressableButton title="Guess" onPress={() => guessWordHandler()} />
      <HighScoreContainer>
        <Typography>Score: {score}</Typography>
        <Typography>High Score: 15</Typography>
      </HighScoreContainer>
    </Root>
  );
};

export default GameScreen;
