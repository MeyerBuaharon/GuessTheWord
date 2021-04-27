import React from 'react';
import {StatusBar, Platform} from 'react-native';
import theme from './src/shared/theme';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import {StackNavigation} from './src/navigation';
import {ThemeProvider} from 'styled-components';
// import {store, persistor} from './src/store/configureStore';

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('white');
  }
  StatusBar.setBarStyle('dark-content');
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>

    <ThemeProvider theme={theme}>
      <StackNavigation />
    </ThemeProvider>
    // </Provider>
  );
};
{
  /* </PersistGate> */
}

export default App;
