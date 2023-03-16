// Найдите координаты точек относительно окна браузера
document.onclick = function (e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};
let fieldCoords = field.getBoundingClientRect();

let answer = [
    [
        fieldCoords.left,
        fieldCoords.top
    ], // 1
    [
        fieldCoords.right,
        fieldCoords.bottom
    ], // 2
    [
        fieldCoords.left + field.clientLeft,
        fieldCoords.top + field.clientTop
    ], // 3
    [
        fieldCoords.left + field.clientLeft + field.clientWidth,
        fieldCoords.top + field.clientTop + field.clientHeight
    ] // 4
];


// Покажите заметку рядом с элементом
function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }

}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote1 = document.querySelector('blockquote');

showNote(blockquote1, "top", "note above");
showNote(blockquote1, "right", "note at the right");
showNote(blockquote1, "bottom", "note below");


// Покажите заметку около элемента (абсолютное позиционирование)
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }

}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote2 = document.querySelector('blockquote');

showNote(blockquote2, "top", "note above");
showNote(blockquote2, "right", "note at the right");
showNote(blockquote2, "bottom", "note below");


// Расположите заметку внутри элемента (абсолютное позиционирование)
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;

        case "top-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "right-in":
            elem.style.width = '150px';
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            break;
    }

}


let blockquote3 = document.querySelector('blockquote');

showNote(blockquote3, "top-in", "note top-in");
showNote(blockquote3, "top-out", "note top-out");
showNote(blockquote3, "right-out", "note right-out");
showNote(blockquote3, "bottom-in", "note bottom-in");