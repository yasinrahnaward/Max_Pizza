'use strict'

// footer navigation fade feature

const footerNave = document.querySelector(".footer-navigation");

const handlover = (e, opacity) => {
  if (e.target.classList.contains("footer__link")) {
    const tachedLink = e.target;
    const sibling = tachedLink
      .closest(".footer-navigation")
      .querySelectorAll(".footer__link");
    const footerNavaLogo = tachedLink
      .closest(".footer-navigation")
      .querySelector(".footer__logo");
    sibling.forEach((el) => {
      el !== tachedLink && (el.style.opacity = opacity);
    });
    footerNavaLogo.style.opacity = opacity;
  }
};
footerNave.addEventListener("mouseover", (e) => {
  handlover(e, "0.3");
});
footerNave.addEventListener("mouseout", (e) => {
  handlover(e, "1");
});
/*    learn morebtn smooth scrolling
*/
const headerTitle=document.querySelector('.header__title')
const section1 = document.querySelector("#section--1");
headerTitle.addEventListener('click',(e)=>{
  if(e.target.classList.contains('btn--scroll-to'))
  {
    section1.scrollIntoView({behavior:'smooth'})
  }

})



// header imges slider component
const headerSlides=document.querySelectorAll('.slide')
const headerDotsContainer=document.querySelector('.header-dots-container')
const headerContainer=document.querySelector('.header__title')
const createDotesForHeader=()=>{
    headerSlides.forEach((_,index)=>{
        headerDotsContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`)
    })
}
createDotesForHeader()

const headerSlider=(currSlide)=>{
    headerSlides.forEach((el,index)=>{
        el.style.transform=`translateX(${120*(index-currSlide)}%)`
    })
}
headerSlider(0)


let currHeaderSlide=0;
headerDotsContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('dots__dot'))
    {
        const dotIndex=e.target.dataset.slide
        headerSlider(dotIndex)
        currHeaderSlide = dotIndex
        activeHeaderDot(dotIndex)
        
    }
})


setInterval(() => {
    currHeaderSlide==2 ?currHeaderSlide =0 :currHeaderSlide++
    headerSlider(currHeaderSlide)
    activeHeaderDot(currHeaderSlide)
}, 5000);

const activeHeaderDot=(activeSlide)=>{
    document.querySelectorAll('.dots__dot').forEach((el,i)=>{
        el.classList.remove('dots__dot--active')
    })
    document.querySelector(`.dots__dot[data-slide="${activeSlide}"]`).classList.add('dots__dot--active')
}
activeHeaderDot(0)



// Navigation smooth scrolling
const navLinkContainer = document.querySelector(".nav-links");
navLinkContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (e.target.classList.contains("link-addr"))
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// footer nav smooth scrolling
const footerNavLinkContainer = document.querySelector(".footer-navigation");
footerNavLinkContainer.addEventListener('click',(e)=>{
  e.preventDefault()
  
  if(!e.target.classList.contains('footer__link')) return
  const footerTargetItemhref=e.target.getAttribute('href')
  document.querySelector(footerTargetItemhref).scrollIntoView({behavior:'smooth'})
  
})
// sticky navigation

const header=document.querySelector('.header__title')
const navigation=document.querySelector('.navigation-bar')
const nav_height=navigation.getBoundingClientRect().height
const sticky=(entries,obs)=>{
    const [entry]=entries
    if(entry.isIntersecting) {
        navigation.classList.remove("sticky", "center-align");
    navigation.querySelector(".center-align").classList.remove("middle");
    }
    else{

        navigation.classList.add("sticky", "center-align");
        navigation.querySelector(".center-align").classList.add("middle");
    }
    
}
const stickyNavObserve=new IntersectionObserver(sticky,{
    root:null,
    threshold:0,
    rootMargin:`-${nav_height}px`
})
stickyNavObserve.observe(header)


// reveal sections intersection observe
const reveal=(entries,obs)=>{
  const [entry]=entries
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  obs.unobserve( entry.target)
  
}
const sectionObserve=new IntersectionObserver(reveal,{
  root:null,
  threshold:0.15
})
const allSections=document.querySelectorAll('section')
allSections.forEach(s=>{
  s.classList.add('section--hidden')
  sectionObserve.observe(s)
})
const img3=document.querySelector('.img3')

