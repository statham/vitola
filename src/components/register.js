import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  TextInput
} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "column",
    flex: 1
  },
  inputs: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  textInput: {
    height: 40
  }
});

const validate = (email, password, passwordAgain) => (
  {
    email: email.length === 0,
    password: password.length === 0,
    passwordAgain: password !== passwordAgain
  }
);

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordAgain: ""
    };
  }

  handleTextChange(field, value) {
    if (field === "email") {
      this.setState({ email: value });
    } else if (field === "password") {
      this.setState({ password: value });
    } else {
      this.setState({ passwordAgain: value });
    }
  }

  render() {
    const errors = validate(this.state.email, this.state.password, this.state.passwordAgain);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <View style={styles.container}>
        <ScrollView horrizontal={false}>
          <View style={styles.inputs}>
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={this.handleTextChange.bind(this, "email")}
              placeholder="Email"
              value={this.state.email}
            />
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={this.handleTextChange.bind(this, "password")}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry
            />
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={this.handleTextChange.bind(this, "passwordAgain")}
              placeholder="Confirm Password"
              value={this.state.passwordAgain}
              secureTextEntry
            />
            <Button
              disabled={isDisabled}
              onPress={() => this.props.register(this.state.email, this.state.password)}
              title="Sign Up"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
