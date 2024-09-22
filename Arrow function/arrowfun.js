// ES6 fat arrow function
let number = (n,m)=> n + m;

console.log(number(10,20));


// this keyword
// before arrow function this keyword
var javaScript = {
    name:"javascripts",
    librarie: ["React", "Angular", "vue"],
    printLibraries: function (){
        var self = this;
        this.librarie.forEach(function (a) {
            console.log(`${self.name} loves ${a}`);
        });
    },

};

javaScript.printLibraries();




// after arrow function


var javaScript = {
    name:"javascripts",
    librarie: ["React", "Angular", "vue"],
    printLibraries: function (){
        
        this.librarie.forEach((a)=> console.log(`${this.name} loves ${a}`)
        );
    },

};

javaScript.printLibraries();



const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");


function show(){
    display.innerHTML = this.value;
    setTimeout(function () {
        thanks.innerHTML = `you have typed: ${this.value}`;
    }, 1000);
}

searchInput.addEventListener("keyup", show);