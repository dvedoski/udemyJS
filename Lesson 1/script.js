'use strict'; //  Enable ES5 standart and higher

var num = 5;
var bool = true;
var str = "String";
null;
undefined;

console.log(4/0); // Infinity
console.log(str * bool); // NaN
console.log("'Hello!'"); // Infinity

var person = {
    name: "Enku",
    age: 25,
    hasJob: false
};

console.log(person.name);

person.hasJob = true;
console.log(person.hasJob);
console.log(person["age"]);

let colors = ['black', 'white', 'red'];
console.log(colors[0]);

/* let answer = confirm('Confirm?');
console.log(answer); */ // Shift+Alt+A

/* let answer = prompt('Confirm?', 'Yes');
console.log(answer); */

let inc = 1, dec = 10; 
console.log(inc++); // 1
console.log(inc);

console.log("1 == '1' is ", 1 == '1'); // проверка по значению
console.log("1 === '1' is ", 1 === '1'); // проверка по типу