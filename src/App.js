import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 199.99, date: new Date(2022, 10, 12) },
    { title: "Home Insurance", amount: 299.99, date: new Date(2022, 10, 12) },
  ];

  const addExpenseHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };

    console.log("Inside app js");
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
