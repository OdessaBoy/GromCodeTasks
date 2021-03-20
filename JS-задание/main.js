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
  let evenResult = arr1.filter(function (elem) {
    return elem % 2 == 0;
  });
  document.querySelector('.even_number').innerHTML = 'Парные числа из массива:' + evenResult;
}
getEven([2, 4, 5, 7, 9, 4, 1, 16]);

// Функция searchByName
function searchByName(myName) {
  let myNameArr = [
    { name: 'Johnny Walker', birthDate: '1840-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' },
    { name: 'Viktor', birthDate: '1998-11-09' },
    { name: 'Johnny Walker', birthDate: '10-05-1820' },
  ];
  let nameFilter = myNameArr.filter(function (e) {
    return e.name == myName;
  });
  console.log(nameFilter);
}
searchByName('Johnny Walker');
