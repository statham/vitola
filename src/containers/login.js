import React from "react";
import { connect } from "react-redux";
import { Login } from "../components";
import { login } from "../actions";

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  login
})(Login);
