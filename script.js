"use strict";

// Оголошення функції-обчислювача
const calculate = () => {

  // Отримання всіх елементів input на сторінці та фільтрація за прізвищами працівників
  const inputElements = Array.from(document.querySelectorAll("input"));
  const employees = inputElements.filter((inputElement) =>
    inputElement.id.startsWith("surname")
  ).map((inputElement) => ({
    surname: inputElement.value,
    hireDate: new Date(
      document.querySelector(`#${inputElement.id.replace("surname", "date")}`).value
    ),
  }));

  // Отримання поточної дати
  const currentDate = new Date();

  // Перевірка, що жодна дата не є з майбутнього
  if (employees.some((employee) => employee.hireDate > currentDate)) {
    alert("Введіть коректну дату прийому на роботу. Ви вводите ");
    return;
  }

  // Розрахунок середнього стажу роботи в роках
  const averageYears = Math.floor(
    employees.reduce(
      (sum, employee) =>
        sum +
        (currentDate - employee.hireDate) / (1000 * 60 * 60 * 24 * 365),
      0
    ) / employees.length
  );

  // Вивід результату у вигляді діалогового вікна
  alert(`Середній стаж роботи на поточний час: ${averageYears} років`);
};
