const palindromes = function () {
    let stringArray = arguments[0].split('');
    let string = '';
    for(let i = 0; i < stringArray.length; i++){
        if((stringArray[i].charCodeAt(0) < 65 || stringArray[i].charCodeAt(0) > 90) && (stringArray[i].charCodeAt(0) < 97 || stringArray[i].charCodeAt(0) > 122)){
            stringArray[i] = '';
        }
    }

    string = stringArray.join('');
    string = string.toLowerCase();

    //console.log(string);

    let reversedString = '';
    for(let j = stringArray.length - 1; j >= 0; j--){
        reversedString += stringArray[j];
    }

    reversedString = reversedString.toLowerCase();

    //console.log(reversedString);

    if(string.localeCompare(reversedString) == 0){
        return true;
    }else{
        return false;
    }
};

module.exports = palindromes;
