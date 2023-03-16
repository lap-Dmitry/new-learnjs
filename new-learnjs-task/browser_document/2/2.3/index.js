// Спрячьте сообщения с помощью делегирования
container.onclick = function (event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
};


// Раскрывающееся дерево
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}


// Сортируемая таблица
grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}


// Поведение "подсказка"
let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};