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



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log(`User ${this.name} left`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }
// const ivan = new User('Ivan', 28); 

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);

// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith'); 
// sayName.apply(user, [' Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height*this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {  // extends - новый класс наследуется от указанного
//     constructor(height, width, text, bgColor) {
//         super(height, width); // Вызывает тоже самое что у родителя (всегда нужно ставить на первое место)
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');
// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usage' );

// function calcOrDouble(number, basis = 2) {  // Приравниваем аргумент в условии, чтобы задать параметр по умолчанию
//     basis = basis || 2; // Запишется 2 если аргумента нет, это старый способ и больше не используется см выше
//     console.log(number * basis);
// }
// calcOrDouble(3, 5);


const person = {
    name: 'Alex',
    tel: '+75555555555',
    parents: {
        mom: 'Hina',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Yumiko';
console.log(person);
console.log(clone);