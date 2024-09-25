// map 

var arr = [1, 2, 3, 4];
 
var result = arr.map ((num)=>{
    return 2 * num;

});

// console.log(myobj);
console.log(result);

var nums = [2, 3, 4, 5, 6];

var sqrts = nums.map(Math.sqrt);
console.log(sqrts);



var arra = ["a", "d", "j", "H", "r"];

var list = arra.map((alp) =>{
    return "<li>"+alp+"</li>"
});

console.log(list);



const ages = [15, 28, ];
const names = ["Mohi", "john"];

const students = ages.map((age, index)=>{
    const name = names[index];
    return{
        "name" : name,
        "age" : age
    }
});

console.log(students);





