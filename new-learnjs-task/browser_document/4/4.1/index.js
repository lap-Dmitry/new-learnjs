// Добавьте пункт к выпадающему списку
let selectedOption = genres.options[genres.selectedIndex];

alert( selectedOption.value );

alert( selectedOption.text );

newOption = new Option("Классика", "classic", true, true);
genres.append(newOption);
