// 콜백 지옥을 해결하기 위한 첫번째 방법은 promise 문법을 사용하는 것이다.
// promise는 2015년 업데이트에서 도입된 문법이다.

// promise는 데이터 처리에 성공했을때 실행할 콜백 함수와 성공하지 않았을 때 실행할 콜백 함수를 미리 정하는(promise) 것이다.
// new Promise(resolve, reject) : 파라미트를 success, fail로 사용하기도 한다.

// 1. 데이터를 받았을 때 어떻게 처리하겠다는 내용을 먼저 정의한다
let d = true;
const getData = new Promise((resolve, reject) => {
  if (d) {
    resolve('데이터 수신 성공~!^^');
  } else {
    reject('데이터 수신 실패...ㅠ');
  }
});

// 2. 정의된 내용을 실행한다. 이때 사용하는 키워드는 then과 catch다.
// getData
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('완-료!'));

// console.log(getData); // reject : rejected, resolve : fullfilled, 정의되지 않은 프로미스 : pending

//3. 콜백 함수가 여러개여서 함수 중첩이 많아질 경우(콜백지옥) 프로미스 체이닝을 사용한다.
// function step1(cb) {}

console.log('------ callback hell ------');

// const step1 = (cb) => {
//   setTimeout(() => {
//     console.log('print step1');
//     cb();
//   }, 1000);
// };

// const step2 = (cb) => {
//   setTimeout(() => {
//     console.log('print step2');
//     cb();
//   }, 1000);
// };

// const step3 = (cb) => {
//   setTimeout(() => {
//     console.log('print step3');
//     cb();
//   }, 1000);
// };

// console.log('print steps ready!');

// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log('print complete!!');
//     });
//   });
// });

console.log('------ promise chaning ------');

// console.log('print steps ready!');
const printReady = () => {
  return new Promise((resolve, reject) => {
    resolve('print steps ready!');
  });
};

const step1 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('print step1');
    }, 1000);
  });
};

const step2 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('print step2');
    }, 1000);
  });
};

const step3 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('print step3');
    }, 1000);
  });
};

printReady()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => console.log('print complete!!'))
  .catch((err) => console.log(err));
