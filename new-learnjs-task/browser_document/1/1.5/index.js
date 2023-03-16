// Считаем потомков
for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();
    let countLi = li.getElementsByTagName('li').length;
    console.log(title + ": " + countLi)
}


// Что содержит свойство nodeType?
alert(document.body.lastChild.nodeType); // 1


// Тег в комментарии
let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY


// Где в DOM-иерархии "document"?
/*  document - объект класса HTMLDocument,
    document находится между HTMLDocument и Node,
    document наследуется от HTMLDocument */
