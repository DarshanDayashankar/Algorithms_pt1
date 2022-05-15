const fib = require('./Fib.js');
const Perf = require('./performance.js');

const fibPerf = new Perf();
const memo = {};
const temp = (N) => fibPerf.recordPerf([N, memo], N, fib);


// temp(5);
// temp(10000);
// temp(20000);
// temp(400000);
// temp(8000000);
// temp(16000000);

test('tests fib', () => {expect(temp(5)).toBe(5)});
test('tests fib', () => {expect(temp(12)).toBe(144)});
test('tests fib', () => {expect(temp(24)).toBe(46368)});
test('tests fib', () => {expect(temp(25)).toBe(75025)});


//console.log(fibPerf.perfMetrics);