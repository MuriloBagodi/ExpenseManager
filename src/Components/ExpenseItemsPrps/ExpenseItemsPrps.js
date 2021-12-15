import "../ExpenseItemsPrps/ExpenseItemsPrps.css";
import Vanilla from "react-vanilla-tilt";

export default function ExpenseItemsPrps(props) {
  const month = props.date.toLocaleDateString("pt-br", { month: "long" });
  const day = props.date.toLocaleDateString("pt-br", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <div className="content__prop">
        <Vanilla className="card__prop">
          <div className="date__box">
            <h5>{month}</h5>
            <h5>{year}</h5>
            <h2>{day}</h2>
          </div>
          <div className="title__prop">
            <h4>{props.title}</h4>
          </div>
          <div className="amount__prop">
            <p>
              <strong>{props.currency}&nbsp;</strong>
              {props.amount}
            </p>
          </div>
        </Vanilla>
      </div>
    </>
  );
}
