// async 예약어는 명령을 비동기적으로 수행할 수 있도록 한다.
// async와 await을 사용하면 promise로 반환된 값을 특정 시점까지 지연시킬 수 있다.
// async가 붙은 함수는 반드시 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환한다.
// await가 연결된 함수는 async 예약어를 가진 함수를 기다린 후 실행된다.

// 1. async 예약어를 사용하면 promise를 반환한다.
// async function sayHello() {
//   console.log('hello');
// }

// sayHello();
// console.log(sayHello()); // promise

// 2. promise를 사용한 문자열 출력
// function setLetter() {
//   let l = 'letter A';
//   return new Promise((res, rej) => {
//     res(l);
//   });
// }

// function printLetter(a) {
//   return new Promise((res, rej) => {
//     res(`print ${a}`);
//   });
// }

// setLetter()
//   .then(printLetter)
//   .then(console.log)
//   .catch((err) => console.log(err));

// 3. 2번 promise에 async 적용
async function setLetter() {
  let l = 'letter A';
  return l; // async에 이미 promise 적용되어있으니 return만 적으면 됨
}

function printLetter(a) {
  return `print ${a}`;
}

// 4. await 사용 : 자바스크립트는 await 키워드를 만나면 프라미스가 처리될 때까지 기다린다.
async function init() {
  const response = await setLetter();
  const result = await printLetter(response);
  console.log(result);
}

// init();

async function cd() {
  console.log('결과 나오기 이전 1');
  const promise = new Promise((res, rej) => {
    setTimeout(() => res('결과 기다리는 중 2'), 2000);
  });
  const result = await promise; // async를 만난 await은 2초간 지연된 결과를 기다린다
  console.log(result);
  console.log('결과 기다린 이후 결과 3');
}

console.log('함수 밖의 결과 4'); // 함수 밖에 있는 (프로미스 적용 안된) 결과가 가장 먼저 출력

cd();

// async, await 키워드는 ajax 데이터의 수신 순서를 정할 때 정교하게 사용되지만, 규모가 크지 않은 경우 생략해도 된다.

// yts api : https://yts.mx/api
