import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    // To filter de expenses by year using filter():
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // To render the list of the filteredExpenses:
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onSelected={filteredYear} 
                    onYearFilter={selectYearHandler}
                />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
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
to an array full of JSX items. Always add key when mapping out lists of items.
filter() returns a new array without touching the original array, and in that 
new array I either keep or remove items. */