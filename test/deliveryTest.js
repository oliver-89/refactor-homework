const test = require('ava');
const { deliveryDate } = require('../src/delivery');

test('Delivery case 1, is rush true and MA',t=>{
    let anOrder = {
        deliveryState:'MA',
        placedOn: {
            plusDays:(num)=>{return num+1}
        }
    }
    let isRush = true;
    let result = deliveryDate(anOrder,isRush);
    t.is(result,3)
})