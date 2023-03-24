// 1. callback function
// 변수에 저장할 수 있는 대상을 일급객체(first class citizen)이라 한다.
// 함수가 다른 함수의 리턴 값으로 될 수 있을때 역시 일급객체라 한다.
// 함수는 다른 함수의 린터 값 또는 파라미터 변수값으로 사용될때 이를 callback function이라 한다.

// 2. 동기와 비동기(synchronous and asynchronous)
// 서버와 웹브라우저 간 통신 시 통신 순서를 비동기적으로 진행하는 것이 대표적인 예다.
// 특정한 요청 없이 서버와 웹브라우저 간 통신이 이뤄질 때 이를 ajax(javascript asynchronous xml)이라 한다. 검색어 하나만 입력해도 추천 검색어가 제시되어 웹브라우저에 대기시키는 상황이 그 예다.

// 3. 콜백 지옥
// 여러 기능을 분리하여 각각 다른 함수에 정의하고, 이들을 일정 시간 또는 일정 수행 간격으로 연쇄적 실행을 할 경우 콜백함수를 반복해서 사용하게 된다. 이들은 모두 들여쓰기로 표시되고, 들여쓰기가 감당하기 어려울 정도로 깊어지는 현상을 콜백지옥이라 한다.

// promise를 통한 메서드 체인

// 4. promise의 사용
// promise는 비동기 처리를 위한 객체다.
// promise는 객체 생성자를 사용하고, resolve와 reject, then을 사용하여 상태를 만들어준다.
// Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
// Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
// Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

// 5. async & await
// async와 await을 사용하면 promise로 반환된 값을 특정 시점까지 지연시킬 수 있다.
// async가 붙은 함수는 반드시 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환한다.
// await 구문은 try로 박싱하고 catch구문으로 예외처리할 수 있다.

// 자바스크립트는 await 키워드를 만나면 프라미스가 처리될 때까지 기다린다.

// 6. fetch API
// 서버의 데이터를 자바스크립트를 활용해 브라우저로 가져오도록 하는 API이며 promise를 사용한다.

// 7. fetch의 타입
// https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
// 여기서 then은 promise이다. : "fetch()를 불러들이는 경우, 취득할 리소스를 반드시 인수로 지정하지 않으면 안됩니다. 읽어들인 뒤, fetch()는 Promise객체를 반환한다." <- 객체는 response 객체로 반환된다.

// 8. fetch와 연결된 메서드 체인 then & catch
// fetch는 메서드 체인으로 2개의 함수를 연결할 수 있으며, 각 메서드는 콜백 함수 파라미터를 가진다.
// then(function(res){}) : fetch 실행이 성공했을때 콜백 함수로 결과를 전달한다.
// catch(function(err){}) : fetch 실행이 실패했을때 콜백 함수로 실패한 결과를 전달한다.
