import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";
import Logining from "./components/expenses/Logining";
import Header from "./components/expenses/Header";
import Button from "./components/UI/Button";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [bool, setBool] = useState(true);
  const [headerBool, setheaderBool] = useState(false);
  const deletTheItem = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const setbool = (bool) => {
    setBool(bool);
  };

  const getNewExpense = (newObject) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newObject];
      return updatedExpenses;
    });
  };
  return (
    <>
      {bool ? (
        <Logining bool={bool} setbool={setbool}></Logining>
      ) : (
        <div className="root-div">
          {headerBool ? (
            <Header></Header>
          ) : (
            <Button onClick={() => setheaderBool(!bool)}>Get Users</Button>
          )}
          <NewExpense onNewExpense={getNewExpense} />
          <Expenses array={expenses} delet={deletTheItem} />
        </div>
      )}
    </>
  );
}

export default App;
