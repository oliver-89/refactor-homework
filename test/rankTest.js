const rankTest = require('ava');
const {voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating} = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rank case 1,voyage length 7 and zone china', t=>{
  const voyage = {
      zone: 'china',
      length: 7,
  };
  let result = voyageRisk(voyage);
  t.is(result,7)
})

rankTest('rank case 2,voyage length 9 and zone china', t=>{
  const voyage = {
      zone: 'china',
      length: 9,
  };
  let result = voyageRisk(voyage);
  t.is(result,8)
})

