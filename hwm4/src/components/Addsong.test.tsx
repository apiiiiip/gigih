import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Playlistlist from "./Addsong";
import React from "react";

test("renders Addsong", () => {
  const { getByTestId } = render(
    <Playlistlist playlistName="test" id="test" addItem={() => null} />
  );

  expect(getByTestId("add-button")).toBeInTheDocument();
});
