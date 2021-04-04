import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/authentication/Login";

jest.mock("firebase/app", () => {
  return {
    initializeApp: jest.fn(),
    auth: jest.fn(),
    firestore: jest.fn(() => {
      return {
        collection: jest.fn().mockReturnThis(),
        doc: jest.fn().mockReturnThis(),
        update: jest.fn((value) => value),
        add: jest.fn((value) => value),
      };
    }),
  };
});

describe("Login render Page", () => {
  it("renders the Login page", () => {
    const { getByText } = render(<Login />);
    expect(getByText(/Sign in to your account/i)).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Sign in")).toBeInTheDocument();
  });
});
