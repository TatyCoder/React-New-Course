import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// To pass the expenseData to NewExpense by adding a new prop*:
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {  
            ...enteredExpenseData,  // To copy the object which I generate into submitHandler.
            id: Math.random().toString()  // Adding the new id key.
        };

        // Here instead of logging my expenseData, I will access props onAddExpense and execute it here:
        // console.log(expenseData);
        props.onAddExpense(expenseData);  // Passing the generated expenseData as an argument**.
    };

    // Adding the new prop (name of my choice, starting with on...) to ExpenseForm*:
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;

/* Notes: *the value for this prop should be a function which can then  
be called inside of the ExpenseForm component. Hence, it's a function I  
should define here in NewExpense before I return the JSX code.
I can create my own event props, and I can expect functions as values and 
that would allow me to pass a function from a parent component to a child 
component and then call that function inside of the child component. And 
when I call the function, I can pass data to that function as a parameter 
and that's how I can communicate up: from child to parent. 
So it's this function defined here in the NewExpense component which I'll 
now execute in a different component, inside of ExpenseForm to be precise. 
And I can execute the function even though it's not defined inside of 
ExpenseForm because I'm passing a pointer through the onSaveExpenseData. 
** By passing data to that function I'm lifting that data, that state up. 
I'm not keeping expenseData here in the NewExpense component, instead I'm 
lifting it up to the App component so I can use it there or I can pass the   
data down to another component via props. The Expenses component is the 
component where I need the data in the end, so it is the App component 
where I wanna lift the state up to. */