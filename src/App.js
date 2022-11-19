import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPS = [
  {
    id: '1',
    title: 'Toilettenpapier',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '2',
    title: 'Neuer Fernseher',
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: '3',
    title: 'KfZ-Versicherung',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'Neuer Schreibtisch (aus Holz)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPS);

  const addExpenseHandler = expense => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
