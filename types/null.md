# null
> специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
```
typeof null // "object"
```
```
null === null; // true
null == null; // true
null == undefined; // true
```
остальное (любое другое) вернет false:
```
null === undefined; // false
null === 0; // false
null == 0; // false
```