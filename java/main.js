// start header button 
const button = document.querySelector('nav a.list-icon');
const sidePar = document.querySelector('.side-par');
const closer =  document.querySelector('.side-par .side-head i');
button.addEventListener('click',function(){
    sidePar.classList.toggle('d-none');
});
closer.addEventListener('click',function(){
    sidePar.classList.add('d-none');
});

const dropDownButton = document.querySelectorAll('.side-par .side-ul ul li a button i');
dropDownButton.forEach(function(ele){
    ele.addEventListener('click',function(){
        
    });
})
// end header button 



// start section tow 
const imges = 
['overlay-img-1.jpg','overlay-img-2.jpg','overlay-img-3.jpg']
const texts = 
['Architecture','Interior Design','Design Artists'];

let section = document.getElementById('background');
let title = document.getElementById('title-tow');
section.style.backgroundImage = 'url(assets/img/overlay-imges/' + imges[0] + ')';
let counter = 0;
setInterval(function () {
    if(counter < 2 ){
        counter ++;
    }else{
        counter = 0; 
    }
    section.style.backgroundImage = 'url(assets/img/overlay-imges/' + imges[counter] + ')';
    title.textContent = texts[counter];
},3000)
// end section tow 



var swiper = new Swiper(".mySwiper", {
    loop:true,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1.5,
      },
      520 :{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
      1300:{
        slidesPerView: 4,
      }

    }
  });



  /* start counter section ================================================================================================ */
let nums = Array.from(document.querySelectorAll('.counter-section .num'));
let counterSection = document.querySelector('.swiper-section')
let started = false;

window.onscroll = function(){
    if(window.scrollY >= counterSection.offsetTop){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
        started = true;
    }
}

function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval( ()=> {
        ele.textContent++; 
        if(ele.textContent == goal){
            clearInterval(count);
        }
    },2000 / goal)
}

/* end   counter section ================================================================================================ */



var swipert = new Swipert(".testimonials .myswiper", {
    loop:true,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1.5,
      },
      520 :{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
      1300:{
        slidesPerView: 4,
      }

    }
  });