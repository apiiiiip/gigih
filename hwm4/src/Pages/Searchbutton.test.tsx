import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import Search from "./searchbutton";

test("renders search song", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Search handleSearch={() => null} />
    </Provider>
  );
  expect(getByTestId("search-button")).toBeTruthy();
});
