import React, { useState } from 'react'

function ExpenseAdder(props) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, amount, date);
        const expense = {
            name,
            amount,
            date
        }
        props.addExpense(expense);
        setName('');
        setAmount(0);
        setDate(new Date());

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='expense-adder'>
                <div>
                    <label>Name </label>
                    <input onChange={(e) => { console.log(e.target.value); setName(e.target.value) }} value={name} type="text" placeholder="Where did you spend?" />
                </div>
                <div>
                    <label>Cost </label>
                    <input onChange={(e) => { setAmount(e.target.value) }} value={amount} className='amount' type="number" />
                    <span> ₹</span>
                </div>
                <div>
                    <label>Date </label>
                    <input onChange={(e) => { setDate(e.target.value) }} value={date} type="date" />
                </div>
                <button type="submit">+ Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseAdder