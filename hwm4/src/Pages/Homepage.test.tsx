import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Homepage";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

test("render login button", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(getByTestId("login-button")).toBeInTheDocument();
});
