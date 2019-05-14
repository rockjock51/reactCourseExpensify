import { shallow } from "enzyme";
import React from "react";
import toJSON from "enzyme-to-json";

import NotFoundPage from "../../components/NotFoundPage";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
