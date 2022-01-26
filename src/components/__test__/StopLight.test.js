import React from "react";
import ReactDOM from "react-dom";
import StopLight from "../StopLight";

import { cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders StopLight without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StopLight></StopLight>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<StopLight></StopLight>).toJSON();
  expect(tree).toMatchSnapshot();
});
