import { AppRegistry } from "react-native";
import { HomeScreen } from "./src/HomeScreen";

import { StackNavigator } from "react-navigation";

const App = StackNavigator({
  Home: { screen: HomeScreen }
  // Detials: { screen: Details }
});

AppRegistry.registerComponent("safety", () => App);
