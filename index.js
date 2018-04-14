import { AppRegistry } from 'react-native';
import { HomeScreen } from './src/HomeScreen';
import { Details } from './src/Details';

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: Details },
});

AppRegistry.registerComponent('safety', () => App);
