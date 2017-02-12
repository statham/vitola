import React from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { Router, Scene } from "react-native-router-flux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  Root as App,
  Register,
  Login
} from "./containers";
import reducer from "./reducers";

const styles = StyleSheet.create({
  tabBar: {
    height: 70
  }
});

export default function native(platform) {
  const Vitola = React.createClass({
    render() {
      const store = createStore(
        reducer,
        applyMiddleware(thunk)
      );
      return (
        <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: "white" }}>
            <Scene
              key="App"
              component={App}
              type="replace"
              initial
            />
            <Scene
              key="Login"
              component={Login}
              type="replace"
            />
            <Scene
              key="Register"
              component={Register}
              type="replace"
            />
          </Router>
        </Provider>
      );
    }
  });
  AppRegistry.registerComponent("vitola", () => Vitola);
}
