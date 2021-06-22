// 서브메뉴
const searchEl = document.querySelector('.search');
//document는 하나의 요소
//document대신 searchEl을 사용하여 .search를 두번 찾는 일을 없앴다
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  //searchInputEl에 html요소를 추가함
  searchInputEl.setAttribute('placeholder', '통합 검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});


// get Time
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();