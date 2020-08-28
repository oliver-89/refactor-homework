function printOwing(invoice) {
  
  let result = '***********************\n**** Customer Owes ****\n***********************\n';

  let outstanding = calcOutstanding(invoice);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

module.exports = {
  printOwing,
};
function calcOutstanding(invoice) {
  let outstanding = 0;
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

