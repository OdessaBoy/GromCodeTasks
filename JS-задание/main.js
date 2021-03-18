//Минимальный элемент массива
function getMin(array) {
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
let minResult = getMin([2, 4, 5, 9, 4, 1, 16]);
document.querySelector('.min_number').innerHTML = 'Минимальный элемент массива:' + minResult;

//Парные числа из массива
function getEven(arr1) {
  let num = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      num.push(arr1[i]);
    }
  }
  return num;
}
let evenResult = getEven([2, 4, 5, 7, 9, 4, 1, 16]);
document.querySelector('.even_number').innerHTML = 'Парные числа из массива:' + evenResult;


// Функция searchByName
function searchByName(name) {
  let myName = [];

  let myNameArr = [
    { name: 'Johnny Walker Red Label', birthDate: '1840-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' },
    { name: 'Viktor', birthDate: '1998-11-09' },
    { name: 'Johnny Walker Black Label', birthDate: '10-05-1820' },
  ];

  for (key in myNameArr) {
    // if (myNameArr[key].name == ) {
    //   console.log(myNameArr[key]);
  }
}
searchByName();
// Последний пункт не доделал .Честно говоря не до конца понял 