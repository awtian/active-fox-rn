import { 
  createStackNavigator,
 } from "react-navigation";


// Screens
import TodoScreen from "../screens/TodoScreen";
import JanuarScreen from "../screens/JanuarScreen";

export default createStackNavigator({
  Todo: {
    screen: TodoScreen
  },
  Dummy: {
    screen: JanuarScreen
  }
}, {
  initialRouteName: 'Dummy',
  defaultNavigationOptions: {
    title: 'Ini Stack'
  }
})