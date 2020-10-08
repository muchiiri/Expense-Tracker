const balance = document.getElementById("balance");
const money_plus = document.getElementById("moneyp-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const number = document.getElementById("number");

const dummyTransactions = [
  { id: 1, text: "Sal", amount: 200 },
  { id: 2, text: "Wage", amount: -100 },
];

let transactions = dummyTransactions;

//Add Transactions to DOM list

function addTransactionDOM(transaction) {
  // get the sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  //Add Class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
${transaction.text} <span> ${sign}${Math.abs(transaction.amount)} </span>
<button class="delete-btn">x</button>
`;

  list.appendChild(item);
}

//Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
}

init();
