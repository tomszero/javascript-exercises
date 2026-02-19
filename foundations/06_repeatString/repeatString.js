const repeatString = function(string, times) {
    if (times < 0) {
        return 'ERROR';
    }
    else {
        let newString = '';
        for (let i = 1; i <= times; i++) {
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
