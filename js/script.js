// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     console.dir(event.target);
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);




// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const element = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 100);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else { 
//             pos++;
//             element.style.top = pos + "px";
//             element.style.left = pos + "px"; 
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }


// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);


// const now = new Date('2021-07-13');
// new Date.parse('2021-07-13');

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18, 40));
// console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i **3;
// }

// let end = new Date();
// console.log(`Цикл отработал за ${end - start} милисекунд`);