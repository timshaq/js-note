# Конструкторы, создание объектов через "new"
## Функция конструктор
```
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false
```
> Если конструктор не принимает аргументы, можно вызывать его без скобок
```
let user = new User;
```

## Функция конструктор с return
return с объектом возвращает объект, в любом другом случае конструктор вернёт this
```
function BigUser() {

  this.name = "Вася";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект
```
```
function SmallUser() {

  this.name = "Вася";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // Вася
```

## Методы в конструкторе
```
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася
```

