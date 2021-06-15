# Проход по элементам массива в JavaScript

## for
> Старый, но рабочий способ

> из плюсов можно выделить возможность сделать return в любой итерации
```
const arr = [1,2,3];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// Результат:
// 1
// 2
// 3
```
***
## for...of
> Новый способ:

```
for(let el of arr) {
    console.log(el)
}
```

> Плюс: коротко и понятно

> Минус: нет быстрого доступа к ключам

***
## for...in
```
for(let key in arr) {
    console.log(key) // выводит ключи... и не только(!)
}
```
> Т.к. массив - объект, можно использовать этот способ.

> Так делать не рекомендуется, т.к. в массиве могут лежать не только цифровые свойства, н-р, length

> К тому же такой способ работает медленне, т.к. предназначен для объектов, а не конкретно для массивов