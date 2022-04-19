import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Playlistlist from "./Addsong";

test("renders Addsong button", () => {
  const { getByTestId } = render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <Playlistlist playlistName="test" id="test" addItem={() => null} />
  );

  expect(getByTestId("add-button")).toBeInTheDocument();
});
