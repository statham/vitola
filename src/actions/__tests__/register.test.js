import "react-native";
import React from "react";
import register from "../register";

jest.mock("../../resources");

describe("register", () => {
  let dispatcher, email, password;

  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve());
  });

  beforeEach(() => {
    dispatcher = jest.genMockFunction();
    email = "test@email.com";
    password = "password";
  });

  it("sends fetch request", () => {
    expect(window.fetch).not.toBeCalled();
    register(email, password)(dispatcher);
    expect(window.fetch).toHaveBeenCalledWith("registerUrl", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });
  });
});
