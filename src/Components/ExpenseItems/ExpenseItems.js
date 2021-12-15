import "../ExpenseItems/ExpenseItems.css";
import PostsData from "../../data/post.json";
import Vanilla from "react-vanilla-tilt";

function ExpenseItems(props) {
  

  return (
    <div>
      <h2>Consuming a JSON DATA</h2>
      <div className="cards__container">
        {PostsData.map((postDetail, index) => {
          return (
            <Vanilla className="card">
              <h4>{postDetail.title}</h4>
              <div className="popUpContent">
                <div className="amount">
                  <p>
                    {postDetail.currency}&nbsp;
                    {postDetail.amount}
                  </p>
                </div>
                
                <div className="dateTime">
                  {postDetail.date}
                </div>
              </div>
            </Vanilla>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseItems;
