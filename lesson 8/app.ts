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

interface IData {
  group: number,
  name: string,
}

const data: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface ISortedObject<T> {
  [key:string]: T[];
}

type key = string | number | symbol;

function sortArrByObjectKey<T extends Record<key, any>>(arr:T[], key: keyof T): ISortedObject<T> {
  return arr.reduce<ISortedObject<T>>((obj, item) => {
    if(!obj[item[key]]) {
      obj[item[key]] = [item]
    } else {
      obj[item[key]].push(item);
    }
    return obj
  }, {})
}

console.log(sortArrByObjectKey(data,'group'));