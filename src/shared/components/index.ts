import styled from 'styled-components/native';

export const Root = styled.View`
  background-color: ${props => props.theme.colors.backgorund};
  height: 100%;
  font-family: 'PressStart2P-Regular';
  align-items: center;
  padding: 16px;
`;

export const Typography = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.main};
`;

export const H1 = styled(Typography)`
  margin-top: 150px;
  color: ${props => props.theme.colors.headerColor};
  font-size: 33px;
  text-align: center;
`;

export const ButtonText = styled(Typography)`
  font-size: 16px;
  text-transform: uppercase;
`;
export const HighScoreContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
`;

export {default as PressableButton} from './PressableButton';
export {default as Timer} from './Timer';
export {default as Life} from './Life';
