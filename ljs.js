// number
// - не больше 2**53 - 1 и не менее -(2**53 - 1)
Infinity // 1/0
-Infinity // -1/0
NaN // вычислительная ошибка "asd"/2

// bigint
// - больше или меньше чем number, в конце добавляем n
 var bigInt = 1234567890123456789012345678901234567890n

 // string
var a = "str"
a = 'str'
a = `${a}`

// boolean

true
false
(1 > 2)

// null
// - специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

null

// undefined
// - означает, что «значение не было присвоено».
// - используется для проверок, была ли переменная назначена

// symbol
// - для уникальных идентификаторов

// object
// - для более сложных структур данных





// Arrays
Array.prototype.push // добавить в конец
Array.prototype.pop // удалить с конца
Array.prototype.unshift // добавить в начало
Array.prototype.shift // удалить из начала

// связка push pop быстрее

const arr = [1,2,3]

// старый способ
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// новый способ, нет индексов
for(let el of arr) {
    console.log(el)
}
// т.к. массив - объект, можно и так.
// но так делать не рекомендуется, т.к. в массиве могут лежать не только цифровые свойства
// н-р, length
// работает медленне, т.к. предназначен для объектов, а не конкретно для массивов
for(let key in arr) {
    console.log(arr[key])
}

arr.length = 1 // arr = [1], остальные значения восстановлению не подлежат

new Array("Яблоко", "Груша", "и тд") // ["Яблоко", "Груша", "и тд"]
new Array(2) // 2xempty length = 2; все значения undefined

// вместо delete использовать splice(index[, deleteCount, elem1, ..., elemN])
arr.splice(0,1)

// удалить и заменить
arr.splice(0,1,"new 1",'new2','new N')

// взять элементы от до (не включая)
arr.slice(0,2) // [1,2]

// создать копию массива
arr.slice()

// объединить массивы
var arr2 = [4,5,6]
arr.concat(arr2) // [1,2,3,4,5,6]

// перебор массива
// return игнорируется и отбрасывается
arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});


// поиск в массиве
// ищет item, начиная с индекса from, и возвращает индекс,
// на котором был найден искомый элемент, в противном случае -1.
arr.indexOf(item, from)

// то же самое, но ищет справа налево.
arr.lastIndexOf(item, from)

// ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
arr.includes(item, from)

arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});

// преобразование массива
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});

// сортировка
// По умолчанию элементы сортируются как строки.
var arr3 = [33,3,11,22,2,1];
arr3.sort() // [1,11,2,22,3,33]

arr3.sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
})
arr3.sort( (a, b) => a - b ); // тоже самое
// [1,2,3,11,22,33]

// перевернуть массив
arr.reverse() // [3,2,1]


// операция над всем массивом
arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial])
/*
previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.
*/
arr.refuceRight(...) // то же, только справа налево

// как понять что объект это массив?
Array.isArray(arr) // true

// передача this в массив
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ... кроме sort
// thisArg - это необязательный последний аргумент
// Значение параметра thisArg становится this для func.

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);













// Дата и время

let now = new Date();
alert( now ); // показывает текущие дату и время



// new Date(milliseconds) — таймстамп (англ. timestamp)
// количество миллисекунд, прошедших с начала 1970 года

// чтобы получить таймстамп, используем date.getTime()

// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );


// дата по строке new Date(datestring)
let date = new Date("2017-01-26");
alert(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)


/*
new Date(year, month, date, hours, minutes, seconds, ms)

Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.

- year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
- month начинается с 0 (январь) по 11 (декабрь).
- date день месяца. Если параметр не задан, то принимается значение 1.
Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

*/
new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0

// Максимальная точность – 1 мс (до 1/1000 секунды):
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567


// Получение компонентов из даты

// Все методы возвращают значения в соответствии с местным часовым поясом.

date.getFullYear() // получить год 4 цифры 2011

date.getMonth() // Получить месяц, от 0 до 11

date.getDate() //  день месяца, от 1 до 31, что несколько противоречит названию метода.


date.getHours() // получить часы
date.getMinutes() // получить минуты
date.getSeconds() // получить секунды
date.getMilliseconds() // получить миллисекунды

date.getDay() // день недели от 0 (воскресенье) до 6 (суббота). 
// в JavaScript начало недели приходится на воскресенье.


// если нужно UTC+0
date.getUTCFullYear()
date.getUTCMonth()
date.getUTCDay()

date.getTime() // возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0

date.getTimezoneOffset()
// Возвращает разницу в минутах между местным часовым поясом и UTC:

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
alert( new Date().getTimezoneOffset() );





// Установка компонентов даты

// Следующие методы позволяют установить компоненты даты и времени:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) // (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
// У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().



// Автоисправление даты
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // 1st Feb 2013!


// вместо getTime можно использовать приведение к числу
+date 




Date.now()
// возвращает текущую метку времени
// то же что и new Date().getTime()
// но метод не создаёт промежуточный объект Date. Так что этот способ работает быстрее и не нагружает сборщик мусора.



// Разбор строки с датой
Date.parse(str)
// считывает дату из строки возвращает таймстамп
// Если формат неправильный, возвращается NaN
/*
формат должен быть таким YYYY-MM-DDTHH:mm:ss.sssZ, YYYY-MM-DD или YYYY-MM, или даже YYYY

YYYY-MM-DD – это дата: год-месяц-день.
Символ "T" используется в качестве разделителя.
HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
*/


toDateString()
// возвращает часть, содержащую только дату объекта Date в виде человеко-читаемой строки на американском английском.
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // напечатает Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // напечатает Wed Jul 28 1993






















// Регулярки Regex




/*
. - любой одиночный символ
[ ] - любой из них, диапазоны
$ - конец строки
^ - начало строки
\ - экранирование
\d - любую цифру
\D - все что угодно, кроме цифр
\s - пробелы
\S - все кроме пробелов
\w - буква
\W - все кроме букв
\b - граница слова
\B - не граница

Квантификация
n{4} - искать n подряд 4 раза
n{4,6} - искать n от 4 до 6
* от нуля и выше
+ от 1 и выше
? - нуль или 1 раз

Поиск по строке нескольких значений в рандомном порядке
/(?=.*Jc)(?=.*7s)(?=.*5s)(?=.*As)(?=.*9c)/.test(str);

Кроме последних
/\B[aeiou]\B/gi

*/

















