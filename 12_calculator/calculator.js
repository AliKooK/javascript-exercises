const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum =0;
  for(let num of arr){
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let dot =1;
  for(let num of arr){
    dot *= num;
  }
  return dot;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if(num === 0)
    return 1;
  else
  return num * factorial (num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
