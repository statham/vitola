import React from "react";
import { connect } from "react-redux";
import { Register } from "../components";
import { register } from "../actions";

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  register
})(Register);
