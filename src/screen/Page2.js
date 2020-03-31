import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feeds from './Feeds';
import Details from './Details';
const Stack = createStackNavigator();

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // let data = this.props.route.params;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="newsfeeds"
          component={Feeds}
          options={{tabBarIcon: ({ color, size }) => (
            <Icon name="rocket" color={color} size={size} />
          ),
        }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          // options={{title: 'detail screen'}}
        />
      </Stack.Navigator>
    );
  }
}
