import ExpensesList from './ExpensesList';
import Card from '../ui/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart'
import { useState } from 'react'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(item => item.date?.getFullYear().toString() === filteredYear)

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;