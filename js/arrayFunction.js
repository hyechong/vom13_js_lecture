// 일반적으로 배열은 for문으로 접근한다. 하지만 최근에는 forEach, map, filter 등의 메서드를 활용해 배열에 접근한다.

// 1. forEach
// - forEach 메서드는 배열이 가지고 있는 요소를 콜백 함수의 파라미터를 사용해서 호출한다.
// - signiture : array.forEach((value, index, array) => {})
// - 콜백 함수의 파라미터로 3가지 값을 가져올 수 있다. 하지만 마지막 파라미터인 배열 반환은 잘 사용되지 않는다.

// - 배열의 모든 요소 합

// 2. map
// - map 메서드는 콜백 함수의 파라미터로 배열의 요소를 반환하는 것을 forEach와 같지만 반환한 요소를 새로은 배열에 담아 return할 수 있다는 점이 다르다.

// 3. filter
// - filter 메서드는 콜백 함수에서 리턴되는 값을 특정 조건에 대입하고 true인 요소만 모아 새로운 배열을 만든다.
// - filter 메서드는 map과 같이 return 키워드로 값을 반환할 수 있다.

// 4. reduce << 프론트에서는 잘 사용 안하기 때문에 천천히 이해해도 됨
// - signiture : array.reduce((accumulator, currentValue, currentIndex, arry) => {})
