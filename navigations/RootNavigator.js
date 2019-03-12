import { 
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
 } from "react-navigation";

// Other Navigators
import StackNav from './DummyNavigator'

// Screens
import AboutScreen from "../screens/AboutScreen";

const RootNav = createDrawerNavigator({
  About: {
    screen: AboutScreen
  },
  Todo: StackNav,
}, {
  initialRouteName: 'About',
  defaultNavigationOptions: {
    title: 'Active Fox'
  }
})

export default createAppContainer(RootNav)