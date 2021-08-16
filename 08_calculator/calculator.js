const add = function() {
  let number1 = arguments[0];
  let number2 = arguments[1];
  return number1 + number2;
};

const subtract = function() {
	let number1 = arguments[0];
  let number2 = arguments[1];
  return number1 - number2;
};

const sum = function() {
  let argArray = arguments[0];
  let sum = 0;

  for(let i = 0; i < argArray.length; i++){
    sum += argArray[i];
  }

  return sum;
};

const multiply = function() {
  let argArray = arguments[0];
  let result = 1;

  for(let i = 0; i < argArray.length; i++){
    result *= argArray[i];
  }

  return result;
};

const power = function() {
  let base = arguments[0];
  let exponent = arguments[1];

  return base ** exponent;
};

const factorial = function() {
	let number = arguments[0];

  if(number == 0){
    return 1;
  }else{
    let result = 1;
    for(let i = 1; i <= number; i++){
      result *= i;
    }

    return result;
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
