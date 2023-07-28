const toggleBtn = document.querySelector('.navbar__toogleButton'); // 변수 이름 수정
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => { // 이벤트 리스너 변수 이름 수정
    menu.classList.toggle('active'); // 메서드 이름 수정
    links.classList.toggle('active'); // 메서드 이름 수정
});
