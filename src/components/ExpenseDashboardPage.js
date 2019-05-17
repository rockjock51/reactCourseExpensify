import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseListSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
