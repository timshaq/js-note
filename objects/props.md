# О свойствах
## Обращение к свойства
```
const obj = {
    name: 'Timur',
    surname: 'Shakirov',
    age: '23',
    "favorite code editor": 'VSCode',
};

obj.name; // Timur
obj["favorite code editor"]; // VSCode

const key = 'surname';

obj[key]; // Shkirov
```

## Удаление свойства
```
delete user.age // удалить свойство объекта
```

## Свойство из переменной с таким же названием
```
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
function makeUserShort(name, age) {
  return {
    name,
    age,
  };
}
```

## Ограничений на имена свойств нет (в отличии от переменных)
```
let obj = {
  for: 1,
  let: 2,
  return: 3
};
```

## Все ключи свойств в объекте — строки
```
let obj = {
  0: "Тест" // то же самое что и "0": "Тест"
};

alert( obj["0"] ); // Тест

alert( obj[0] ); // Тест
```

## Оператор in для проверки существования свойства в объекте
```
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует
```

## Цикл for...in

```
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}
```

## Упорядочение свойств
Свойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания

```
let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

решением будет добавить +, чтобы свойства стали не целочисленными
```
let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```
