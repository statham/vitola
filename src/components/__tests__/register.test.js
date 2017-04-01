import "react-native";
import React from "react";
import { shallow } from "enzyme";
import Register from "../register";

describe("Register form", () => {
  let wrapper, mockRegister, email, password;

  beforeEach(() => {
    wrapper = shallow(<Register />);
    mockRegister = jest.genMockFunction();
    email = "test@email.com";
    password = "password";
  });

  it("renders with correct initial state", () => {
    expect(wrapper.state().email).toEqual("");
    expect(wrapper.state().password).toEqual("");
    expect(wrapper.state().passwordAgain).toEqual("");
    expect(wrapper.find("Button").props().disabled).toBeTruthy();
  });

  it("undisables submit on correct form", () => {
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ email });
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ password });
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ passwordAgain: "blah" });
    expect(wrapper.find("Button").props().disabled).toEqual(true);
    wrapper.setState({ passwordAgain: password });
    expect(wrapper.find("Button").props().disabled).toEqual(false);
  });

  it("calls register action on form submit", () => {
    wrapper = shallow(<Register register={mockRegister} />);
    wrapper.setState({ email, password, passwordAgain: password });
    expect(mockRegister.mock.calls.length).toEqual(0);
    wrapper.find("Button").simulate("press");
    expect(mockRegister.mock.calls.length).toEqual(1);
    expect(mockRegister.mock.calls[0][0]).toEqual(email);
    expect(mockRegister.mock.calls[0][1]).toEqual(password);
  });
});
