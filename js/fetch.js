// 1. fetch API
// 서버의 데이터를 자바스크립트를 활용해 브라우저로 가져오도록 하는 API이며 promise를 사용한다.
// console.log('1');
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     // console.log(response); // json, text 등의 데이터가 들어있고, 이를 파싱해서 사용한다.
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

// console.log('2');

// 2. fetch의 타입
// https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
// 여기서 then은 promise이다. : "fetch()를 불러들이는 경우, 취득할 리소스를 반드시 인수로 지정하지 않으면 안된다. 읽어들인 뒤, fetch()는 Promise객체를 반환한다." <- 객체는 response 객체로 반환된다.

// 3. fetch와 연결된 메서드 체인 then & catch
// fetch는 메서드 체인으로 2개의 함수를 연결할 수 있으며, 각 메서드는 콜백 함수 파라미터를 가진다.
// then(function(res){}) : fetch 실행이 성공했을때 콜백 함수로 결과를 전달한다.
// then((res) => console.log(res))
// catch(function(err){}) : fetch 실행이 실패했을때 콜백 함수로 실패한 결과를 전달한다.
// catch((err) => console.log(err))
const getData = fetch('https://jsonplaceholder.typicode.com/posts');
//console.log(getData); // promise

getData
  .then((res) => {
    return res.json();
    //console.log(res.json());
  })
  .then((json) => {
    //console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });

// response.json() 역시 Promise를 반환한다. 즉, json 형태로 반환된 값을 then으로 전달하는 메서드 체인을 사용할 수 있다.

// 2, 3번 통합 리팩토링
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    json.map((d, i) => {
      console.log(i + ' : ' + d.title);
    });
  })
  .catch((error) => console.log(error));
