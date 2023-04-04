$(function () {
  /*========= jQuery ========*/
  // 1. 문서의 요소 선택
  // const div = $('div');
  // console.log(div);
  // jquery에 대한 표시가 없어서 인식이 힘들다는 등의 이유로 잘 사용하지 않는다.

  // $(document).ready(function () {
  //   const div = $('div');
  //   console.log(div);
  // });
  // 3.0 이상 버전 이후부터 deprecated 되어 사용하지 않는 것이 좋다.

  const div = $('div');
  console.log(div);
  div.css({ color: 'red', background: 'yellow' });

  $('.p-tag').css('color', 'red');
  $('#span-tag').css('background', 'yellow');

  // jquery를 사용하고자 파싱할때 주로 사용되는 함수.

  // 2. 문서의 요소 탐색
  console.log($('div').children('a')); // div 자식 중에는 a가 없다 : 직계자식요소 선택
  console.log($('div').find('a')); // 후손 요소를 선택
  console.log($('div').find('b')); // 후손에는 직계자식 요소도 포함된다.

  console.log($('.depth3').parent());
  console.log($('.depth3').parent().parent());

  console.log($('.list-2').siblings());
  console.log($('.list-2').prev());
  console.log($('.list-2').next());

  console.log($('.depth3').parent().prev());

  // 3. this로 문서 요소 선택
  // 4. 문서 요소의 index값 읽기
  $('ul li').on('click', function () {
    //alert('a');
    $('ul li').css('color', '');
    $(this).css('color', 'red');
    const idx = $(this).index();
    alert(idx);
  }); // 배열을 요소로 분리 시키지 않아도 찍힘

  // 5. 속성 제어
  const spanid = $('span').attr('id');
  console.log(spanid);
  $('span').attr('id', 'change-span');

  // 6. 스타일 제어
  $(function () {
    $('.btn').on('click', function () {
      const nm = $(this).attr('id');
      $('.img-box img').attr('src', '');
      $('.img-box img').attr('src', `${nm}.jpg`);
    });
  });
});
