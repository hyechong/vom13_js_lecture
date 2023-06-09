// JSON은 javascript object notation의 약자로 데이터를 표현할 수 있는 방식 중 하나다.
// 기존에는 XML, CSV 등의 형식으로 데이터를 전달했지만 최근에는 데이터 크기 등의 효율성 측면에서 JSON이 우수하기 때문에 대부분 JSON 방식으로 데이터를 전달한다.

// 1. JSON은 객체 표현과 같이 {} 안에 키와 값의 쌍으로 구성된다.
const myInfo = {
  name: 'hyechong',
  age: 27,
};
console.log(myInfo);

// 2. 같은 형식의 객체가 여러개일 경우 [] 안에 콤마로 구분한 {} 객체를 나열한다.
const myClass = [
  {
    name: 'hyechong',
    age: 27,
    date: '2023-03-22',
  },
  {
    name: 'hyunba',
    age: 29,
    date: '2023-03-30',
  },
];
console.log(myClass);

// 3. JSON 데이터는 반복 문법을 사용하여 접근할 수 있다.
const classMembers = myClass.map((member) => {
  year = member.date.split('-')[0];
  month = member.date.split('-')[1];
  day = member.date.split('-')[2];
  return (fullDate = `${year}년 ${month}월 ${day}일`);
});
console.log(classMembers);

// 4. JSON 작성 규칙
// - 값을 표현할 때는 문자열, 숫자, boolean 자료만 사용할 수 있다.
// - 문자열과 키에는 큰 따옴표만를 사용한다.
// - 하지만 JSON 작성 시에는 큰 따옴표 규칙을 적용하지 않아도 되지만 데이터를 JSON.stringify를 사용하게 되면 큰 따옴표 규칙이 적용된다.
const strJson = JSON.stringify(myClass);
console.log(strJson); //데이터를 내보낼때 문자열 형태로 변환
const parseJson = JSON.parse(strJson); //제공받은 데이터를 다시 자바스크립트 형식으로 변환
console.log(parseJson);
// - 실제 오픈API 데이터는 이 형식으로 데이터를 제공한다. : ex) https://yts.torrentbay.to/api/v2/list_movies.json

// - JSON.stringify는 데이터를 문자열로 만들기 때문에 반복 문법 접근이 안된다.
// - 브라우저에서 확인할 때는 별도의 확장팩을 사용하여 확인할 수 있다. 크롬의 경우 크롬 웹스토어에서 json formetter를 설치하거나 formetter를 제공하는 사이트를 이용하면 된다.
// - JSON.parse() : 따라서 공공데이터에서 제공받은 JSON 문자열 데이터는 다시 자바스크립트 형식으로 만들어야 한다. 이때 사용하는 것이 JSON.parse()다.

// - 향후 공공데이터를 활용한 앱 개발 예정이므로 그때 사용법을 익히면 된다.
// - 연습용 가상 JSON 데이터 : https://dummyjson.com/
