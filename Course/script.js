// 'use strict';


// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);


// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false

// };

// console.log(person.name);
// console.log(person["name"]);

// let arr = ['plum.png', 'orange.jpg' , 'apple.bmp'];
// console.log(arr[2]);

// alert("hello world");

// let answere = confirm("Are you here?");
// console.log(answere);

// let answere = +prompt("Are you over 18?", "Yes");
// console.log(typeof(arr));

// console.log(typeof(answere));

// console.log("arr" + " - object");
// console.log(4 + " - object");

// let incr = 10,
//     decr = 10;


// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log("2" == 2);


// let isChecked = true,
//     isClose = false;

// console.log(isChecked || isClose);



// if (2*4 == 9) {
//     console.log("Right")
// } else{
//     console.log("Not Right");
// }

// let num = 50;

// if (num < 49) {
//     console.log("Not right");
// } else if (num > 100) {
//     console.log("Too much");
// } else {
//     console.log("Right");
// }

// (num == 50) ? console.log('Right'): console.log('Wrong');

// switch (num) {
//     case num < 49:
//         console.log('Right');
//         break;
//     case num > 100:
//         console.log('Too much');
//         break;
//     case num > 80:
//         console.log('Still too much');
//         break;
//     case 50:
//         console.log('Right');
//         break;
//     default:
//         console.log('Something went wrong');
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

/* let num = 20;

function showFirstMessage (text) {
    alert(text); 
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num); */

// function calc(a,b) {
//     return(a + b);
// }

// let calc = function(a,b) {
//     return(a + b);
// }

// let calc = (a, b) => a + b;

// console.log(calc(3, 4));
// console.log(calc(5, 6));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
// function first() {
//     // Что-то делаем
//     setTimeout( function(){
//     console.log(1);
//     }, 500 );
// }

// function second() {
//     console.log(2);
// }
// first();
// second();


// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел третий урок");
// }

// learnJS("JavaScript", done);
 
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Тут мы берем каждый элемент массива и применяе к нему данную функцию
// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key in mass){
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

let arr = [1, 2, 15 ,4],
    i = arr.sort(compareNum);

function compareNum(a, b){
    return a - b;
}

console.log(i);

