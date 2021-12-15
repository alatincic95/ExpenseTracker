import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Title
  const [enteredTitle, setEnteredTitle] = useState("");
  // Amount
  const [eneteredAmount, setEnteredAmount] = useState("");
  // Date
  const [enteredDate, setEnteredDate] = useState("");

  //////////////////////////////////////////////////
  // ALTERNATIVE WAY - SINGLE useState
  // ***We can also do the same job by using single useState
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  // !!!!!This also isn't ideal because React schedules updates so if we have a lot of them at the same time, there is big possibility that we wont have the latest snapshot of the previous state. Whenever our state depends on a previous state we should use functio form. In that way, we will always have latest snapshot of our previous state.
  //  !!!! setUserInput((previousState) => {
  //       return {...previousState, enteredTitle: event.target.value}
  //   })

  // Title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //////////////////////////////////////////////////
    // ALTERNATIVE WAY - SINGLE useState
    // setUserInput({
    // **We need to copy current state of the object (... operator) because if we would just change the enteredTitle like below, we would owerwrite other two key-value pairs
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  // Amount
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //////////////////////////////////////////////////
    // ALTERNATIVE WAY - SINGLE useState
    // setUserInput({
    // ***We need to copy current state of the object (... operator) because if we would just change the enteredTitle like below, we would owerwrite other two key-value pairs
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  // Date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //////////////////////////////////////////////////
    // ALTERNATIVE WAY - SINGLE useState
    // setUserInput({
    // ***We need to copy current state of the object (... operator) because if we would just change the enteredTitle like below, we would owerwrite other two key-value pairs
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +eneteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              value={eneteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
