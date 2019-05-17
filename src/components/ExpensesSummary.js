import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => (
  <div>
    <p>
      Showing {props.expenses.length} expenses totaling{" "}
      {numeral(props.expenseTotal(props.expenses) / 100).format("$0,0.00")}
    </p>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expenseTotal: selectExpensesTotal
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
