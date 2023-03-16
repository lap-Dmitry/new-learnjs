// Дочерние элементы в DOM
document.body.firstElementChild // div
document.body.lastElementChild // ul
document.body.lastElementChild.lastElementChild // li с именем Пит


// Вопрос о соседях
/* 1. Верно, т.к. элемент elem.lastChild последний и у него нет ссылки nextSibling
   2. Неверно, т.к. elem.children[0] - потомок элемент и перед ним могут быть другие узлы
*/


// Выделите ячейки по диагонали
let newTable = document.body.firstElementChild;

for (let i = 0; i < newTable.rows.length; i++) {
    let row = newTable.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}