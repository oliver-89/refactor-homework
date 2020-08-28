const test = require('ava');
const { printOwing } = require('../src/print');


test('printOwing case 1. Customer Oliver with amount 1 and 2. ', t => {

    let invoice = {
        'customer': 'Oliver',
        'borderSpacing': [{
            'amount': 1,
        },
        {
            'amount': 2,
        },]
    };

    const result = printOwing(invoice);

    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: Oliver\n' +
        'amount: 3\n' +
        'amount: 9/27/2020');
});


test('printOwing case 2. Customer Oliver without amount. ', t => {

    let invoice = {
        'customer': 'Oliver',
        'borderSpacing': []
    };

    const result = printOwing(invoice);

    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: Oliver\n' +
        'amount: 0\n' +
        'amount: 9/27/2020');
});







