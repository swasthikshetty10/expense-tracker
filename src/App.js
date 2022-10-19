import './App.css';
import ExpenseAdder from './components/ExpenseAdder';
import ExpenseCard from './components/ExpenseCard';

function App() {
  return (

    <div className="App">
      <div className='wrapper'>
        <ExpenseAdder />
        <ExpenseCard name={"Food"} amount={200} date={new Date(Date.now())} />
      </div>
    </div>
  );
}

export default App;
