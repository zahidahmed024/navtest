import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Page1 from './src/screen/Page1';
import Page2 from './src/screen/Page2';
import Store from './src/redux/Store'
import {Provider} from 'react-redux'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store}>

      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="page1"
            component={Page1}
            options={{title: 'login screen'}}
          />
          <Drawer.Screen
            name="page2"
            component={Page2}
            options={{title: 'news screen'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}
