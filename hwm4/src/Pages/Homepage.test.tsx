import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Homepage";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import userEvent from "@testing-library/user-event";

test("render login button", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(getByTestId("login-button")).toBeInTheDocument();
});

test("login button clicked", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const loginbutton = getByTestId("login-button");
  userEvent.click(loginbutton);
  expect(loginbutton).toBeInTheDocument();
});
