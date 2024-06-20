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

const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

interface ID {
  id: number,
}

const enum riseOrDown {
  toRise = "toRise",
  toDown = "toDown",
}

function getSortedArr<T extends ID[]>(arr: T, sortType: riseOrDown = riseOrDown.toRise): ID[] {
  return arr.sort((a, b) => {
    switch(sortType) {
      case riseOrDown.toRise: 
        return a.id - b.id;
      case riseOrDown.toDown:
        return b.id - a.id;
    }
  })
}

console.log(getSortedArr(data, riseOrDown.toRise)); // сортировка по возрастанию id
console.log(getSortedArr(data, riseOrDown.toDown)); // сортировка по убыванию id