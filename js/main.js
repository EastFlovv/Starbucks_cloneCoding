//우측 배너, toTop버튼
const badgeEl = document.querySelector('header .badges');
const totopEl = document.querySelector('#to-top');
// _.throttle(function, time(밀리초)) -> lodash cdn
window.addEventListener('scroll', _.throttle(function(){ //_.throttle(함수, 시간)
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소, 지속시간(초), 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });

    //버튼 보이기
    gsap.to(totopEl, .2, {
      //x축으로 -100px이동
      x : 0
    });
  }else{
    //배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    
    //버튼 숨기기
    gsap.to(totopEl, .2, {
      //x축으로 100px이동
      x : 100
    });
    
  }
}, 300));

totopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
});


//비주얼 이미지 페이드인
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .7, //0.7 1.4 2.1 ...
    opacity : 1
  });
});

//new Swiper(선택자, 옵션 {})
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});


new Swiper('.promotion .swiper-container', {
  // direction : 'horizontal', //default (입력하지 않아도 됨)
  slidesPerView : 3, //한번에 보여줄 슬라이드의 수
  spaceBetween : 10, //슬라이드 사이 여백 (10px)
  centeredSlides : true, //1번 슬라이드가 가운데로 오기
  loop : true,
  // autoplay :{
  //   delay : 5000 //(0,5초 딜레이)
  // },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자가 제어 가능
  },

  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }

});

//------------------------------------------------

new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop : true,
  slidesPerView : 5,
  spaceBetween : 30,
  navigation : {
    prevEl : '.awrads .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; // A가 true라면 !A는 false이다. isHidePromotion의 값을 반대로 바꿈
  if(isHidePromotion){ //True이므로 숨김 처리
    promotionEl.classList.add('hide');
  }else{ //false이므로 보임 처리
    promotionEl.classList.remove('hide');
  }

});


// floating object

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){ 
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), { //지속시간 랜덤 1.5 ~ 2.5s
    y :size,
    repeat : -1, //무한반복 
    yoyo : true, //애니메이션 역재생
    ease : Power1.easeInOut, //easing
    delay : random(0, delay) //랜덤 딜레이
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scroll control (Scroll Magic CDN)
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  //addTo() -> ScrollMagic을 이용하기 위한 cotroller
  new ScrollMagic
  .Scene({
    triggerElement : spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook : .8 //뷰포트의 세로는 0 ~ 1 (위~아래) 뷰포트의 0.8에 걸린 Hook에 감시중인 spyEl이 걸리면 작동함
  })
  .setClassToggle(spyEl, 'show') //spyEl에 show클래스를 toggle함
  .addTo(new ScrollMagic.Controller()); //ScrollMagic에 설정된 요소를 넣고 동작시킴
});