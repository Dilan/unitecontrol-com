var _ = require('lodash'),
    sinon = require('sinon'),
    should = require('should');

describe('Print Miss/Kiss', function() {
    var consoleLogSub,
        printFrom1To100 = require('../main').printFrom1To100;

    beforeEach(function(done) {
        if (typeof consoleLogSub !== 'undefined' && typeof consoleLogSub.restore !== 'undefined') {
            consoleLogSub.restore();
        }
        done();
    });

    it('function console.log have to be called 100 times', function(done) {
        consoleLogSub = sinon.stub(console, 'log');
        printFrom1To100();
        consoleLogSub.callCount.should.equal(100);
        consoleLogSub.restore();
        done();
    });

    it('print [Miss] 27 times, [Kiss] 14 times, [MissKiss] 6 times and rest numbers 53 times', function(done) {
        consoleLogSub = sinon.stub(console, 'log');

        printFrom1To100();

        var output = _.times(100, function(n) {
                return consoleLogSub.getCall(n).args[0];
            }),
            countMiss = _.filter(output, function(item) {
                return item === 'Miss';
            }),
            countKiss = _.filter(output, function(item) {
                return item === 'Kiss';
            }),
            countMissKiss = _.filter(output, function(item) {
                return item === 'MissKiss';
            }),
            countNumbers = _.filter(output, function(item) {
                return _.isNumber(item);
            });

        countMiss.length.should.equal(27);
        countKiss.length.should.equal(14);
        countMissKiss.length.should.equal(6);
        countNumbers.length.should.equal(53);

        consoleLogSub.restore();

        done();
    });
});
