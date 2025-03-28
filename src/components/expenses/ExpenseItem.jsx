import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import Button from "../UI/Button";
export const ExpenseItem = ({ title, amount, date, delet, id }) => {
  return (
    <li className="expense-item">
      <div className="container-text_date">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
      </div>

      <div className="expense-itemdescription">
        <div className="expense-itemprice">${amount} </div>
      </div>
      <button
        style={{ width: "80px", marginLeft: "40px", borderRadius: "200px" }}
        onClick={() => delet(id)}
      >
        delete
      </button>
    </li>
  );
};
