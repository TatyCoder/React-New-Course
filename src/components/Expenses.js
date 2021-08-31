import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectYearHandler = (selectedYear) => {
        console.log('In Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    // To render the list dynamically using map() and getting rid of the hard coded ExpenseItems here:
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onSelected={filteredYear} 
                    onYearFilter={selectYearHandler}
                />
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                ></ExpenseItem> */}
            </Card>
        </div>
    );
}

export default Expenses;

/* Notes: map() creates a new array based on another array, so it basically 
transforms every element in that original array. So map() takes a function 
as a argument, and that function executes for every element in the array, 
and the result of this function is the element which will be added to the 
newly created array. With this map expression here it transforms the array  
to an array full of JSX items. Always add key when mapping out lists of items.*/