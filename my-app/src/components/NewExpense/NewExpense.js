import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHangdler = () => {
        setIsEditing(true);
    };

    const stopEditingHangdler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'> 
            {!isEditing && <button onClick={startEditingHangdler}>Add New Expense </button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHangdler} />}
        </div>
    );
};

export default NewExpense;