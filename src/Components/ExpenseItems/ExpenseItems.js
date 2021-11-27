import React from "react";
import "../ExpenseItems/ExpenseItems.css";
import PostsData from "../../data/post.json";
import Vanilla from "react-vanilla-tilt";

function ExpenseItems(props) {
  

  return (
    <div>
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
              </div>
            </Vanilla>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseItems;