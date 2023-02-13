//Задание 1

for (let hello = 0; hello < 2; hello++) {
  console.log("Привет");
}

//Задание 2

for (let index = 0; index <= 5; index++) {
  console.log(index);
}

//Задание 3

for (let number = 7; number <= 22; number++) {
  console.log(number);
}

//Задание 4

let obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]} долларов.`);
}

//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++
}

console.log(n);
console.log(num);

//Задание 6 

for (let fridayDate = 1; fridayDate <= 31; fridayDate += 7) {
console.log(`Сегодня пятница ${fridayDate}-e число. Необходимо подготовить отчет.`)
}
