"use strict";

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


const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// let i = 0;
const deleteElement = (e) => {
    console.log(e.Targer);
    console.log(e.type);
    // e.target.remove();
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);