// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const line1 = document.querySelector(".line-1");
const line3 = document.querySelector(".line-3");


menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  navList.classList.toggle("change");
  line1.classList.toggle("change");
  line3.classList.toggle("change");
});
// End of Navbar
// Section 2
const video=document.querySelector('.video')
const btn=document.querySelector('.buttons i')
const bar=document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}
btn.addEventListener('click',()=>{
  playPause()
})
video.addEventListener('timeupdate',()=>{
  // console.log(video.currentTime,video.duration)
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%` 
 if(video.ended){
   btn.className='far fa-play-circle'
   video.style.opacity = '.3'
 }
})
// End of Section 2
// Section 3
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
 
});
// End of Section 3