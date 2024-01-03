var menuIcon = document.querySelector('#humburger');
var navMenu  = document.querySelector('#nav-menu');
var closeMenu= document.querySelector('#closeMenu');

menuIcon.addEventListener('click', ()=> {
    navMenu.classList.remove('hidden');
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.add('hidden');
})

//************** Menu Item ********************* */
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const bevareges = document.querySelectorAll(".bevareg");



tabs.forEach((tab)=> {
    tab.addEventListener('click', ()=> {
        tabs.forEach((tab)=> {
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        const tabval = tab.getAttribute('data-tabs')
      
        all.forEach((item) => {
            item.style.display ='none'
        })

        if(tabval == 'food'){
            foods.forEach((item)=> {
                item.style.display = 'block'
            })
        } else if(tabval == 'snack'){
            snacks.forEach((item)=> {
                item.style.display = 'block'
            })
        } else  if(tabval == 'bevareg'){
            bevareges.forEach((item)=> {
                item.style.display = 'block'
            })
        }else{
            all.forEach((item)=> {
                item.style.display = 'block';
            })
        }



    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        480: {
          slidesPerView: 1,
      
        },
        1024: {
          slidesPerView: 2,
      
        },
        1280: {
          slidesPerView: 3,
        
        },
      },
  });


// ScrollUp

const ScrollUpBtn = document.getElementById('scrollUp')

window.addEventListener('scroll', ()=> {
    if(this.scrollY >= 250){
        ScrollUpBtn.classList.add('bottom-4')
        ScrollUpBtn.classList.remove('-bottom-1/2')
    }else{
        ScrollUpBtn.classList.remove('bottom-4')
        ScrollUpBtn.classList.add('-bottom-1/2')
    }
})

// Change Header Border
const header = document.getElementById('header');

window.addEventListener('scroll', ()=> {

    if(scrollY >= 250){
        header.classList.add('border-b' , 'border-secondaryColor')
    }else{
        header.classList.remove('border-b' , 'border-secondaryColor')
    }
})


//  Dark Theme
const html = document.querySelector('html');
const toggleBtn = document.getElementById('themeBtn');


if(localStorage.getItem('mode') == 'dark'){
    darkMode();
}else{
    ligthMode()
}

toggleBtn.addEventListener('click', ()=> {
    if(localStorage.getItem('mode') == 'light'){
        darkMode();
    }else{
        ligthMode()
    }
    
})




function darkMode(){
    html.classList.add('dark')
    toggleBtn.classList.replace('ri-moon-line', 'ri-sun-line')
    localStorage.setItem('mode', 'dark')
}

function ligthMode(){
    html.classList.remove('dark')
    toggleBtn.classList.replace('ri-sun-line', 'ri-moon-line')
    localStorage.setItem('mode', 'light')
}


// Active Link  

const activeLink = ()=> {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link');

    let current = 'home';

    sections.forEach((section)=> {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((item)=> {
        item.classList.remove('text-secondaryColor')

        if(item.href.includes(current)){
            item.classList.add('text-secondaryColor')
        }
    })
}


window.addEventListener('scroll', activeLink)


// Scroll AnimationS
AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});