const repeatString = function(str, number) {
    if(number < 0){
        return 'ERROR';
    }else{
        let finalString = '';
        for(let i = 0; i < number; i++){
            finalString += str;
        }
        return finalString;
    }
};

module.exports = repeatString;
