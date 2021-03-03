const hamburger=document.querySelector(".hamburger"),hamName=document.querySelector(".hamburger__name"),navigation=document.querySelector(".navigation"),menu=document.querySelector(".navigation__list"),links=document.querySelectorAll(".navigation__item-link"),up=document.querySelector(".top"),logoWhite=document.querySelector(".logo__white"),logoStart=document.querySelector(".logo__start"),lock=document.querySelector(".lock"),body=document.querySelector("body"),phone=document.querySelector(".phone"),mobile=document.querySelectorAll(".btn--contact, .icon__phone"),background=document.querySelector(".background");function mini(){let e=gsap.timeline({duration:.2});e.to(".hamburger",{top:"0px"},0),e.to(".top",{background:"#fff"},0),e.to(".logo__white",{top:"8px",width:"125px",opacity:"0"},0),e.to(".phone",{opacity:"1",display:"block"},0)}function miniRev(){let e=gsap.timeline({duration:.2});e.to(".hamburger",{top:"42px",x:"0%"},0),e.to(".top",{background:"transparent"},0),e.to(".logo__white",{width:"175px",top:"35px",opacity:"1"},0),e.to(".phone",{opacity:"0",display:"none"},0)}function start(){let e=gsap.timeline();e.to(".bground--one",{duration:.7,ease:Power4.easeOut,y:"100%"},1),e.to(".bground--two",{duration:.7,ease:Power4.easeOut,y:"-100%"},1),e.to(".bground--one",{display:"none"},2),e.to(".bground--two",{display:"none"},2),e.fromTo(".logo__enter",{opacity:1},{duration:.2,opacity:0},1),e.to(".logo__enter",{display:"none"},2)}function reset(){this.time(0).kill()}function slide(){let e=gsap.timeline({onComplete:reset});e.fromTo(".slide",{x:"100%"},{x:"0",duration:1,ease:Power4.easeOut},0),e.fromTo(".slide--two",{x:"100%"},{x:"0",duration:1,ease:Power4.easeOut},0),e.to(".slide",{y:"100%",duration:1,ease:Power4.easeOut},1),e.to(".slide--two",{y:"-100%",duration:1,ease:Power4.easeOut},1),e.to(".slide",{display:"none"},2),e.to(".slide--two",{display:"none"},2)}window.addEventListener("scroll",(()=>{background.getBoundingClientRect().top<background.getBoundingClientRect().height-500?mobile.forEach((e=>{e.classList.remove("hide")})):mobile.forEach((e=>{e.classList.add("hide")}))})),document.addEventListener("DOMContentLoaded",(function(){new Splide("#image-slider",{type:"loop",height:"800px",width:"60%",gap:"3rem",autoplay:!0,lazyLoad:"nearby",cover:!0,perMove:"1",interval:"4000",padding:{left:0,right:"15rem"},breakpoints:{640:{height:"75%",width:"100%",padding:{left:0,right:0}},1024:{height:"50%",width:"100%",padding:{left:0,right:0}},1440:{height:"500px",width:"80%"},2500:{height:"600px",width:"70%"}}}).mount()})),window.addEventListener("scroll",(()=>{const e=window.matchMedia("(min-width: 1025px)");scrollY>60&&e.matches?mini():scrollY<55&&e.matches&&miniRev()})),hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("is-active"),menu.classList.toggle("menu-active"),logoWhite.classList.toggle("hide"),hamName.classList.toggle("hamcolor"),body.classList.toggle("lock")})),links.forEach((e=>{e.addEventListener("click",slide),e.addEventListener("click",(()=>{setTimeout((()=>{body.classList.remove("lock"),hamburger.classList.remove("is-active"),menu.classList.remove("menu-active"),hamName.classList.remove("hamcolor"),logoWhite.classList.remove("hide")}),500)}))})),window.addEventListener("load",start);
//# sourceMappingURL=main.js.map
