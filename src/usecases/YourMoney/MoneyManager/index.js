import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import MoneyDetails from "../MoneyDetails";
import "./index.css";
import TransactionItems from "../TransactionItem";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    history: [],
    title: "",
    amount: 0,
    type: "Income",
    balance: 7030,
    income: 0,
    expense: 0,
  };

  titleHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
  };

  dropdownHandler = (e) => {
    this.setState({ type: e.target.value });
  };

  addExpenseHandler = (e) => {
    e.preventDefault();
    const { title, amount, type } = this.state;
    this.setState((prev) => {
      // Convert amount to a number
      const amountNum = parseFloat(amount) || 0;

      // Determine new balance based on the type
      const newBalance =
        type === "Income"
          ? parseFloat(prev.balance) + amountNum
          : parseFloat(prev.balance) - amountNum;

      // Update income and expenses based on the type
      const newIncome =
        type === "Income"
          ? parseFloat(prev.income) + amountNum
          : parseFloat(prev.income);

      const newExpenses =
        type === "Expenses"
          ? parseFloat(prev.expense) + amountNum
          : parseFloat(prev.expense);

      return {
        history: [
          ...prev.history,
          {
            title,
            amount: amountNum,
            type,
            id: uuidv4(),
          },
        ],
        balance: newBalance.toFixed(2),
        income:
          type === "Expenses"
            ? newIncome.toFixed(2) - newExpenses.toFixed(2)
            : newIncome.toFixed(2),
        expense: newExpenses.toFixed(2),
        title: "",
        amount: "",
        type: "Income",
      };
    });
  };

  deleteHandler = (id) => {
    this.setState((prev) => {
      // Find the item to delete
      const itemToDelete = prev.history.find((item) => item.id === id);

      if (!itemToDelete) {
        // If item is not found, no need to update the state
        return prev;
      }

      // Determine the updated values based on the item's type
      const { amount, type } = itemToDelete;
      const amountNum = parseFloat(amount) || 0;

      const newBalance =
        type === "Income"
          ? parseFloat(prev.balance) - amountNum
          : parseFloat(prev.balance) + amountNum;

      const newIncome =
        type === "Income"
          ? parseFloat(prev.income) - amountNum
          : parseFloat(prev.income);

      const newExpenses =
        type === "Expense"
          ? parseFloat(prev.expenses) - amountNum
          : parseFloat(prev.expenses);

      return {
        history: prev.history.filter((item) => item.id !== id),
        // balance: newBalance.toFixed(2),
        // income: newIncome.toFixed(2),
        // expenses: newExpenses.toFixed(2),
      };
    });
  };

  render() {
    const { history, title, amount, type, balance, income, expense } =
      this.state;
    return (
      <div className="money_manager_container">
        <div className="mny_mngr__name">
          <h1>Hi, Dev</h1>
          <p>
            Welcome back to your<span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails bal={balance} inc={income} exp={expense} />

        <div className="mny_mngr__form_container">
          <form className="mny_mngr__form">
            <h1>Add Transaction</h1>

            <div className="form__div">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                value={title}
                placeholder="title"
                onChange={this.titleHandler}
              />
            </div>

            <div className="form__div">
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                value={amount}
                placeholder="amount"
                onChange={this.amountHandler}
              />
            </div>

            <div className="form__div">
              <label htmlFor="select">Type</label>
              <select onChange={this.dropdownHandler} id="select">
                {transactionTypeOptions.map((tpe) => (
                  <option value={tpe.displayText}>{tpe.displayText}</option>
                ))}
              </select>
            </div>

            <button className="add_expense" onClick={this.addExpenseHandler}>
              Add
            </button>
          </form>

          <div className="mny_mngr_history">
            <TransactionItems
              expenses={history}
              onDelete={this.deleteHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
