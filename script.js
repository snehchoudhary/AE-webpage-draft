
// TypeWriter effect
const text = "Total Pipeline Integrity Management Solutions (T-PIMS)";
const speed = 150;
let i = 0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typeWriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// auto-type effect
var typed = new Typed(".auto-type", {
    strings: ["User Management", "Asset Master", "CP Module", "ILI Module", "GIS Integration", "Risk Management", "Activity Scheduler"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})


//Initialize swiper

const swiper = new Swiper('.swiper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//Responsive breakpoints
    breakpoints: {
       
        0:{
            slidesPerView: 1
        },

        768:{
            slidesPerView: 2
        },

        1024:{
            slidesPerView: 3
        }
    }
  });