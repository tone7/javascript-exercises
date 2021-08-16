const removeFromArray = function() {
    let array = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        let index = -1;
        do{
            index = array.indexOf(arguments[i]);
            if(index > -1){
                array.splice(index, 1);
            }
        }while(index > -1)
    }

    return array;
};

module.exports = removeFromArray;
