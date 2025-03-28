import React from "react";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";

export const Expenses = ({ array, delet }) => {
  return (
    <Card>
      <ExpensesList products={array} delet={delet} />
    </Card>
  );
};
