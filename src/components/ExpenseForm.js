import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    // I can have multiple states inside of the same component, managing and updating them separately:
    const [enteredTitle, setEnteredTitle] = useState('');  // Storing empty strings*
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);  
        // This value property holds the current value of this input at the point of time this event occurs.
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };

    return <form>
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
};

export default ExpenseForm;

/* Notes: *I'm storing empty strings all the time because by default, whenever I listen to the 
change event for an input, if I read the value of that input element, it'll always be a string. 
Even if it stores a number it will be a number as a string and the same for the date. */