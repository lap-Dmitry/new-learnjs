// Получите атрибут
let elem = document.querySelector('[data-widget-name]');
// alert(elem.getAttribute('data-widget-name'));


// Сделайте внешние ссылки оранжевыми
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');
