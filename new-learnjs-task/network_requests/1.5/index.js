// Почему нам нужен Origin?
/* 1. Origin нужен, потому что иногда Referer отсутствует. Например, когда идет запрос через fetch HTTP-страницу с HTTPS
     (менее безопасный доступ с более безопасного), то Referer нет.
     
   2. Origin нужен обязательно т.к. он содержит источник без пути,
      если браузер не увидит разрешающего заголовка, то доступ будет запрещен с ошибкой.
      Referer не является необязательным HTTP-заголовком и поэтому он не обязателен. */