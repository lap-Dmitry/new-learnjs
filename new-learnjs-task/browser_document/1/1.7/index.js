// createTextNode vs innerHTML vs textContent
/* В 1 и 3 случае команды работают одинаково */


// Очистите элемент
function clear(elem) {
    elem.innerHTML = '';
}

clear(elem);


// Почему остаётся "aaa"?
/* Ошибка в написании HTML. Текст "ааа" должен быть в теге "td" */


// Создайте список
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите название");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}


// Создайте дерево из объекта
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

// innerHTML
function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) {
    let li = '';
    let ul;
    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(container, data);

// DOM
function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) {
        return;
    }

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.getElementById('container');
createTree(container, data);


// Выведите список потомков в дереве
let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;

    if (!descendantsCount) {
        continue;
    }

    li.firstChild.data += ' [' + descendantsCount + ']';
}


// Создайте календарь в виде таблицы
function createCalendar(elem, year, month) {
    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1)
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }

    return day - 1;
}

createCalendar(calendar, 2012, 9);


// Цветные часы с использованием setInterval
let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}


// Вставьте HTML в список
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


// Сортировка таблицы
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);