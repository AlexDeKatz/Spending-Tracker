import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    function titleChangeHandler(event) {
        setUserInput((prevstate) => {
            return { ...prevstate, enteredTitle: event.target.value }
        })
    }

    function amountChangeHandler(event) {
        setUserInput((prevstate) => {
            return { ...prevstate, enteredAmount: event.target.value }
        })
    }

    function dateChangeHandler(event) {
        setUserInput((prevstate) => {
            return { ...prevstate, enteredDate: event.target.value }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        setUserInput({ enteredDate: '', enteredAmount: '', enteredTitle: '' })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={userInput.enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Save Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;