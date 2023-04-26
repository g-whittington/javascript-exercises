const repeatString = function(string, numTimes) {
    if (numTimes < 0) return "ERROR";
    let resultString = "";

    for (let i = 0; i < numTimes; i++) {
        resultString += string;
    };
    
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
