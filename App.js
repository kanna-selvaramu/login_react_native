import React , { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Login from './screens/login';
import AppContainer from './screens/appContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false
    }
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    console.log("Successfully logged in");
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
      if(this.state.isLoggedIn) 
      {
        return (
          <AppContainer />
        )
      }
      else 
      {
        return (
          <Login onLogin = {this.onLogin}/>
        )
      }
      
  }
}

export default App;