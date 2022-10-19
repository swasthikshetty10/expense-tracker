import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

function ExpenseCard({ amount, name, date, index, deleteExpense }) {
	function handleDelete() {
		deleteExpense(index);
	}
	console.log(date)
	return (
		<div className='expense-card'>
			<div className='card-body'>
				<h3>{name} - <span>₹{amount}</span></h3>
				<h6>{new Date(date).toDateString()}</h6>
			</div>
			<button onClick={handleDelete}><AiOutlineDelete /></button>
		</div>
	)
}

export default ExpenseCard