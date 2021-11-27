import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import ExpenseItems from "./Components/ExpenseItems/ExpenseItems";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <ExpenseItems></ExpenseItems>

    </div>
  );
}

export default App;
