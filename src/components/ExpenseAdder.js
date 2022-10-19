import React from 'react'

function ExpenseAdder() {

    return (
        <div>
            <form className='expense-adder'>
                <div>
                    <label>Name </label>
                    <input type="text" placeholder="Where you have Spent?" />
                </div>
                <div>
                    <label>Cost </label>
                    <input className='amount' type="number" />
                    <span> INR</span>
                </div>
                <div>
                    <label>Date </label>
                    <input type="date" />
                </div>
                <button type="submit">+ Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseAdder