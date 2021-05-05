import { shallow } from "enzyme";
import React from "react";
import App from "./App";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<App {...mockProps} />);
});

it("renders App without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});
