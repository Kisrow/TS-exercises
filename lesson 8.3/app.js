"use strict";
/*

Задание:

Необходимо написать функцию группировки, которая принимает массив объектов и его ключ,
производит группировку по указанному ключу и возвращает сгруппированный объект.

Пример:

[
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

При группировке по 'group' ---->

{
  '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
  '2': [ { group: 2, name: 'c' } ]
}

*/
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function sortArrByObjectKey(arr, key) {
    return arr.reduce((obj, item) => {
        if (!obj[item[key]]) {
            obj[item[key]] = [item];
        }
        else {
            obj[item[key]].push(item);
        }
        return obj;
    }, {});
}
console.log(sortArrByObjectKey(data, 'group'));
