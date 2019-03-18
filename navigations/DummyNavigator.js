import { 
  createStackNavigator,
 } from "react-navigation";


// Screens
import TodoScreen from "../screens/TodoScreen";
import JanuarScreen from "../screens/JanuarScreen";
import DotaScreen from "../screens/DotaScreen";

export default createStackNavigator({
  Todo: {
    screen: TodoScreen
  },
  Dummy: {
    screen: JanuarScreen,
    navigationOptions: {
      header: null,
    }
  },
  Doto: {
    screen: DotaScreen
  }
}, {
  initialRouteName: 'Dummy',
  defaultNavigationOptions: {
    title: 'Ini Stack'
  }
})