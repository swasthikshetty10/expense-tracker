import { useEffect, useState } from 'react';
import './App.css';
import ExpenseAdder from './components/ExpenseAdder';
import ExpenseCard from './components/ExpenseCard';

function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem('data'));
    if (expenses) {
      setData(expenses);
    }
  }, [])
  function addExpense(expense) {
    let updatedData = [...data, expense]
    setData(updatedData);
    setTotal(total + expense.amount);
    localStorage.data = JSON.stringify([...data, expense])
  }
  function deleteExpense(index) {
    const updatedData = data.filter((_, i) => i !== index)
    const expense = data[index];
    setData(updatedData);
    setTotal(total - expense.amount);
    localStorage.data = JSON.stringify(updatedData);
  }
  return (
    <div className="App">
      <div className='wrapper'>
        <ExpenseAdder addExpense={addExpense} />
        {
          data.map(
            (expense, index) => <ExpenseCard key={index} name={expense.name} index={index} amount={expense.amount} deleteExpense={deleteExpense} date={expense.date} />
          )
        }
      </div>
    </div>
  );
}

export default App;
