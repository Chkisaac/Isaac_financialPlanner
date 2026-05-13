const FinancialPlanner = require('./financePlanner');

const myPlanner = new FinancialPlanner();

// Add transactions
myPlanner.addTransaction(5000, 'Salary', 'Monthly Paycheck');
myPlanner.addTransaction(-1200, 'Rent', 'May Housing');
myPlanner.addTransaction(-150, 'Groceries', 'Weekly groceries');
myPlanner.addTransaction(-60, 'Food', 'Takeout pizza');

// Add transactions test
console.log(
  myPlanner.addTransaction("abc", "Food", "Invalid test")
);

// Get current balance
console.log("Current Balance:");
console.log(myPlanner.getBalance());

// Get transaction history
console.log("\nTransaction History:");
console.log(myPlanner.getHistory());

// Get last 2 transactions
console.log("\nLast 2 Transactions:");
console.log(myPlanner.getHistory(2));

// Get spending summary
console.log("\nSummary By Category:");
console.log(myPlanner.getSummaryByCategory());

// Filter expenses
console.log("\nExpenses Only:");
console.log(myPlanner.filterTransactions('expense'));

// Filter income
console.log("\nIncome Only:");
console.log(myPlanner.filterTransactions('income'));

// Delete a transaction
const transactionToDelete = myPlanner.getHistory()[0].id;

console.log("\nDeleting Transaction:");
console.log(myPlanner.deleteTransaction(transactionToDelete));

// Show updated history
console.log("\nUpdated History:");
console.log(myPlanner.getHistory());

// Clear all transactions
console.log("\nClearing Ledger:");
console.log(myPlanner.clearLedger());

// Final history
console.log("\nFinal Transactions:");
console.log(myPlanner.getHistory());