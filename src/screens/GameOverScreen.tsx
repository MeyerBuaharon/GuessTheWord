import React from 'react';
import {View, Text, Button} from 'react-native';
import {IStackScreenProps} from 'src/shared/types';

const GameOverScreen: React.FC<IStackScreenProps> = ({navigation, route}) => {
  const navigate = navigation?.navigate;
  return (
    <View>
      <Button onPress={() => console.log('gameOver')} title="GameOver" />
      <Text>test</Text>
    </View>
  );
};

export default GameOverScreen;
