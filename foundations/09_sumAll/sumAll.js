const sumAll = function(int1, int2) {
    if (int1 <0 || int2 <0 || int1 % 1 !== 0 || int2 % 1 !== 0 || typeof int1 !== 'number' || typeof int2 !== 'number') {
        return 'ERROR';
    }
    else {
        let sum = 0;
        for (let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
