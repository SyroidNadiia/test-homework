//
//

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2);

// const cars = [1, 2, 3, 4, 5];

// const leftPart = cars.slice(0, 1);
// const rightPart = cars.slice(3);

// console.log(leftPart.concat(rightPart));

// cars[cars.length] = 88;

// cars.push(100);
// cars.pop();

// cars.unshift(1000, 1000, 1000);
// cars.shift();

// const res = cars.slice(-2);

// console.log(res);

// for (let i = 0; i < cars.length; i += 1) {
// 	cars[i] -= 10;
// }

// console.log(cars.join("-").split("-"));

// const arr = [];

// arr.push(100);

// console.log(arr);

// =>
// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву.
// Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ["Jazz", "Blues"];

// genres.push("Rock and Roll");

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.splice(0, 1)[0]); // 1

// console.log(genres.shift()); // 2

// genres.unshift("Country", "Reggae");

// console.log(genres);

// =>
// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = "8 11".split(" ");

// const height = Number(values[0]);
// const width = Number(values[1]);

// console.log(height * width);

// =>
// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок
// у форматі номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
// 	console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів
// у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = "Jacob,William,Solomon,Artemis".split(","); // ["Jacob", "William", "Solomon", "Artemis"]
// const phones = "38001234567,38001112233,380055566377,380055566300".split(",");

// for (let i = 0; i < names.length; i += 1) {
// 	console.log(`${names[i]}'s number is ${phones[i]}`); // "Jacob's number is 38001234567"
// }

// =>
// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome to the future";

// const res = string.split(" ");

// res.shift();
// res.pop();

// console.log(res.join(" "));

// =>
// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок слів) і виводить його в консоль.
// const string = "Welcome to the future";

// let res = string.split(" ").reverse().join(" ");

// console.log(res);

// =>
// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const numbers = [1, 2, 3, 5, 4, 7, 8, 7]; // [1, 2, 3, 5]
// [1, 2, 3, 4, 5, 7, 7, 8]
// [1, 2, 3, 4, 5, 7, 7]
// [1, 2, 3, 4, 5, 7]

// let count = 0;

// Bubble sorting
// for (let i = 1; i < numbers.length; i += 1) {
// 	let wasChanged = false;

// 	for (let j = 0; j < numbers.length - i; j += 1) {
// 		count += 1;

// 		const left = numbers[j];
// 		const right = numbers[j + 1];

// 		if (left > right) {
// 			wasChanged = true;
// 			numbers[j] = right;
// 			numbers[j + 1] = left;
// 		}
// 	}

// 	if (!wasChanged) break;
// }

// console.log(count);

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// for (let i = 1; i < langs.length; i += 1) {
// 	let wasChanged = false;

// 	for (let j = 0; j < langs.length - i; j += 1) {
// 		// 0
// 		const left = langs[j]; // langs[0] -> "python"
// 		const right = langs[j + 1]; // langs[1] -> "javascript"

// 		if (left[0] < right[0]) {
// 			wasChanged = true;
// 			langs[j] = right;
// 			langs[j + 1] = left;
// 		}
// 	}

// 	if (!wasChanged) break;
// }

// console.log(langs);

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь-якого масиву чисел.
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, -11000, 23, 37];

// let min = numbers[0];

// let count = 0;

// for (const number of numbers) {
// 	if (min > number) {
// 		min = number;
// 	}
// }

// for (let i = 1; i < numbers.length; i += 1) {
// 	if (min > numbers[i]) {
// 		min = numbers[i];
// 	}
// }
//
// console.log(min); // 1