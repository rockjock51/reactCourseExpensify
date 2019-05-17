import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

let expenseTotal;

beforeEach((expenseTotal = jest.fn()));

test("should render correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenses={expenses} expenseTotal={expenseTotal} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenses={expenses[1]} expenseTotal={expenseTotal} />
  );
  expect(wrapper).toMatchSnapshot();
});
