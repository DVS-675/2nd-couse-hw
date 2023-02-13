//Задание 1

let array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 5) break;
  console.log(array[i]);
}

//Задание 2

let array2 = [1, 5, 4, 10, 0, 3];

array2.indexOf(4);

//Задание 3

let array3 = [1, 3, 5, 10, 20];

array3 = array3.join(" ");

//Задание 4

let array4 = [];

for (let i = 0; i < 10; i++) {
  array4.push(Math.round(Math.random() * 10));
}

let array4Odd = array4.filter((number) => {
  return number % 2 === 0;
});

console.log(array4);
console.log(array4Odd);

//Задание 5

let array5 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

console.log(array5);

//Задание 6

let array6 = [1, 1, 1];

array6.push(2, 2, 2);
console.log(array6);

//Задание 7

let array7 = [9, 8, 7, "a", 6, 5];

array7.sort();
array7.pop();

console.log(array7);

//Задание 8

let array8 = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt("Введите число от 1 до 10"));

if (array8.includes(userAnswer)) {
  console.log("Число содержится в массиве");
} else {
  console.log("Число не содержится в массиве");
}

//Задание 9

let array9 = "abcdef";

array9 = array9.split("");
console.log(array9);
array9 = array9.reverse();
array9 = array9.join("");
console.log(array9);

//Задание 10

let array10 = [];

for (let i = 0, min = 1, max = 10; i < 6; i++) {
  array10.push(Math.round(Math.random() * (max - min) + min));
}

console.log(array10);

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < array10.length; i++) {
    sum += numbers[i];
  }
  return sum / array10.length;
};

console.log(getAverage(array10));

//Задание 11

let array11 = [
  [1, 2, 3],
  [4, 5, 6],
];

let array11Add = [].concat(...array11);

console.log(array11Add);

//Задание 12

let array12 = [];

for (let i = 0, min = 1, max = 10; i < 10; i++) {
  array12.push(Math.round(Math.random() * (max - min) + min));
}

console.log(array12);

let sum = 0;

const arrSum = (number) => {
  for (let i = 0; i < number.length - 1; i++) {
    sum = number[i] + number[i + 1];
    console.log(sum);
  }
};

console.log(arrSum(array12));
