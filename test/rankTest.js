const rankTest = require('ava');
const { voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating } = require('../src/rank');

const voyage = {
  zone: 'west-indies',
  length: 10,
};

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rank case 1,voyage length 7 and zone china', t => {
  const voyage = {
    zone: 'china',
    length: 7,
  };
  let result = voyageRisk(voyage);
  t.is(result, 7)
})

rankTest('rank case 2,voyage length 9 and zone china', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  let result = voyageRisk(voyage);
  t.is(result, 8)
})

rankTest('rank case 3, history with china', t => {
  let result = hasChina(history);
  t.is(result, true)
})

rankTest('rank case 4, captainHistoryRisk with voyage and history', t => {
  let result = captainHistoryRisk(voyage, history);
  t.is(result, 6)
})

rankTest('rank case 5,voyageProfitFactor with voyage(zone china length 7) and history', t => {
  const voyage = {
    zone: 'china',
    length: 7,
  };
  let result = voyageProfitFactor(voyage, history);
  t.is(6, result)
})

rankTest('rank case 6,voyageProfitFactor with voyage(zone china length 13) and history', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  let result = voyageProfitFactor(voyage, history);
  t.is(7, result)
})

rankTest('rank case 7:voyage length 10 and history has a zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const result = rating(voyage, history);
  t.is(result, 'B')
});

rankTest('rank case 8:voyage length 10 and history without zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [];
  const result = rating(voyage, history);
  t.is(result, 'B')
});

rankTest('rank case 9:voyage without zone and history has a zone', t => {
  const voyage = {};
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const result = rating(voyage, history);
  t.is(result, 'B')
});

