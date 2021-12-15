import "../ExpenseItemsProcesed/ExpenseItemsProcesed.css";
import ExpenseItemsPrps from "../ExpenseItemsPrps/ExpenseItemsPrps";

export default function ExpenseItemsProcesed(props) {
  console.log(props.ExpensesData[0].title, props.ExpensesData[0].currency);
  return (
    <div>
      <ExpenseItemsPrps
        title={props.ExpensesData[0].title}
        currency={props.ExpensesData[0].currency}
        amount={props.ExpensesData[0].amount}
        date={props.ExpensesData[0].date}
      />
      <ExpenseItemsPrps
        title={props.ExpensesData[1].title}
        currency={props.ExpensesData[1].currency}
        amount={props.ExpensesData[1].amount}
        date={props.ExpensesData[1].date}
      />
      <ExpenseItemsPrps
        title={props.ExpensesData[2].title}
        currency={props.ExpensesData[2].currency}
        amount={props.ExpensesData[2].amount}
        date={props.ExpensesData[2].date}
      />
      <ExpenseItemsPrps
        title={props.ExpensesData[3].title}
        currency={props.ExpensesData[3].currency}
        amount={props.ExpensesData[3].amount}
        date={props.ExpensesData[3].date}
      />
      <ExpenseItemsPrps
        title={props.ExpensesData[4].title}
        currency={props.ExpensesData[4].currency}
        amount={props.ExpensesData[4].amount}
        date={props.ExpensesData[4].date}
      />
    </div>
  );
}
