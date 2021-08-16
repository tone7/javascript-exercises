const reverseString = function(str) {
    let stringArray = str.split('');
    let returnString = '';
    for(let i = stringArray.length - 1; i >= 0; i--){
        returnString += stringArray[i];
    }
    return returnString;
};

module.exports = reverseString;
