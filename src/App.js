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
    setData([...data, expense]);
    setTotal(total + expense.amount);
    localStorage.data = JSON.stringify([...data])
  }
  function deleteExpense(index) {
    const expense = data[index];
    setData(data.filter((_, i) => i !== index));
    setTotal(total - expense.amount);
    localStorage.data = JSON.stringify([...data]);
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
