var numbers = [1, 2, 3];
var newNumber = [...numbers, 4, 5, 6];
console.log(newNumber);


// exact copy of numb
var numbers = [1, 2, 3];

var a = numbers;

numbers.push(4);
console.log(a);