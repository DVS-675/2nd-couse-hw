//Задание 1

let password = "Пароль";

let askPassword = String(prompt("Введите пароль"));

if (password === askPassword) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

//Задание 2

let c = 5;

if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Задание 3

let d = 2;
let e = 8;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Задание 4

let a = Number("2");
let b = Number("3");

alert(a + b);

//Задание 5

let monthNumber = 12;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;

  default:
    alert("Вы ввели неверное число месяца");
    break;
}

//Задание7

let number = Number(prompt("введите любое число"));

if (!isNaN(number)) {
  if (number % 2 == 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
} else {
  console.log("NaN");
}

//Задание 8,9

let clientDeviceYear = 2015;
let clientOS = 0;

if (clientOS === 0 && clientDeviceYear >= 2015) {
  alert("Установите версию приложения для iOS по ссылке.");
} else if (clientOS === 0 && clientDeviceYear < 2015) {
  alert("Установите облегченную версию приложения для iOS по ссылке.");
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
  alert("Установите версию приложения для Android по ссылке.");
} else if (clientOS === 1 && clientDeviceYear < 2015) {
  alert("Установите облегченную версию приложения для Android по ссылке.");
} else {
}
