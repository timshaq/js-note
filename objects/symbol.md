# тип данных Symbol

## Символ — уникальный идентификатор
```
let id = Symbol("id");
```
+ id (описание) – это просто метка, которая ни на что не влияет.
+ Символы гарантированно уникальны.
+ Даже если мы создать множество символов с одинаковым описанием, это всё равно будут разные символы
```
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```
>Символы не преобразуются автоматически в строки
(alert принимает практически любое значение, автоматически преобразовывает его в строку)
```
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
```
Если нужно вывести, то:
```
let id = Symbol("id");
alert(id.toString()); // Symbol(id), теперь работает
```
или:
```
let id = Symbol("id");
alert(id.description); // id
```

# «Скрытые» свойства
> Символы позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться и перезаписать их из других частей программы
```
let user = {
  name: "Вася"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // мы можем получить доступ к данным по ключу-символу
```
```
let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};
```
> Символы игнорируются циклом for...in

# Глобальные символы
> Метод .for проверяет глобальный реестр и, при наличии в нём символа с именем key, возвращает его, иначе же создаётся новый символ Symbol(key) и записывается в реестр под ключом key.
```
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
alert( id === idAgain ); // true
```
## Получить имя символа
```
// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```
> метод работает только для глобальных символов
```
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name
```
# Системные символы
> мы можем использовать их, чтобы настраивать различные аспекты поведения объектов

Например:
+ Symbol.hasInstance
+ Symbol.isConcatSpreadable
+ Symbol.iterator
+ Symbol.toPrimitive

Symbol.toPrimitive позволяет описать правила для объекта, согласно которым он будет преобразовываться к примитиву