"use strict";


const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);


// let btn = document.querySelectorAll('button'),
//     wrap = document.querySelector('.wrapper'),
//     link = document.querySelector('a');

// btn[0].addEventListener('click', function(event){
//     console.log('Произошло событие: ' + event.type + 'на элементе' + event.target);
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + 'на элементе' + event.target);
// });

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + 'на элементе' + event.target);
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave', function(){
//         console.log("Вышли!");
//     });
// });