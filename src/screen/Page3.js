import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { connect } from 'react-redux';
// import Store from '../redux/Store';
import { login,logout } from '../redux/actions/login';
import Page4 from './Page4'

class Page3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){ 
 console.log('component did moutn ',this.props.isloggedIn);
  }
  login =() => {
    if(this.props.login()){
      this.props.navigation.navigate('page4')
    }
  }
  logout =() => {
    if(this.props.logout()){
      this.props.navigation.navigate('page4')
    }
  }
  render() {
    
      return (
        <View>
              <Text style={{fontSize:30}}>  page 3:{'\n'}{'\n'} access token: {JSON.stringify( this.props.isloggedIn)} </Text>
          {this.props.isloggedIn == null ?
          
          <Button
         title="login"
         onPress={() =>
           this.login()
         }
       /> : <Button
       title="logout"
       onPress={() =>
         this.logout()
       }
     />
        }  

        </View>
      );
  }
}
const mapStateToProps=(state)=>{
  console.log(state)
  return {
    isloggedIn: state.login.isloggedIn,
      
  }
}
const mapDispatchToProps=(dispatch)=>{
//   console.log(state)
  return {
    login:() => dispatch(login()),
    logout:() => dispatch(logout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page3)