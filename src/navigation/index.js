import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const RouteStack = createBottomTabNavigator({
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
},
  {
    tabBarOptions : {
      activeTintColor: "red"
    }
  }
);

export default RouteStack
