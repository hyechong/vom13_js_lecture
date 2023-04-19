// 동기 처리방식 : https://kkhcode.tistory.com/6

function displayA() {
  console.log('A');
}

function displayB() {
  console.log('B');
}

function displayC() {
  console.log('C');
}

//displayA();
//displayB();
//displayC();

// 자바스크립트는 작성 순서대로 결과가 나타나는 인터프리터 언어다. 싱글스레드 언어라고도 한다.
// 어떠한 이유로 중간에 데이터를 받을때 시간이 지연된다면, 지연된 이후의 결과는 늦게 리턴된다. 이를 동기(sync)방식이라 한다.
// 이때 지연된 데이터와 상관 없이 먼저 받은 데이터를 리턴하고, 지연된 데이터를 나중에 리턴하는데 이를 비동기(async) 방식이라 한다.
function displayD() {
  setTimeout(() => console.log('D'), 1000); // setTimeout은 비동기 함수다.
}

function displayE() {
  console.log('E');
}

// displayD();
// displayE();

// 하지만 어떠한 경우에는 위의 순서가 지켜져야 할 때도 있다.(예 : 아이디를 체크한 이후 비밀번호를 체크 등) 이때는 displayD()의 파라미터로 displayE()를 실행시키면 된다.
function displayD(callback) {
  setTimeout(() => {
    console.log('D');
    callback();
  }, 1000);
}

function displayE() {
  console.log('E');
}

//displayD(displayE);

// 이렇게 함수의 파라미터로 또 다른 함수를 실행시키면 파라미터로 사용된 함수는 파라미터를 가지고 있는 함수 실행 이후에 실행된다.
// 함수의 파라미터로 함수를 사용할 때 이를 콜백(callback) 함수라 한다.
function checkLog(id, callback) {
  console.log(`${id} : 아이디 체크`);
  setTimeout(() => {
    callback('1234');
  }, 2000);
}

function checkPwd(pwd) {
  console.log(`${pwd} : 비밀번호 체크`);
}

//checkLog('toto', checkPwd);

// 하지만 로직이 복잡해지고 받아야 할 순차 데이터가 많아지면 하나의 함수에 너무 많은 중첩 함수를 작성해야 하는데 이를 콜백 지옥이라 한다.
function displayLetter() {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.table('C');
      setTimeout(() => {
        console.log('D');
      }, 1000);
    }, 1000);
  }, 1000);
}

displayLetter();
