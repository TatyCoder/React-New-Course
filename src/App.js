// import ExpenseItem from './components/ExpenseItem';  // Not using this anymore.
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

// The goal will be to add the new expense which the user entered to this list of existing expenses.
// So, I need to pass the data which I'm collecting and generating in ExpenseForm to the app component:
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.99,
      date: new Date(2021, 5, 12),
    },
  ];

  // Adding a new function:
  const addExpenseHandler = expense => {
    console.log('In App.js');  // To confirm that the data arrived, I will not update the expenses array yet.
    console.log(expense);
  };

  // Adding a new prop (name of my choice, starting with on...) to NewExpense:
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;