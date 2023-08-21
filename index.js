// header toggle
let MenuBtn = document.getElementById("MenuBtn")
MenuBtn.addEventListener("click",function(e){
     document.querySelector("body").classList.toggle("mobile-nav-active");
     this.classList.toggle("fa-xmark")
})

// Typing Effect 
let typed = new Typed('.auto-input',{
     strings:['Front-End Developer!','Freelancer!','UI Desigenre!','Youtuber!'],
     typeseed:100,
     backspeed:100,
     baxkdelay:10000,
     loop:true
})

// Active Link State on  Scroll

// Get all Link
let navLinks = document.querySelectorAll('nav ul li a')
// console.log(navLinks);
// Get all section
let sections = document.querySelectorAll('section')
// console.log(sections);

window.addEventListener('scroll',function(){
     const scrollPos = this.window.scrollY
     sections.forEach(section =>{
          if(scrollPos >section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
               navLinks.forEach(link =>{
                    link.classList.remove('active');
                    if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                         link.classList.add('active')
                    }
               });
          }
     });
});
