import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Page1 from './Page1';
import Page3 from './Page3';
import Page4 from './Page4';

const BottomTab = createBottomTabNavigator();

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    //   let data = this.props.route.params;
    //   console.log(data)
    return (
        <BottomTab.Navigator headerMode='none'>
          <BottomTab.Screen
            name="page1"
            component={Page1}
            options={{title: 'login screen',style :{fontSize: 30,}}}
          />
          <BottomTab.Screen
            name="page3"
            component={Page3}
            options={{title: 'page 3'}}
          />
          <BottomTab.Screen
            name="page4"
            component={Page4}
            options={{title: 'page 4'}}
          />
          </BottomTab.Navigator>
    
    );
  }
}
