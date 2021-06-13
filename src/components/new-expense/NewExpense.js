import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    function saveExpenseData(enteredExpenseData) {
        props.onAddExpense({ ...enteredExpenseData, id: Math.random().toString() })
        setIsEditing(false)
    }

    function startEditingHandler() {
        setIsEditing(true)
    }

    function stopEditingHandler() {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {(!isEditing) ? (<button onClick={startEditingHandler}>Add new Expense</button>) :
                (<ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>)
            }
        </div>
    )
}

export default NewExpense;