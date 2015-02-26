/*
 Write a program that prints the numbers from 1 to 100.
 But for multiples of three print "Miss" instead of the number and for the multiples
 of five print "Kiss". For numbers which are multiples of both three and five print "MissKiss".
*/
module.exports.printFrom1To100 = function() {
    var i,
        message;
    for (i = 1; i <= 100; i++) {
        message = '';
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                message += 'Miss';
            }
            if (i % 5 === 0) {
                message += 'Kiss';
            }
        } else {
            message = i;
        }
        console.log(message);
    }
};

if (require.main === module) {
    module.exports.printFrom1To100();
}
