import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <View>
          <Text style={{fontSize:30}}>  page 3:{'\n'}{'\n'} access token: {JSON.stringify( this.props.isloggedIn)} </Text>
          <Icon
            name="rocket"
            size={30}
            color="#000"
          />
        </View>
      );
  
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isloggedIn: state.login.isloggedIn,
  };
};

export default connect(mapStateToProps)(Page4);
