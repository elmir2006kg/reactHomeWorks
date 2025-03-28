import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = ({ products = [], delet }) => {
  return (
    <ul>
      {products.map((item) => (
        <ExpenseItem key={item.id} {...item} delet={delet} />
      ))}
    </ul>
  );
};
