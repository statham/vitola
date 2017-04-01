import "react-native";
import React from "react";
import { shallow } from "enzyme";
import Login from "../login";

describe("Login Form", () => {
  let wrapper, mockLogin, email, password;

  beforeEach(() => {
    wrapper = shallow(<Login />);
    mockLogin = jest.genMockFunction();
    email = "test@email.com";
    password = "password";
  });

  it("renders with correct initial state", () => {
    expect(wrapper.state().email).toEqual("");
    expect(wrapper.state().password).toEqual("");
    expect(wrapper.find("Button").props().disabled).toBeTruthy();
  });

  it("undisables submit on correct form", () => {
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ email });
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ password });
    expect(wrapper.find("Button").props().disabled).toEqual(false);
  });

  it("calls login action on form submit", () => {
    wrapper = shallow(<Login login={mockLogin} />);
    wrapper.setState({ email, password });
    expect(mockLogin.mock.calls.length).toEqual(0);
    wrapper.find("Button").simulate("press");
    expect(mockLogin.mock.calls.length).toEqual(1);
    expect(mockLogin.mock.calls[0][0]).toEqual(email);
    expect(mockLogin.mock.calls[0][1]).toEqual(password);
  });
});
