// Задание 1

let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2

let yearFirstiphone = 2007;
alert(firstIphone);

//Задание 3

let creatorJavascript = "Брендан Эйх";
alert(creatorJavascript);

//Задание 4

let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

//Задание 5

let result = 2 ** 5;
alert(result);

//Задание 6

let d = 9;
let g = 2;
alert(d % g);

//Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//Задание 8

let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9

let user = {
  name: "Dima",
  age: 25,
  isAdmin: true,
};

user["City of residence"] = "Tyumen";

user.age = 26;

delete user["City of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10

const userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "!");
