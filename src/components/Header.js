import React from 'react'

function Header({ amount }) {
    return (
        <div className='header'>
            <h1>Expense Tracker</h1>
            <div className='header-total' >
                <span>Total Spent</span>
                <span>₹ {amount}</span>
            </div>
        </div>
    )
}

export default Header