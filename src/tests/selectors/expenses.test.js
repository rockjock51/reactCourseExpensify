import moment from "moment";

import selectExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const results = selectExpenses(expenses, filters);
  expect(results).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate value", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const results = selectExpenses(expenses, filters);
  expect(results).toEqual([expenses[2], expenses[0]]);
});
// should filter by endDate
test("should filter by endDate value", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).subtract(1, "days")
  };
  const results = selectExpenses(expenses, filters);
  expect(results).toEqual([expenses[1]]);
});
// should sort by date
test("should filter by text value", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const results = selectExpenses(expenses, filters);
  expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
});
// should sort by amount
test("should filter by text value", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const results = selectExpenses(expenses, filters);
  expect(results).toEqual([expenses[1], expenses[2], expenses[0]]);
});
