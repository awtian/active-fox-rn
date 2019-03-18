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
import GraphQLScreen from "../screens/GraphQLScreen";

const RootNav = createBottomTabNavigator({
  About: {
    screen: AboutScreen
  },
  GraphQL: {
    screen: GraphQLScreen
  },
  Todo: StackNav,
}, {
  initialRouteName: 'GraphQL',
  defaultNavigationOptions: {
    title: 'Active Fox'
  }
})

export default createAppContainer(RootNav)