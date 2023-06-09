import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import {NoInternetToast} from './app/components/NoInternet';

// Navigation
import RootNavigation from './app/routes/RootNavigation';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider>
            <RootNavigation />
            <NoInternetToast />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
