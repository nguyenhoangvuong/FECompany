// hamburger
const hamburger = document.querySelector('.header__menu')
const navList = document.querySelector('.header__nav-list')

hamburger.addEventListener('click',()=>{
    navList.classList.toggle('open')
})

const hamburger_close = document.querySelector('.header__menu-close')

hamburger_close.addEventListener('click',()=>{
    navList.classList.toggle('open')
})


// play video
const video = document.querySelector('.video')
const button = document.querySelector('.video-control')
button.addEventListener('click',playpausevideo)
function playpausevideo(){
    if(video.paused){
        button.innerHTML = "<i class='bx bx-pause'></i>"
        video.play()
    }else{
        button.innerHTML = "<i class='bx bx-play'></i>"
        video.pause()
    }
}


// fix nav
const nav = document.querySelector('.header__navbar')
const header = document.querySelector('header')
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 180){
        nav.classList.add('fix')
        header.style.zIndex = "1000"
    }
    else{
        nav.classList.remove('fix')
    }
})


// scroll animation
const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
});

scroll.reveal(`.header__text h1`,{
    origin:"left",
    interval:100
});
scroll.reveal(`.header__text a`,{
    origin:"right",
    interval:100
});

scroll.reveal(`.description_title, .title_h1`,{
    origin:"left",
    interval:150
});

scroll.reveal(`.about__us-description`,{
    origin:"bottom",
    interval:150
});
scroll.reveal(`.about__us-video`,{
    origin:"left",
    interval:150
});
scroll.reveal(`.about__us-img`,{
    origin:"right",
    interval:1900
});

scroll.reveal(`.select__us-content-item`,{
    origin:"left",
    interval:100,
    reset:true
});

scroll.reveal(`.select__us-more`,{
    origin:"bottom",
    interval:100,
});

scroll.reveal(`.product__new, .btn--readmore`,{
    origin:"left",
    interval:100,
});

scroll.reveal(`.project-item`,{
    origin:"right",
    interval:100,
});
