// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
const t1 = transactions.filter(([x, y]) => {
  if (x == "income") {
    return [x, y];
  }
});
console.log(t1);

const t2 = transactions.filter(([x, y]) => {
  if (x == "expense") {
    return [x, y];
  }
});
console.log(t2);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let totalIncome = 0;
const t3 = t1.map(([x, y]) => {
  return (totalIncome = y + totalIncome);
});
console.log(totalIncome);

let totalExpense = 0;
const t4 = t2.map(([x, y]) => {
  return (totalExpense = y + totalExpense);
});
console.log(totalExpense);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
let netTotal = totalIncome - totalExpense;
console.log(netTotal);

const t5 = transactions.filter(([x, y]) => {
  if (y > 500) {
    return [x, y];
  }
});
console.log(t5);
