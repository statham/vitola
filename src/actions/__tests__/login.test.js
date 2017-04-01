import "react-native";
import React from "react";
import login from "../login";

jest.mock("../../resources");

describe("login", () => {
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
    login(email, password)(dispatcher);
    expect(window.fetch).toHaveBeenCalledWith("loginUrl", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });
  });
});
