const {
    performance
  } = require('node:perf_hooks');

class Perf {
    constructor () {
        this.perfMetrics = [];
    }

    recordPerf(args, N, callbackFunction) {
        const t0 = performance.now();
        const result = callbackFunction(...args);
        const t1 = performance.now();
        this.perfMetrics.push({
            'input': N,
            'time' : t1-t0,
        })
        return result;
    }
}

module.exports = Perf;