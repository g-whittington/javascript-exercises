const removeFromArray = function(array, ...args) {
    lenArray = array.length;

    for (let arg of args) {
        for (let i = 0; i < lenArray; i++) {
            if (array[i] === arg) {
                array.splice(i,1);
            };
        };
    };

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
