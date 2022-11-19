import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isModifying, setIsModifying] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const endModifyHandler = () => {
    setIsModifying(false);
  };

  const beginModifyHandler = () => {
    setIsModifying(true);
  };

  return (
    <div className='new-expense'>
      {!isModifying && (
        <button onClick={beginModifyHandler}>Add New Expense</button>
      )}
      {isModifying && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={endModifyHandler} />
      )}
    </div>
  );
};

export default NewExpense;
