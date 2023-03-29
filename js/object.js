const a = () => {};
const b = [];
const c = {};
//console.log(typeof a); // function
//console.log(typeof b); // object
//console.log(typeof c); // object(객체)
// 함수() => {};와 배열[];도 타입은 객체이지만 실제 사용하는 로직상의 객체는 {};다

// 객체(object)란 키와 값으로 구성된 속성 묶음을 말한다. 배열도 객체의 한 종류이지만 배열을 구성하는 데이터 단위는 '요소'라 하고 객체를 구성하는 데이터 단위는 '속성(property)'라 한다.
// 객체는 배열과 비슷하지만 배열보다 데이터를 더 정교하게 다룰 수 있고, 특히 공공데이터와 같이 외부로 데이터를 제공할 때 표준으로 객체 형태(JSON)를 사용하고 있다.

// 배열의 타입을 체크하면 object 타입으로 표시된다

// signiture : {key1 : value1, key2 : value2...}
const car = {
  maker: 'hyundae',
  model: 'avante',
  color: 'white',
  image: 'http://www.sample.com/123.jpg',
  price: {
    소형: '10000',
    중형: '20000',
    대형: '30000',
  },
};

//console.log(car.model); //avante
//console.log(car.price.대형); //30000
//console.log(car.price);

// 1. 객체의 접근
// - []에 키를 문자열 인덱스로 작성하여 접근할 수 있다.
//console.log(car['maker']); // 잘 사용하지 않음.
// - '객체의 이름.키' 형식으로 접근할 수 있다.
//console.log(car.maker); // {소형: '10000', 중형: '20000', 대형: '30000'}

// 2. 객체의 속성으로는 원시 데이터 뿐만 아니라 함수도 사용할 수 있다.
// - 객체 내부에 정의된 함수를 '메서드(method)'라 한다.
// 3. 객체 내부의 속성은 'this' 키워드를 사용하여 접근할 수 있다.
// console.log(this);
const pet = {
  name: '토토',
  eat: function () {
    console.log(this.name + '는 고구마를 먹습니다');
  },
};

pet.eat();

// 4. 객체는 동적으로 추가 및 제거할 수 있다.
// - 객체 속성의 추가
const myInfo = {};
myInfo.name = 'hyechong';
myInfo.age = '27';
myInfo.adr = '용인';
//console.log(myInfo);

delete myInfo.adr;
//console.log(myInfo);

// 5. 내장 객체(built-in object)
// - Date 객체 : 현재 날짜 정보를 반환한다.
// - 시계 만들기
// function clock() {
//   const date = new Date();
//   const hr = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();

//   console.log(`${hr}시 : ${min}분 : ${sec}초`);
// }
// setInterval(clock, 1000);

// function displayTime() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   console.log(`${hours}시 : ${minutes}분 : ${seconds}초`);
// }
// setInterval(displayTime, 1000);

setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  //console.log(`${hours}시 : ${minutes}분 : ${seconds}초`);
}, 1000);

// - trim() : 문자열의 앞뒤 공백 및 개행을 제거한다.
const str = ' test ';
console.log(':' + str + ':');
const trStr = str.trim();
console.log(':' + trStr + ':');

// - split() : 문자열에 대해 매개변수를 기준으로 잘라 배열을 만든다

const url = 'http://www.abc.com?q=4';
const cutUrl = url.split('=');
console.log(cutUrl);

// - Math 객체 : 수학과 관련된 다양한 연산을 할 수 있도록 자바스크립트에서는 Math객체를 제공하며, 여기에 포함된 메서드를 활용한다.

// - Math.random() : 0과 1 사이의 값을 난수로 반환한다.
console.log(Math.floor(Math.random() * 20).toFixed(2)); //소수점 둘째자리까지 표현되는 0~20 사이의 정수값을 난수로 반환

// - Math.floor() : 소수점을 삭제한다.
// - 이때 random() 메서드에서 반환되는 값은 0과 1 사이의 값이므로 소수점 이하를 제하면 항상 0이 된다. 따라서 원하는 범위값을 반환하기 위해 적절한 수를 곱해준다.
// - 예를 들어 1 ~ 10 사이의 값을 반환하기 위해서는 10을 곱하면 되고, 1 ~ 100 까지의 값을 반환하기 위해서는 100을 곱하면 된다.

// - Math 객체에서 제공하는 메서드는 이 외에도 상당히 많다. : http://www.tcpschool.com/javascript/js_standard_math

// - 이 외에도 자바스크립트에서 제공하는 메서드는 상당히 많다. 향후 실습을 하면서 하나씩 필요한 메서드를 찾아서 검색할 것이다.
