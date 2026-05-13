class FinancialPlanner {
  constructor() {
    this.transactions = [];
  }

// function 1
  addTransaction(amount, category, description) {
    if (isNaN(Number(amount))) {
  return "Invalid amount. Please enter a valid number.";
}
    const transaction = {
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      amount: Number(amount),
      category: category || 'Uncategorized',
      description: description || '',
      date: new Date().toISOString()
    };
    this.transactions.push(transaction);
    return transaction;
  }

// function 2
  getBalance() {
    const balance = this.transactions.reduce((acc, t) => acc + t.amount, 0);
    return Number(balance.toFixed(2)); // Clean up floating point math
  }

// function 3
  getHistory(limit = null) {
    const history = [...this.transactions].reverse();
    return limit ? history.slice(0, limit) : history;
  }

// function 4
  getSummaryByCategory() {
    return this.transactions.reduce((summary, t) => {
      if (!summary[t.category]) summary[t.category] = 0;
      summary[t.category] += t.amount;
      return summary;
    }, {});
  }

// function 5
  filterTransactions(type) {
    if (type === 'income') return this.transactions.filter(t => t.amount > 0);
    if (type === 'expense') return this.transactions.filter(t => t.amount < 0);
    return this.transactions;
  }

// function 6
  deleteTransaction(id) {
    const initialLength = this.transactions.length;
    this.transactions = this.transactions.filter(t => t.id !== id);
    return this.transactions.length < initialLength; // Returns true if something was deleted
  }

// function 7 
  clearLedger() {
    this.transactions = [];
    return true;
  }
}

module.exports = FinancialPlanner;