import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';
import {ButtonText} from './';

const ButtonContainer = styled.TouchableOpacity`
  height: 40px;
  padding: 12px;
  margin: 16px;
  background-color: ${props => props.theme.colors.lightGreen};
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const PressableButton: React.FC<Props> = ({onPress, title}) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;
