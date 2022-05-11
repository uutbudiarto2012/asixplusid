// const navbar = document.querySelector('.asix-navbar')
// const menus = document.querySelector('.menus')


// window.addEventListener("scroll",()=>{
//     if(window.pageYOffset > 70){
//         navbar.classList.add('istop')
//         menus.classList.add('istop')
//     }else{
//         navbar.classList.remove('istop')
//         menus.classList.remove('istop')
//     }
// })

particlesJS.load("particles-js-1", "./assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
particlesJS.load("pjs-3", "./assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
particlesJS.load("pjs-4", "./assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
particlesJS.load("particles-js-2", "./assets/particles-2.json", function () {
  console.log("callback - particles.js config loaded");
});


const asixNav = document.querySelector('.asix-nav')

const heroBG = document.querySelector('.hero .bg-hero')
const heroContent = document.querySelector('.hero-content')
const videoContent = document.querySelector('.video-content')
const elRound = document.querySelector('.video-content .el-round')

window.addEventListener('scroll',function(){
    const yValue = window.scrollY;
    if(yValue > 70){
        asixNav.classList.add('isTop')
        asixNav.style.padding = '10px 0';
    }else{
        asixNav.classList.remove('isTop')
        asixNav.style.padding = '20px 0';
    }
    heroBG.style.top = yValue * 0.3 + 'px';
    videoContent.style.top = - yValue * 0.1 + 'px';
    elRound.style.top =   yValue * .1 + 'px';
    elRound.style.left =   yValue * .3 + 'px';
    heroContent.style.top = yValue * 0.25 + 'px';
    
})