// 함수는 특정한 기능을 수행하도록 정의된 코드의 집합이다.
// 기능의 모듈화 : 특정 기능을 하나로 정의하여 재사용
// 함수는 정의 함수와 기정의 함수로 나뉜다.

// 1. 함수의 기본 형태(기명함수, 선언함수)
// signiture : function(parameter){logics};
// - 함수는 먼저 특정 기능 알고리즘을 정의하고(정의부), 정의된 함수를 호출(호출부)하는 형태로 사용한다.
// - 함수의 형태 : https://velog.io/@inyong_pang/JavaScript-Function%ED%95%A8%EC%88%98-7wk400kzxh
// - 함수는 기본 형태, 함수 내부로 전달되는 파라미터, 내부에 정의된 값을 밖으로 내보내는 return으로 구성된다.

//정의부
function printNm(name) {
  console.log(name);
}

//호출부
printNm('혜지');

function sum(a, b) {
  // 형식 파라미터
  //console.log(a + b);
  return a + b; // 안에 있는 값을 밖으로 빼줌
}

console.log(sum(5, 9)); // 실제 파라미터
document.write(sum(6, 2));

// n층짜리 별탑 찍기
function stackTop(a) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
}
stackTop(20);

//누적 합계
function sumNum(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    // console.log(i);
    sum += i;
  }
  return sum;
}
document.write(sumNum(100));

// - 함수의 이름 식별자는 동사 형태로 작성한다 : ex) eventListener, startSlide...
// - parameter(매개변수)는 호출 시 작성한 매개변수를 함수를 정의한 로직 내부에 전달하는 역할을 한다
// - return(반환)은 함수 내부에서 작성한 결과값을 함수블럭 외부로 반환한다.
// - 기본(선언형, 기명) 함수는 호이스팅된다.

// 2. 함수의 역할
// - 반복되는 코드를 한 번만 정의하고 필요 시 호출하여 반복을 피한다
// - 여러 기능을 분리하여 모듈화할 수 있다

// 3. 익명함수
// - 함수를 정의할때 함수의 이름(식별자) 없이 정의하는 형태를 말한다.
// - 이름이 정해지지 않았지만 함수 자체를 변수에 저장했기 때문에 변수 이름이 기명함수의 이름과 같이 사용된다.
// setNoName(); // 익명함수는 호이스팅 되지 않는다.

// 1. 필요없는 전역 변수의 생성을 줄일 수 있다.
// 함수를 생성하면 그 함수는 전역 변수로써 남아있게 되고, 많은 변수의 생성은 전역 스코프를 오염시킬 수 있다.
// 즉시실행함수를 선언하면 내부 변수가 전역으로 저장되지 않기 때문에 전역 스코프의 오염을 줄일 수 있다.

// 2. private한 변수를 만들 수 있다.
// 즉시실행함수는 외부에서 접근 할 수 없는 자체적인 스코프를 가지게된다. 이는 클로저의 사용 목적과도 비슷하며 내부 변수를 외부로부터 private하게 보호 할 수 있다는 장점이 있다.

// - 익명함수 실행 방법 1 : 즉시 실행 함수
(function () {
  console.log('즉시실행함수');
})();

// - 익명함수 실행 방법 2 : 변수 대입
const noNameFunc = function () {
  console.log('변수대입익명함수');
};
noNameFunc();

// - 익명함수는 자체를 사용하는 것보다는 콜백 함수로 실행시키는 경우가 많다. 콜백함수는 asyncAwaite.js에서 더 다룰 것.

// 4. 매개변수의 개수
// - 매개변수는 기본적으로 선언시 개수와 정의시 개수가 같은게 일반적이다.
// - 하지만 개수가 다르더라도 오류가 나지는 않지만 남는 매개변수는 undefined로 할당된다.
function overParams(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

overParams(3, 5); //3,5,undefined

// - 반대로 선언된 매개변수가 더 많을 경우 마지막 매개변수는 무시된다
//overParams(3, 5, 7, 9); //3,5,7만 찍히고 9는 무시됨

// 5. 가변 매개변수 함수
// - 호출 시 매개변수의 개수가 고정되어 있지 않을 경우 사용할 수 있는 방법이 나머지 매개변수(rest parameter)라 한다.
// - signiture : function fName(...rest parameter) {}
// - 나머지 매개변수는 배열 형태로 리턴된다.(따라서 반복문으로 활용 가능)
function restParams(...a) {
  return a;
}
console.log(restParams(1, 2, 3, 4, 5));

// - 최솟값 찾기
function min(...items) {
  //console.log(items);
  //1. 배열값 반복문으로 추출
  let output = items[0];
  for (let i = 0; i < items.length; i++) {
    //console.log(items[i]);
    if (output > items[i]) {
      output = items[i];
    }
    //console.log(output);
  }
  return output;
}

// 호출시 4, 3, 5, 7
// 4 > 4(false), 4 > 3(true), 4 > 5(false), 4 > 7(false), 4 > 2(true);

console.log(min(4, 3, 5, 7, 2));

// 6. 콜백 함수
// 함수는 변수에 저장할 수 있는 자료형이다. 따라서 함수 자체를 다른 함수의 매개변수로 전달할 수 있는데, 이를 콜백함수라 한다.
// 콜백 함수는 이벤트를 실행하는 addEventListener 또는 배열을 다루는 forEach, map, filter 등에 활용되는 중요한 방식이다(DOM, ArrayFunction)
// 또한 promise와 같은 비동기 메서드에서도 활용된다
function callFunc(callback) {
  callback(7);
}

callFunc(function (a) {
  console.log(a);
});

// 7. 화살표 함수
// - 화살표 함수는 es6부터 제공되는 함수 작성 방식이다.
function general(a) {
  console.log('일반함수');
  console.log(a);
}

general(5);

const arrFunc = (b) => {
  console.log('화살표 함수');
  console.log(b);
}; //호이스팅안됨

arrFunc(4);

// - 일반 함수 작성 방식과 차이점은 this 키워드로 접근되는 대상이 다르다. 참조 : https://velog.io/@padoling/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%99%80-this-%EB%B0%94%EC%9D%B8%EB%94%A9
// - this와 관련된 내용은 초반에는 다소 어려운 내용이다. 따라서 DOM 관련 문서 객체 선택 부분에서 조금 다루고, 이후 함수와 관련한 내용이 익숙해진 후 살펴보면 된다.
// - 그 외 화살표 함수는 일반 함수 작성 방식보다 간편하고, 최근 트랜드에 맞춰가기 위해 사용하는 것이 일반적이다. 필수 사용은 아니다.
// - signiture : (parameters) => {}

// - 일반 함수와 마찬가지로 익명처리 될 때는 변수 식별자에 대입하여 표현한다.

// - 다른 함수의 콜백 함수로 사용할 때는 변수 식별자에 대입하지 않아도 된다.
abc.addEventListner('click', function () {});
abc.addEventListner('click', () => {});

// - 일반적으로 콜백 함수는 초기에 직접 만드는 경우보다 제공되는 메서드에서 사용되는 경우가 많다.(forEach, map, filter, promise, setTimeout, setInterval...)
setInterval(function () {}, 1000);
setInterval(() => {}, 1000);

// - 파라미터가 하나만 존재하는 경우 괄호 생략 가능하다.
//const sample1 = a => {};

// - 화살표 함수 내부에 return만 존재하면 {}를 제외할 수 있다.
const sample2 = (a) => {
  return a;
};
const sample3 = (a) => a;
