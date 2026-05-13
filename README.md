# Personal Finance Planner Node Module

## Overview

This project is a Node.js financial planner module inspired by YNAB (You Need A Budget). The module allows users to manage personal financial transactions such as income and expenses. It also provides features to calculate balances, filter transactions, summarize spending categories, and manage transaction history.

This project was developed as part of the EGL301 Assignment 1.

---

# Features

The financial planner module supports the following functions:

| Function                 | Description                                |
| ------------------------ | ------------------------------------------ |
| `addTransaction()`       | Adds an income or expense transaction      |
| `getBalance()`           | Calculates the current account balance     |
| `getHistory()`           | Displays transaction history               |
| `getSummaryByCategory()` | Summarizes spending and income by category |
| `filterTransactions()`   | Filters transactions by income or expense  |
| `deleteTransaction()`    | Deletes a transaction using transaction ID |
| `clearLedger()`          | Clears all stored transactions             |

---

# Technologies Used

* Node.js
* JavaScript

---

# Project Structure

```txt
Assignment1/
│
├── financePlanner.js
├── app.js
└── README.md
```

---

# Installation

1. Download or clone the repository.

2. Open the project folder in Visual Studio Code.

3. Ensure Node.js is installed on your computer.

4. Run the application using:

```bash
node app.js
```

---

# Example Usage

```js
const FinancialPlanner = require('./financePlanner');

const myPlanner = new FinancialPlanner();

myPlanner.addTransaction(5000, 'Salary', 'Monthly Paycheck');
myPlanner.addTransaction(-1200, 'Rent', 'May Housing');

console.log(myPlanner.getBalance());
```

---

# Sample Output

```txt
Current Balance:
3590

Summary By Category:
{
  Salary: 5000,
  Rent: -1200
}
```

---

# References

* YNAB (You Need A Budget): [https://www.ynab.com/](https://www.ynab.com/)
* Node.js Documentation: [https://nodejs.org/en/docs](https://nodejs.org/en/docs)
* MDN JavaScript Documentation: [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

# Use of AI

ChatGPT was used to assist in brainstorming the project idea, what potential modules I could include in this project and the dummy data included in this project.
---

# Author

Isaac Ching
EGL301 Assignment 1
2026
