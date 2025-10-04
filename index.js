/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RNRestart from 'react-native-restart';

if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);

  // Restart the app
  RNRestart.Restart();
}
AppRegistry.registerComponent(appName, () => App);
