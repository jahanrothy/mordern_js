const students = ["rahim", "jamal", "sadia"];
document.getElementById("demo").innerHTML = students;

let length = students.length;

let stud = students[1];

students[1] = "karim";

console.log(students[1]);

// for loop

const fruits = ["Banana", "Orange", 'Apple', "Mango"]

// for (i = 0; i< fruits.length; i++){
//     console.log(i);
//     console.log(fruits[i]);
// }

// foreach

function myFunction(value){
    console.log(value)
}
fruits.forEach(myFunction);


// push & Pop
// removed last element
fruits.pop();

// add in last
fruits.push("Orange");

// removed 1st element

fruits. shift();

// add 1st element
fruits. unshift("pineapple");