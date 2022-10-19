import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

function ExpenseCard({amount, name, date}) {
	return (
		<div className='expense-card'>
			<div className='card-body'>
				<h3>{name} <span>₹{amount}</span></h3>
				<h6>{date.toLocaleDateString('en-uk')}</h6>
			</div>
			<button><AiOutlineDelete /></button>
		</div>
	)
}

export default ExpenseCard