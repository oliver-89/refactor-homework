const test = require('ava');
const { Employee } = require('../src/employee');


test('Employee case 1. Employee Oliver with type manager. ', t => {

    let employee = new Employee('Oliver', 'manager');

    const result = employee.toString();

    t.is(result, 'Oliver (manager)');
});

test('Employee case 2. Employee Oliver with none exist type Oliver. ', t => {
    try {
        new Employee('Oliver', 'Oliver');
    }
    catch (e) {
        t.is(e.message, 'Employee cannot be of type Oliver');
    }
});