import expensesReducer from "../../reducers/expenses";

import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      description: "Coke",
      amount: 195,
      note: "",
      createdAt: 10000,
      id: 4
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    {
      description: "Coke",
      amount: 195,
      note: "",
      createdAt: 10000,
      id: 4
    }
  ]);
});

test("should edit an expense", () => {
  const note = "Testing!";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    { ...expenses[2], note: "Testing!" }
  ]);
});

test("should not edit an expense if expense not found", () => {
  const action = { type: "EDIT_EXPENSE", id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
