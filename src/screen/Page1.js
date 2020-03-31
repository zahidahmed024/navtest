import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }
login =() => {
  this.props.navigation.navigate('page3')
}
  render() {
   let route=this.props;
  //  let loginState=this.state.loggedIn;
  //  console.log(route);
  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize:40}}> halllo </Text>
        {/* <Button
          title="login"
          onPress={() =>
            this.login()
          }
        /> */}
      </View>
  );


  }
}
