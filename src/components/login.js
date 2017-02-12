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

const validate = (email, password) => (
  {
    email: email.length === 0,
    password: password.length === 0
  }
);

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleTextChange(field, value) {
    if (field === "email") {
      this.setState({ email: value });
    } else {
      this.setState({ password: value });
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
            <Button
              disabled={isDisabled}
              onPress={() => this.props.login(this.state.email, this.state.password)}
              title="Login"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
