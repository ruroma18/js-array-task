'use strict';
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const numbersConcat1 = [1, 2, 3];
const numbersConcat2 = [4, 5, 6];
const connectNumbers = numbersConcat1.concat(numbersConcat2);


// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const numbersRev = [1, 2, 3];
const numbersReverse = numbersRev.reverse();

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const numbersPush = [1, 2, 3];
numbersPush.push(4, 5, 6);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const numbersUnshift = [1, 2, 3];
numbersUnshift.unshift(4, 5, 6);


// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const arrayShift = ['js', 'css', 'jq'];
const deleteFirstItem = arrayShift.shift();
console.log(deleteFirstItem);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
const arrayPop = ['js', 'css', 'jq'];
const deleteLastItem = arrayPop.pop();
console.log(deleteLastItem);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arraySlice = [1, 2, 3, 4, 5];
const arrayNewSlice1 = arraySlice.slice(0, 3);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arrayNewSlice2 = arraySlice.slice(-2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arraySplice1 = [1, 2, 3, 4, 5];
arraySplice1.splice(1, 2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arraySplice2 = [1, 2, 3, 4, 5];
const arrayNewSplice2 = arraySplice2.splice(1, 3);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arraySplice3 = [1, 2, 3, 4, 5];
arraySplice3.splice(3, 0, 'a', 'b', 'c');

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arraySplice4 = [1, 2, 3, 4, 5];
arraySplice4.splice(1, 0, 'a', 'b');
arraySplice4.splice(6, 0, 'c');
arraySplice4.splice(8, 0, 'e');


// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arraySort = [3, 4, 1, 2, 7];
const arraySorted = arraySort.sort();

// Дан массив со следующими объектами внутри. 
// Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
const users = [
  { firstName: 'Tes1', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' }];

users.forEach(function addMessage(userItems) {
  console.log(`User ${userItems.firstName} ${userItems.lastName} is ${userItems.gender} and now he is ${userItems.age} years`);
})

// Дан массив со следующими объектами внутри
// Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве 
// свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

const usersMap = [
  { firstName: 'Tes1', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' }];

const usersWithTelephoneNumber = usersMap.map(function (userItem, i, arr) {
  if (userItem) {
    return {...userItem, telephoneNumber: 12345}
  }
})




// Дан массив со следующими объектами внутри
// Создайте новый массив на основании старого массива, в котором будут только те 
// совершеннолетние пользователи, у которых будет определенный пол.

const usersFilter = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefinovich', age: 99 },
  { firstName: 'Null', lastName: 'Nullovich', gender: 'male' }
];

const usersAgeFilter = usersFilter.filter(function (userItem) {
  if (userItem.age >= 18 && userItem.gender) {
    return userItem;
  }
})

// Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. 
// Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.

const numbersFlat = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]]

const numbersNewFlated = numbersFlat.flat(3);
