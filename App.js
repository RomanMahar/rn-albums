/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SwitchExample from './SwitchExample.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor() {
     super();
     this.state = {
        switch1Value: false,
        switch2Value: false,
     };
  }
  toggleSwitch1 = (value) => {
     this.setState({ switch1Value: value });
     console.log('Switch 1 is: ' + value);
  }
  toggleSwitch2 = (value) => {
     this.setState({ switch2Value: value });
     console.log('Switch 2 is: ' + value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <SwitchExample
           toggleSwitch1={this.toggleSwitch1}
           toggleSwitch2={this.toggleSwitch2}
           switch1Value={this.state.switch1Value}
           switch2Value={this.state.switch2Value}
        />
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 160,
    paddingBottom: 160,
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
