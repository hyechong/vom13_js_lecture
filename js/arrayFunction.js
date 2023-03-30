// 일반적으로 배열은 for문으로 접근한다. 하지만 최근에는 forEach, map, filter 등의 메서드를 활용해 배열에 접근한다.

// 1. forEach
// - forEach 메서드는 배열이 가지고 있는 요소를 콜백 함수의 파라미터를 사용해서 호출한다.
// - signiture : array.forEach((value, index, array) => {})
// - 콜백 함수의 파라미터로 3가지 값을 가져올 수 있다. 하지만 마지막 파라미터인 배열 반환은 잘 사용되지 않는다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((v, i, a) => {
  // console.log(v);
  // console.log(i);
  // console.log(a);
});

// - 배열의 모든 요소 합
const numbers = [3, 6, 9, 12, 7, 4, 6, 5];

let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

numbers.forEach((v) => {
  sum += v;
}); //return 안됨
console.log(sum);

// 2. map
// - map 메서드는 콜백 함수의 파라미터로 배열의 요소를 반환하는 것을 forEach와 같지만 반환한 요소를 새로운 배열에 담아 return할 수 있다는 점이 다르다.
// - DOM요소 선택 시 map은 사용할 수 없으나, Array.from()을 사용할 수는 있다. 하지만 forEach로 쓰는 것이 더 효율적이다.
const newArr = numbers.map((v, i, a) => {
  // console.log(v);
  // console.log(i);
  // console.log(a);
  return v * 2;
});
console.log(numbers);
console.log(newArr); //return으로 새로운 배열 만들기 가능

const navs = document.querySelectorAll('.navi li');
// console.log(navs);
navs.forEach((nav, index) => {
  console.log(nav);
  nav.classList.add('cl' + index);
});
// navs.map((nav) => {
//   console.log(nav);
// });//error

const navLists = ['Home', 'About', 'Product', 'Contact'];
navLists.map((nav) => {
  console.log(nav);
});

// 3. filter
// - filter 메서드는 콜백 함수에서 리턴되는 값을 특정 조건에 대입하고 true인 요소만 모아 새로운 배열을 만든다.
// - filter 메서드는 map과 같이 return 키워드로 값을 반환할 수 있다.
const even = numbers.filter((v, i, a) => {
  //return v % 2 === 0; // 짝수
  return v < 10; // 10 보다 작은 값
});
console.log(even);

// 4. reduce << 프론트에서는 잘 사용 안하기 때문에 천천히 이해해도 됨
// - signiture : array.reduce((accumulator, currentValue, currentIndex, arry) => {})

const reduceArr = [0, 1, 2, 3, 4];
const reduceNumber = reduceArr.reduce((accumulator, currentValue) => {
  // console.log(accumulator);
  // 0까지의 누적한 합산값 0
  // 0, 1까지의 누적 합산값 1
  // 0, 1, 2까지의 누적 합산값 3
  // 0, 1, 2, 3까지의 누적 합산값 6
  // 0, 1, 2, 3, 4까지의 누적 합산값 10

  console.log(currentValue);
  // 두번째 값부터 표시된다.
  // 0, 1까지의 현재값 1
  // 0, 1, 2까지의 현재값 2
  // 0, 1, 2, 3까지의 현재값 3
  // 0, 1, 2, 3, 4까지의 현재값 4
  return accumulator + currentValue;
});

console.log(reduceNumber);
