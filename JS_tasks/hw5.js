//Задание 1

const lessNumber = (a, b) => {
  if (a > b) {
    return b;
  } else if (a <= b) {
    return a;
  }
};

//Задание 2

const isEven = (a) => {
  if (a % 2 == 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
};

//Задание 3

const numberSquare = (a) => {
  return Math.pow(a, 2);
};

//Задание 4

const greetings = () => {
  let userYear = prompt("Сколько вам лет?");
  if (userYear <= 12 && userYear >= 0) {
    alert("Привет, друг!");
  } else if (userYear >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Вы ввели неправильное значение");
  }
};

//Задание 5

const numberMult = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a * b;
  } else {
    return "Одно или оба значения не являются числом";
  }
};

//Задание 6

const numberCube = () => {
  let userNumber = Number(prompt("Введите число"));

  if (!isNaN(userNumber)) {
    let userNumberCube = Math.pow(userNumber, 3);
    return `${userNumber} в кубе равняется ${userNumberCube}`;
  } else {
    return "Переданный параметр не является числом";
  }
};
