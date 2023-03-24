// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지닌다. 이를 타입이라 한다.
// 원시 타입 : string, number, boolean, undefined, null
// 객체 타입 : function, array, object

// 1. 문자열(string)
// '' 안에 작성되는 원시 값은 문자로 인식되고 이들의 나열이 문자열이다.
const string = 'hello';
// console.log(string);

//타입은 typeof() 메서드로 체크
// console.log(typeof string);

// 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표가 들어간다면 홀과 겹을 다르게 사용해야 한다.
const string1 = "I'm hyechong";
// console.log(string1);

// 2. 탬플릿 리터럴
// - 변수와 문자열을 함께 사용할 때 es6 버전 부터는 + 기호 없이 편리하게 조합할 수 있는 방식을 제공한다. 이를 템플릿 리터릴 이라 한다
// - 전체 문자열을 백틱으로 감싸고, 변수 부분을 ${} 안에 작성한다
const className = 'header';
// const tag = "<div class='" + className + "'></div>";
const tag = `<div class="${className}"></div>`;
// console.log(tag);

// 3. 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용한다. 숫자 형태이므로 연산이 가능하다.
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수 있다.
// 따라서 소수를 작성해도 숫자 타입으로 지정된다.
const a = 0.5;
// console.log(a);

// 숫자를 작성할 때 따옴표 안에 작성하면 문자열로 변형된다.
// 숫자형 문자를 숫자형으로 변경할때 Number() 메서드를 사용한다. 이와 같이 변경하는 것을 명시적 형변환이라 한다.
const b = '2';
// console.log(typeof b);
const c = Number(b);
// console.log(typeof c);
// console.log(c);

// 숫자형 문자는 + 의 경우 문자 연산이 되지만 나머지 연산은 엔진이 숫자로 임의 변경하여 연산한다. 이를 암묵적 형변환이라 한다.
// 암묵적 형변환된 데이터는 숫자형으로 변경된다.
const d = 3;
const e = '4';
// console.log(d + e);
// console.log(e - d);

// 4. NaN
// 자바스크립트 엔진이 숫자형으로 인식하는 것 중에 특이한 것은 NaN이다. 이는 Not a Number의 이니셜로 '숫자가 아님'이지만 숫자다.
const f = 'a' * 3;
// console.log(f);

// 5. Boolean
// 컴퓨터는 모든 데이터를 0과 1로 읽는다. 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 한다.
// George Boole이라는 수학자가 고안해서 붙여진 이름이다.
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용한다.(로그인 했을때와 아닐때 등)
const g = true;
// console.log(g);

const h = 5;
//console.log(h > 6);

// const age = prompt('나이를 입력해 주세요');
// if (age > 20) {
//   document.write('술 마실 수 있음');
// } else {
//   document.write('술 마실 수 없음');
// }

// 6. undefined
// undefined 는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당된다.
//undefined는 값이 없으므로 특정 기능이 작동하지 않는 결과를 가져올 수 있다. 하지만 오류는 아니어서 런타임은 진행된다.
var i = 9;
console.log(i);

// undefined는 false, 0, 빈값과는 다르다.
console.log(undefined == false);
console.log(undefined == 0);
console.log(undefined == '');

// 7. null
// 값을 의도적으로 비울때 null을 대입한다.
// undefined와 같이 비어있는 값이라는 의미.
console.log(undefined == null);

// 하지만 데이터의 타입은 undefined와 다르다.
console.log(typeof undefined == typeof null);
console.log(1 == '1');
console.log(1 === '1'); //값은 같지만 타입은 다름

// null 역시 false, 0, 빈값과는 다르다.
console.log(null == false);
console.log(null == 0);
console.log(null == '');
