// Поиск элементов
let table = document.getElementById('age-table'); // 1
table.getElementsByTagName('label'); // 2
table.rows[0].cells[0]; // 3
let form = document.querySelector('form[name-"search"]'); // 4
form.getElementsByTagName('input')[0]; // 5
let inputs = form.querySelectorAll('input');
inputs[inputs.length - 1] // 6