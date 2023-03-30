// DOM 참조 : http://www.tcpschool.com/javascript/js_dom_concept

// DOM은 Document Object Model의 약자로 HTML 문서의 요소를 제어할 수 있도록 자바스크립트에서 제공하는 방식이다.
// HTML 문서는 태그와 노드가 계층 구조로 되어 있고, 상위 계층을 부모, 하위 계층을 자식으로 분류하여 접근할 수 있다.

// 1. 문서 객체 선택
// - document.body(head) : 문서의 body 객체를 선택할 수 있다.
//console.log(document.body);
// const bodyNode = document.body;
// //console.log({ bodyNode });
// //console.dir(bodyNode);

// // - console.log의 경우 선택된 문서 객체를 객체 형식과 태그 형식을 번갈아 보여 준다. 하지만 문서를 제어하는데는 지장이 없다.
// // - 객체 형식만 보고 싶다면 console.dir을 사용하거나 선택된 태그를 {} 에 감싸서 확인하면 된다. 이때 {}를 사용하기 위해서는 변수에 별도 저장하여 참조값을 사용해야 한다.

// // - document.querySelector : 기존에는 아이디, 클래스, 태그를 선택할 때 각각 document.getElementById, getElementsByClass, getElementsByTagName을 사용했다.
// // const header = document.getElementById('header');
// // const navi = document.getElementsByClassName('navi');
// // const lis = document.getElementsByTagName('li');
// const header = document.querySelector('#header');
// const navi = document.querySelector('.navi');
// const lis = document.querySelectorAll('li');
// //console.log(header);
// //console.log(navi);
// //console.log(lis);
// // - es6버전부터 querySelector의 파라미터로 선택하고자 하는 요소의 css선택자 값을 작성하면 된다.

// // - document.querySelectorAll : 아이디의 경우를 제외하고 클래스와 태그는 같은 이름으로 여러개 존재할 수 있다. 이때 같은 이름을 모두 선택할 때 사용한다.

// // - 선택된 문서 객체 요소들은 반복 문법을 사용해서 접근할 수 있다.
// for (let i = 0; i < lis.length; i++) {
//   //console.log(lis[i]);
// }
// // forEach문으로 선택
// lis.forEach((li) => {
//   //console.log(li);
// });

// // - 선택된 문서 객체는 유사배열이며 정확히 배열은 아니다. 따라서 map을 사용하려면 Array.from 메서드를 사용하여 배열로 변환한 후 사용해야 한다.
// //console.log(lis);
// // lis.map((li) => {
// //   console.table(li);
// // });//error
// Array.from(lis).map((li) => {
//   //console.log(li);
// });

// // 2. 텍스트 조작
// // - textContent, innerHTML
// // - textContent 속성은 입력된 문자열을 삽입(Home, About...)하고, innerHTML 속성은 입력된 문자열을 HTML 형식(<li>Home</li>...)으로 삽입한다.
// // - innerHTML은 보안에 취약하므로 insertAdjacentHTML 사용을 권장한다.
// const a = document.querySelector('#a');
// const b = document.querySelector('#b');
// const c = document.querySelector('#c');
// a.textContent = '<h1>insert element to a</h1>';
// b.innerHTML = '<h1>insert element to b</h1>';
// const d = '<h1>insert element to c</h1>';
// c.insertAdjacentHTML('afterbegin', d);

// // el.insertAdjacentHTML('beforebegin', '<span>A-</span>');
// // 타켓 요소 전(형제레벨)에 생성- 시작 태그의 앞(형제 레벨로)

// // el.insertAdjacentHTML('afterbegin', '<span>B-</span>');
// // 타켓 요소 다음(자식요소)에 생성 - 시작 태그의 뒤(자식 요소로)

// // el.insertAdjacentHTML('beforeend','<span>-D</span>');
// // 타켓 요소 '끝나는 태그' 바로 직전(자식요소로)에 요소를 생성 - '종료 태그' 앞(자식 요소로)

// // el.insertAdjacentHTML('afterend','<span>-E</span>');
// // 타켓 요소의 '끝나는 태그' 바로 다음(형제레벨)에 요소를 생성 - '종료 태그' 뒤(형제 레벨로)

// // - innerText 속성을 사용한 경우도 있는데, 이는 과거에 사용되었던 텍스트 입력 방식이었지만 최근에는 textContent를 사용하고 있다.

// // 3. 속성 조작
// // - setAttribute(name, value) : 특정 속성에 값을 지정한다.
// // - getAttribute(name) : 특정 속성을 조회한다.
// a.setAttribute('class', 'change');
// //console.log(a.getAttribute('class'));

// - 클릭하여 사진 바꾸기
// 1. 요소 선택
const btns = document.querySelectorAll('.btn');
const img = document.querySelector('img');
//console.log(btns);

// 6. 함수정의(분리)
const changImage = (i) => {
  console.log(i);
  // 3. 클릭한 요소의 id값을 저장
  const thisAttr = btns[i].getAttribute('id');
  const src = `${thisAttr}.jpg`;
  //console.log(thisAttr);
  // 4. img의 src를 변수화하여 src 속성값 변경
  img.setAttribute('src', src);
};

// 2. 반복 버튼 요소 반복문으로 분리
btns.forEach((btn, idx) => {
  console.log(btn);
  btn.addEventListener('click', () => changImage(idx));
  // btn.addEventListener('click', function () {
  //   const thisAttr = this.getAttribute('id');
  //   const src = `${thisAttr}.jpg`;
  //   //console.log(thisAttr);
  //   img.setAttribute('src', src);
  // });
});

// 3. 클릭한 요소의 id값을 저장
//const thisAttr = this.getAttribute('id');
//const src = `${thisAttr}.jpg`;

// 4. img의 src를 변수화하여 src 속성값 변경
//img.setAttribute('src',src);

// 5. 버튼 클릭 시 함수 적용
//btns.forEach((btn, idx) => {
//console.log(btn);
//btn.addEventListener('click', () => changImage(idx));

// 4. 스타일 조작
// - 자바스크립트를 이용하여 스타일을 변경할 때 값은 따옴표 안에 문자열로 작성하여야 한다.
// - 숫자가 포함된 값의 경우 문자형 숫자로 작성하면 되고, 숫자로 작성할 경우 단위 문자열을 조합해야 한다.
// - tagElement.style.styleName = 'styleValue'
// btns.forEach((btn) => {
//   btn.style.backgroundColor = 'red';
//   btn.style.width = 200 + 'px';
// });

// 5. 문서 객체 생성
// - document.createElement(DOM name) : 매개변수에 입력된 태그를 생성한다.
const hollow = document.querySelector('.hollow');
const h2el = document.createElement('h2');
h2el.textContent = 'h2 tag insert';
console.log(h2el);

// 6. 문서 객체 삽입
// - parentDOMname.append(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 뒤에 추가된다.
hollow.append(h2el);

// - parentDOMname.prepend(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 앞에 추가된다.
hollow.prepend(h2el);

// 7. 문서 객체 제거
// - DOMname.remove() : 선택된 문서객체를 삭제한다.
h2el.remove();
