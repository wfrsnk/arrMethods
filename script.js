// splice

let arr = [1,5,6,3,7,4];
console.log('SPLICE', arr);
arr.splice (6, 0, 'newElement'); // добавляем новый элемент 
let remove = arr.splice(0, 2); // удаление элементов, 
                               //возвращает массив из удаленных элементов
console.log(arr);
console.log(remove);

//slice

let arr2 = [1,5,6,3,7,4]; 
console.log('SLICE', arr2)
let a = arr2.slice(1,3);  //возвращаем вырезанные элементы 
console.log(a);

//map

let arr3 = [1,5,6,3,7,4]; 
let result = arr3.map(item => item**2); //возвращаем массив с квадратами элементов массива arr3
console.log('MAP', arr3);
console.log(result);


//for

console.log('FOR');
let arr4 = [1,5,6,3,7,4]; 
for (let i=0; i<arr4.length; i++){  //проходим по массиву и выводим элементы
  console.log(arr4[i]); 
}

//forEach

console.log('forEach');
let arr5 = [1,5,6,3,7,4]; 
arr5.forEach(element => console.log (element)); //проходим по массиву и выводим элементы

//filter
console.log('FILTER');
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
console.log(users);
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

//reduce
console.log('REDUCE');
let arr6 = [1,5,6,3,7,4]; 
console.log(arr6);
let f = arr6.reduce((sum, current) => sum + current, 0); //считаем сумм элементов массива
console.log(f);


//sort

console.log('SORT');
function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a === b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}
let arr7 = [1,5,6,3,7,4]; 
console.log(arr7);
let arr7sort = arr7.sort(compare);
console.log(arr7sort);

//some & every

console.log('SOME & EVERY');
let arr8 = [1,5,6,3,7,4]; 
console.log(arr8);
let flagSome = arr8.some(element => element < 5); //проверяем есть ли элемент в массиве меньше 5
console.log(flagSome);
let flagEvery = arr8.every(element => element < 5); //проверяемвсе ли элементы массива меньше 5
console.log(flagEvery);

