import React from 'react';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class AuthLoadingScreen extends React.Component {
  constructor() {
      super()
      this._loadingAsync()
  }

  _loadingAsync = async () => {
    const TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')

    this.props.navigation.navigate(TOKEN ? 'App': 'Auth')
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

export default withNavigation(AuthLoadingScreen)