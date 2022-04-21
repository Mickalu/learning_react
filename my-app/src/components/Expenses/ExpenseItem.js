import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';


const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}$</div>
                </div>
                <button > change title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem