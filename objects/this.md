# Методы объекта, "this"

```
let user = {
  name: "Джон",
  age: 30
};

user.sayHi = function() {
  alert("Привет!");
};

user.sayHi(); // Привет!
```
сокращенная запись:
```
user.sayHi() {
  alert("Привет!");
};
```

## this в методах

```
let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    // this - это "текущий объект"
    alert(this.name);
  }

};

user.sayHi(); // Джон
```

если вызвать без объекта
```
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```
+ В строгом режиме ("use strict") в таком коде значением this будет являться undefined. Если мы попытаемся получить доступ к name, используя this["name"] – это вызовет ошибку.
+ В нестрогом режиме this будет глобальный объект. Это – исторически сложившееся поведение this, которое исправляется использованием строгого режима.

## У стрелочных функций нет this
