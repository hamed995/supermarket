import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { I18nManager, StatusBar } from 'react-native';
import colors from './src/constants/colors';
import { useNetInfo } from '@react-native-community/netinfo';
import InternetConection from './src/common/InternetConection';
import { RootSiblingParent } from 'react-native-root-siblings';

function App() {
  const netInfo = useNetInfo();
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);


  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <RootSiblingParent >
        <Provider store={store}>
          <NavigationContainer>
            <MainNavigation />
            <InternetConection netInfo={netInfo} />
          </NavigationContainer>
        </Provider>
      </RootSiblingParent>
    </>
  );
}

export default App;