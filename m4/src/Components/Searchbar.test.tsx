import { render } from "@testing-library/react";
import Searchbar from "./Searchbar";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";

test("renders Searchbar without crashing", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Searchbar handleSearch={() => null} />
    </Provider>
  );
  expect(getByTestId("search-bar")).toBeTruthy();
});
