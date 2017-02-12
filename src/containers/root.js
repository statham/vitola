import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={Actions.Login}
        >
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={Actions.Register}
        >
          <Text>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
});
