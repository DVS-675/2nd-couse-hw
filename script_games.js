const timeOfYear = () => {
  const month = prompt("Введите номер месяца");
  if (month == 12 || month == 1 || month == 2) {
    alert("Зима!");
  } else if (month == 3 || month == 4 || month == 5) {
    alert("Весна!");
  } else if (month == 6 || month == 7 || month == 8) {
    alert("Лето!");
  } else if (month == 9 || month == 10 || month == 11) {
    alert("Осень!");
  } else {
    alert("Введите число от 0 до 12");
  }
};

function guessFruits() {
  const fruits = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  fruits.sort(() => Math.random() - 0.5);
  alert(fruits);
  const answerStart = prompt("Чему равнялся первый элемент массива?");
  const answerEnd = prompt("Чему равнялся последний элемент массива?");
  if (
    answerStart.toUpperCase() === fruits[0].toUpperCase() &&
    answerEnd.toUpperCase() === fruits[fruits.length - 1].toUpperCase()
  ) {
    alert("Поздравляю! Вы угадали оба фрукта");
  } else if (
    answerStart.toUpperCase() === fruits[0].toUpperCase() ||
    answerEnd.toUpperCase() === fruits[fruits.length - 1].toUpperCase()
  ) {
    alert("Вы были близки к победе!");
  } else alert("Вы не угадали ни одного фрукта!");
}
