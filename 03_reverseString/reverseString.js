const reverseString = function(word) {
    let wordArr = word.split("");
    let wordLength = word.length;
    let reverseWord = "";

    for (let i = 0; i < wordLength; i++){
        reverseWord += wordArr.pop();
    };
    
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
