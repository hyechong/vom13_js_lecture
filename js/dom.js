// DOM 참조 : http://www.tcpschool.com/javascript/js_dom_concept

// DOM은 Document Object Model의 약자로 HTML 문서의 요소를 제어할 수 있도록 자바스크립트에서 제공하는 방식이다.
// HTML 문서는 태그와 노드가 계층 구조로 되어 있고, 상위 계층을 부모, 하위 계층을 자식으로 분류하여 접근할 수 있다.

// 1. 문서 객체 선택
// - document.body(head) : 문서의 body 객체를 선택할 수 있다.

// - console.log의 경우 선택된 문서 객체를 객체 형식과 태그 형식을 번갈아 보여 준다. 하지만 문서를 제어하는데는 지장이 없다.
// - 객체 형식만 보고 싶다면 console.dir을 사용하거나 선택된 태그를 {} 에 감싸서 확인하면 된다. 이때 {}를 사용하기 위해서는 변수에 별도 저장하여 참조값을 사용해야 한다.

// - document.querySelector : 기존에는 아이디, 클래스, 태그를 선택할 때 각각 document.getElementById, getElementsByClass, getElementsByTagName을 사용했다.

// - es6버전부터 querySelector의 파라미터로 선택하고자 하는 요소의 css선택자 값을 작성하면 된다.

// - document.querySelectorAll : 아이디의 경우를 제외하고 클래스와 태그는 같은 이름으로 여러개 존재할 수 있다. 이때 같은 이름을 모두 선택할 때 사용한다.

// - 선택된 문서 객체 요소들은 반복 문법을 사용해서 접근할 수 있다.

// forEach문으로 선택

// - 선택된 문서 객체는 유사배열이며 정확히 배열은 아니다. 따라서 map을 사용하려면 Array.from 메서드를 사용하여 배열로 변환한 후 사용해야 한다.

// 2. 텍스트 조작
// - textContent, innerHTML
// - textContent 속성은 입력된 문자열을 삽입하고, innerHTML 속성은 입력된 문자열을 HTML 형식으로 삽입한다.

// - innerText 속성을 사용한 경우도 있는데, 이는 과거에 사용되었던 텍스트 입력 방식이었지만 최근에는 textContent를 사용하고 있다.

// 3. 속성 조작
// - setAttribute(name, value) : 특정 속성에 값을 지정한다.
// - getAttribute(name) : 특정 속성을 조회한다.

// - 클릭하여 사진 바꾸기

// 4. 스타일 조작
// - 자바스크립트를 이용하여 스타일을 변경할 때 값은 따옴표 안에 문자열로 작성하여야 한다.
// - 숫자가 포함된 값의 경우 문자형 숫자로 작성하면 되고, 숫자로 작성할 경우 단위 문자열을 조합해야 한다.
// - tagElement.style.styleName = 'styleValue'

// 5. 문서 객체 생성
// - document.createElement(DOM name) : 매개변수에 입력된 태그를 생성한다.

// 6. 문서 객체 삽입
// - parentDOMname.append(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 뒤에 추가된다.

// - parentDOMname.prepend(DOM name) : 매개변수로 선택된 객체가 부모 객체의 자식 앞에 추가된다.

// 7. 문서 객체 제거
// - DOMname.remove() : 선택된 문서객체를 삭제한다.
