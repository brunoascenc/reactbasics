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

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email:'john@gmail.com'
    }],
    searchField: "a",
    isPending: false,
  };
  const wrapper2 = shallow(<App {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([]);

});
