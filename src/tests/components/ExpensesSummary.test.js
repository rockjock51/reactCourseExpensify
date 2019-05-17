import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("should render correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenses={expenses} expenseTotal={selectExpensesTotal} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenses={[expenses[1]]}
      expenseTotal={selectExpensesTotal}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
