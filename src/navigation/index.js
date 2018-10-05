import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        header: null
      }
    }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
});


const RouteStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
},{
  initialRouteName: "AuthLoading"
})

export default RouteStack
