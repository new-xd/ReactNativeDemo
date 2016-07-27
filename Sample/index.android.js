/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Login from './pages/Login'
import Splash from './pages/Splash'

class Sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
      // <Navigator
      //   initialRoute={{index : 0}}
      //   renderScene={(route, navigator) => {
      //     switch(route.index){
      //       case 0:
      //       return <Login onGo={() => {
      //         navigator.push({index: 1});
      //       }}/>;
      //       case 1:
      //       return <Splash onBack={() => {
      //         navigator.pop();
      //       }}/>;
      //     }
      //   }}
      // />
      // <Login/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('Sample', () => Sample);
