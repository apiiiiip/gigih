import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import Search from "./Search";

test("renders search song", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Search handleSearch={() => null} />
    </Provider>
  );
  expect(getByTestId("search-button")).toBeTruthy();
});

test("input value should change", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Search handleSearch={() => null} />
    </Provider>
  );
  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "test" } });
  expect((input as HTMLInputElement).value).toBe("test");
});
