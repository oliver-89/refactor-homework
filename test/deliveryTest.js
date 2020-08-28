const test = require('ava');
const { deliveryDate } = require('../src/delivery');

test('Delivery case 1, is rush true and MA', t => {
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = true;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 3)
})

test('Delivery case 2, is rush true and NY', t => {
    let anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = true;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 4)
})

test('Delivery case 3, is rush true and NYY', t => {
    let anOrder = {
        deliveryState: 'NYY',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = true;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 5)
})

test('Delivery case 4, is rush false and MA', t => {
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = false;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 5)
})

test('Delivery case 5, is rush false and ME', t => {
    let anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = false;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 6)
})

test('Delivery case 6, is rush false and MEE', t => {
    let anOrder = {
        deliveryState: 'MEE',
        placedOn: {
            plusDays: (num) => { return num + 1 }
        }
    }
    let isRush = false;
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 7)
})