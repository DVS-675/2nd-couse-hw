// Задание 1

numbers = [3, 4, 1, 9];

function getResult(array, callback) {
  return callback(array);
}

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function mult(array) {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }
  return mult;
}

getResult(numbers, mult);

// Задание 2

const users = [
  { name: "Jon", age: 22 },
  { name: "Richard", age: 18 },
  { name: "Anton", age: 32 },
  { name: "Lida", age: 23 },
  { name: "Bob", age: 44 },
];

function getSortedArrayObj(array) {
  array.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(array);
}

getSortedArrayObj(users);

// Задание 3

const arr = [1, "4", false, 9, "two"];

function each(array, callback) {
  return callback(array);
}

function reversArr(array) {
  return array.reverse();
}

function toNumberArr(array) {
  const newArr = [];
  array.forEach((element) => {
    if (!isNaN(element)) {
      newArr.push(Number(element));
    }
  });
  return newArr;
}

each(arr, reversArr);
each(arr, toNumberArr);

//Задание 4

function date() {
  const interval = setInterval(() => {
    console.log(new Date());
  }, 3000);
  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, 30000);
}

date();

// Задание 5

function calling() {
  console.log("Звоню!");
}

function beeps(callback) {
  console.log("Идут гудки...");
  setTimeout(() => {
    callback();
  }, 1000);
}

function talk() {
  console.log("Разговор");
}

calling();
beeps(talk);
