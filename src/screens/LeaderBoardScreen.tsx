import React from 'react';
import {View, Text} from 'react-native';
import {IStackScreenProps} from 'src/shared/types';

const LeaderBoards: React.FC<IStackScreenProps> = ({navigation, route}) => {
  const navigate = navigation?.navigate;
  return (
    <View>
      <Text>Leader Board</Text>
    </View>
  );
};

export default LeaderBoards;
