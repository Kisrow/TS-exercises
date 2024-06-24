"use strict";
/*

Задание:

Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию

Исходные данные:

const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

*/
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function getSortedArr(arr, sortType = "toRise" /* riseOrDown.toRise */) {
    return arr.sort((a, b) => {
        switch (sortType) {
            case "toRise" /* riseOrDown.toRise */:
                return a.id - b.id;
            case "toDown" /* riseOrDown.toDown */:
                return b.id - a.id;
        }
    });
}
console.log(getSortedArr(data, "toRise" /* riseOrDown.toRise */)); // сортировка по возрастанию id
console.log(getSortedArr(data, "toDown" /* riseOrDown.toDown */)); // сортировка по убыванию id
