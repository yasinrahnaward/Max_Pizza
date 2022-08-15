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
    rootMargin:`-${nav_height*2}px`
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



// food list itme slider
const foodListItemSlider=()=>{
  const nextItem = document.querySelector(".slider__btn--right");
  const preItem = document.querySelector(".slider__btn--left");
  const dotsContainer = document.querySelector(".dots");
  const items = document.querySelectorAll(".food-list-item");
  let currentItem = 0;
  let lastItem = items.length - 1;
  // translate each item to the right side 120%
  // slider function
  const slider = (curritem) => {
    items.forEach((item, i) => {
        item.style.transform = `translateX(${118 * (i - curritem)}%)`;
      });
  };
  
  // slide to rigth ------right btn click
  const goToRight = () => {
    currentItem === lastItem - 4 ? (currentItem = 0) : ++currentItem;
    slider(currentItem);
    activeDote(currentItem)
  };
  
  nextItem.addEventListener("click", goToRight);
  // slide to left ---------left btn click
  const goToLeft = () => {
      currentItem === 0 ? (currentItem = lastItem - 4) : --currentItem
      slider(currentItem);   
      activeDote(currentItem)
  };
  
  preItem.addEventListener("click",goToLeft);
  // slide by arrow key down
  document.addEventListener("keydown", (e) => {
    e.key === 'ArrowRight' && goToRight()
    e.key === 'ArrowLeft' && goToLeft()
  });
  
  // the dote functionality of dilder
  // 1-------create dots
  const createDotes=()=>{
      items.forEach((_,index)=>{
  
          dotsContainer.insertAdjacentHTML('beforeend',
          `<button class="dots__dot" data-slide="${index}"></button>`
          )
      })
  }
  
  
  // add event listener to dotes parent
  dotsContainer.addEventListener('click',(e)=>{
      if(e.target.classList.contains('dots__dot'))
      {
          const doteNumber=e.target.dataset.slide
          slider(doteNumber)
          activeDote(doteNumber)
          
      }
  })
  const activeDote=(activeItem)=>{
      document.querySelectorAll('.dots__dot').forEach(e=>{
      e.classList.remove('dots__dot--active')
      })
      document.querySelector(`.dots__dot[data-slide='${activeItem}']`).classList.add('dots__dot--active')
  }
  //iniial fucntion
  (()=>{
      slider(0)
      createDotes()
      activeDote(currentItem)
  })()
  }
  foodListItemSlider()
  



// food item enter animation

const foodListSlider = document.querySelector(".food-list-slider");
foodListSlider.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("food-item-img")) {
    const foodListItemContainer = e.target.closest(".food-list-item");
    const foodItemPrice =
      foodListItemContainer.querySelector(".food-item-price");
    foodItemPrice.classList.add("show");
  }
});
foodListSlider.addEventListener("mouseout", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("food-item-img")) {
    const foodListItemContainer = e.target.closest(".food-list-item");
    const foodItemPrice =
      foodListItemContainer.querySelector(".food-item-price");
    foodItemPrice.classList.remove("show");
  }
});


// lazy load imges
const lazyImages=document.querySelectorAll('img[data-src]')
const lazy=(entries,observer)=>
{
  const [entry]=entries
  if(!entry.isIntersecting) return
  entry.target.src=entry.target.dataset.src
  entry.target.addEventListener('load',()=>{
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
  
  
}
const lazyObserver=new IntersectionObserver(lazy,{
  root:null,
  threshold:[0,.5,.9,1],
  rootMargin:'-100px'
})

lazyImages.forEach(img=>lazyObserver.observe(img))