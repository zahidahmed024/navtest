import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let data = this.props.route.params;
      console.log(data.name)
    return (
      <View>
        <Text> Details </Text>
      </View>
    );
  }
}
