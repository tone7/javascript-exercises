const sumAll = function() {
    let start = arguments[0];
    let end = arguments[1];

    let sum = 0;

    if(start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number'){
        return 'ERROR';
    }

    if(start > end){
        let help = start;
        start = end;
        end = help;
    }

    for(let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
