/*
 * Оголошення
 * Оголосити дві змінні без ініціалізації - одну міняти не можна, іншу можна
 * Присвоїти їм будь-які значення і вивести їх значення в консоль
 */

// /////////////////////////////////////////////////////////

/*
 * Зміна
 * Спробувати змінити значення оголошених вище змінних
 * Вивести їх нові значення в консоль
 */

// /////////////////////////////////////////////////////////

/*
 * Повторное объявление
 * Объявить по две переменные с одинаковым именем (let/const), но разными значениями
 * Вывести в консоль их значения
 */


// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.


// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;



// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
// const str = "string not starting with capital";

// const newStr = str[0].toUpperCase() + str.slice(1);
// console.log(newStr);



// const name = "Mango";
// console.log(name.split(""));


// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join(""));
// console.log(words.join(" ")); 
// console.log(words.join("-"));




// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Ajax"));
// console.log(clients.indexOf("HYHh"));


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("JHHHJJ"));
// console.log(clients.includes("Mango"));




// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// console.log(redFruits.includes(fruit));

// console.log(`${fruit} це червоний фрукт`);





// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); 




// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []




// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// // console.log(clients.slice(1, 3)); 
// // console.log(clients.slice(0, 3));
// console.log(clients.slice(-3));





//  const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
//  console.table(clients);

//  console.log(clients.length);

//  const lastElementIndex = clients.length - 1;
//  console.log(lastElementIndex);
//  console.log(clients[lastElementIndex]);




// const clients = ["Mango", "Ajax", "Poly"];

// for (let i=0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }



// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log(client);
// }



// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }



// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;


// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Такий клієнт є";
//         break;
//     }

//     message = "Такого клієнта не має";
// }

// console.log(message);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }




// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5




// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]




// const clients = "123435465765675678568";
// console.log(clients.split(""));


// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// // console.log(words.join(" ")); // "JavaScript це цікаво"
// // console.log(words.join("-")); // "JavaScript-це-цікаво"
// console.log(words.join(" "));



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Mango"));

// console.log(clients.includes("Mango"));




// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }



// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]



// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// console.log(numbers.pop());




// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Mango2", "Ajax2", "Poly2", "Kiwi2"];
// console.log(clients.slice(-4)); // ["Poly", "Kiwi"]



// function multiply() {
//     // Тіло функції
//     console.log("Це лог на момент виклику функції multiply");
//   }
  
//   // 2. Виклики функції multiply
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'


//   function multiply() {
//     console.log("Виклик функції");
//   }

//   multiply();



// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//     return x * y * z;
// }

// const message = multiply(2, 1, 2);
// console.log(message);
// multiply(10, 2, 5);



// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// console.log(fruits);
// fruits.length = 0;
// console.log(fruits);



// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const foot = [...fruits, ...meat, ...vegetables];
// console.log(foot);




const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
const randomFruit = fruits[Math.random() * fruits.length)



console.log(randomFruit); // поверне рандомний фрукт із масиву


