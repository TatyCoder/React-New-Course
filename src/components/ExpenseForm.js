import './ExpenseForm.css';
import { useState } from 'react';

// Switching back to the multiple states approach:
const ExpenseForm = () => {
    // I can have multiple states inside of the same component, managing and updating them separately:
    const [enteredTitle, setEnteredTitle] = useState('');  
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Using one state instead, passing in an object as a value, grouping the 3 states and updating all 3 properties:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);  

        // Now calling the setUserInput passing in a new object.
        // I need to use the spread operator to copy the other two key value pairs which I'm not updating here:
        // setUserInput({
        //     ...userInput, 
        //     enteredTitle: event.target.value,
        // });

        // Passing a function to setUserInput*:
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    // A function whenever the form is being submitted:
    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the default behavior*

        // To create an object that combines all the entered data:
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) // Dates are tricky**
        };

        console.log(expenseData);
    };

    // Now I wanna make sure that this form can be submitted when the button is pressed:
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;

/* Notes: *the default browser behavior is that if I click the button, 
the page reloads because the browser automatically sends a request. 
**constructing a new date with the built in date constructor to 
which then I passed the enteredDate, which will parse that date 
string and converted into a date object. */