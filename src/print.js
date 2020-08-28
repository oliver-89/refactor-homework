function printOwing(invoice) {
  return generateOwing(invoice);
}

module.exports = {
  printOwing,
};
function generateOwing(invoice) {
  let result = '***********************\n**** Customer Owes ****\n***********************\n';
  let outstanding = calcOutstanding(invoice);
  recordDueDate(invoice);
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calcOutstanding(invoice) {
  let outstanding = 0;
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

