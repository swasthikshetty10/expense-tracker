import './App.css';
import ExpenseAdder from './components/ExpenseAdder';
import ExpenseCard from './components/ExpenseCard';

function App() {
  return (

    <div className="App">
      <ExpenseAdder />
      <div style={{display: 'flex', flexDirection:'column', padding: '16px'}}>
        {/* <ExpenseCard name={"Food"} amount={200} date={new Date(Date.now())} /> */}
      </div>
    </div>
  );
}

export default App;
