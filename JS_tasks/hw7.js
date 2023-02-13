//Задание 1

let JavaScript = "js";
console.log(JavaScript.toUpperCase());

//Задание 2

cars = ["Мазда", "Хонда", "Мерседес", "Рено", "Хендай"];

const searchStart = (array, searchCar) => {
  const newCars = [];
  array.forEach((car) => {
    if (car.toUpperCase().startsWith(searchCar.toUpperCase())) {
      newCars.push(car);
    }
  });
  return newCars;
};

searchStart(cars, "х");

//Задание 3

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4

let array4 = [52, 53, 49, 77, 21, 32];

console.log(
  "Минимальное число: " +
    Math.min(...array4) +
    " " +
    "Максимальное число: " +
    Math.max(...array4)
);

//Задание 5

const getRandom = (min = 1, max = 10) => {
  return Math.round(Math.random() * (max - min) + min);
};

getRandom();

//Задание 6

let array6 = [];

const getRandomArrNumbers = (number) => {
  for (let i = 0, min = 0, max = number; i < Math.floor(number / 2); i++) {
    array6.push(Math.round(Math.random() * (max - min) + min));
  }
  console.log(array6);
};

getRandomArrNumbers(5);

//Задание 7

const randomNumber = (a, b) => {
  if (b > a) {
    number = Math.round(Math.random() * (b - a) + a);
    return number;
  } else if (b < a) {
    number = Math.round(Math.random() * (a - b) + b);
    return number;
  } else {
    console.log("Числа одинаковые");
  }
};

randomNumber(4, 12);

//Задание 8

let currentDate = new Date();
console.log(currentDate);

//Задание 9

let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 71);
console.log(currentDate2);

//Задание 10
const date = (currentDate) => {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  
  let myDate = new Date()
  
  let fullDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + '. ' + 'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()
  
  console.log(fullDate)
}

date(currentDate)

