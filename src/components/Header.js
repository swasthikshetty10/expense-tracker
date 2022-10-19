import React from 'react'

function Header({ amount }) {
    return (
        <div className='header'>
            <h1>Expense Tracker</h1>
            <div>
                <h4>total expense : <span>{amount}</span>₹</h4>
            </div>
        </div>
    )
}

export default Header