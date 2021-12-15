import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import ExpenseItems from "./Components/ExpenseItems/ExpenseItems";
import ExpenseItemsProcesed from "./Components/ExpenseItemsProcesed/ExpenseItemsProcesed";

function App() {
  const ExpenseItemsPropData = [
    {
      title: "Car Insurance",
      date: new Date(2021, 9, 28),
      amount: 450,
      currency: "R$",
    },
    {
      title: "Food",
      date: new Date(2021, 5, 8),
      amount: 1000,
      currency: "R$",
    },
    {
      title: "Games",
      date: new Date(2021, 6, 2),
      amount: 300,
      currency: "R$",
    },
    {
      title: "Study",
      date: new Date(2021, 9, 5),
      amount: 320,
      currency: "R$",
    },
    {
      title: "Improving my Self",
      date: new Date(2021, 10, 19),
      amount: 600,
      currency: "R$",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <ExpenseItems></ExpenseItems>
      <ExpenseItemsProcesed ExpensesData={ExpenseItemsPropData} />
    </div>
  );
}

export default App;
