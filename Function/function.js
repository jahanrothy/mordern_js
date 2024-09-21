// function
function student(name,cgpa){
    console.log(name + " is good student, and her cgpa " + cgpa);

}
student("jasim", "3.90" );
student("rahim", "3.90" );

// return function
function student(name,cgpa){
    console.log(name + " is good student, and her cgpa " + cgpa);
    return 5;
}
student("jasim", "3.90" );
student("rahim", "3.90" );

// without return output undefined

function myFunction(a,b){
    console.log("hello");
}

let x = myFunction(2,3);
console.log(x);

// correct function

let y = myFunction(2,3);

function myFunction(a, b){
    return a*b;
}