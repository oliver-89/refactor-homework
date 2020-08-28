const test = require('ava');
const { printOwing } = require('../src/print');

const invoice = {
    'customer': 'Oliver',
    'borderSpacing': [{
        'amount': 1,
    },
    {
        'amount': 2,
    },]
};

test('printOwing case 1. Customer Oliver without amount 1 and 2. ', t => {

    const result = printOwing(invoice);

    t.is(result, '');
});






