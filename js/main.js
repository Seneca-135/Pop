const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navBtnImg = document.getElementById('nav-btn__img');

navBtn.addEventListener('click', function(){
    if (nav.classList.toggle('open')){
        navBtnImg.src = "./img/icons/nav-close.svg";
        navBtn.classList.toggle('close-btn');
    } 
    
    else{
        navBtnImg.src = "./img/icons/nav-open.svg"
        navBtn.classList.toggle('close-btn');
    }
})

AOS.init({
    once: true // Говорит что, анимация играет только один раз 
    // disable:"mobile" --- отключает анимацию именно на телефоне
});