import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import RouteStack from './src/navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RouteStack />
      </Provider>
    );
  }
}
