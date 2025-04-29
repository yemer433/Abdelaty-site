
const tran = document.querySelectorAll(".tran")
const loading = document.getElementById("load")
const menuu = document.getElementById("menu")
const cover = document.getElementById("cover")


var a = 0;

menuu.style.width = `${30/(window.innerWidth/1300)}vw`
document.body.style.overflow = 'hidden';
 let g =setInterval(function(){
    
        window.scrollTo(0, 0);
        a++;
        if(a >20){
            clearInterval(g);
        }
},1);
function handleResize() {
    menuu.style.width = `${30/(window.innerWidth/1000)}vw`;
    if(window.innerWidth > 1300){
        clsoe()
    }

    
  }
  
  window.addEventListener('resize', handleResize);
  

setTimeout(()=>{document.body.style.overflowY = 'auto'},2000)

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show")
        }
    });
})

const ham = document.getElementById("ham")
const close = document.getElementById("close")
const cc = document.querySelectorAll(".cc")
function menu(){
    menuu.style.display = "flex"
    menuu.classList.add("show")
}
function clsoe(){
    menuu.classList.remove("show")
}
cc.forEach((cc)=>cc.addEventListener("click",()=>{
    clsoe()
}))

const logo =  document.getElementById("logo")
logo.addEventListener("click",()=>{
    window.location.href = "index.html"
})
ham.addEventListener("click",()=>{
    menu()
})
close.addEventListener("click",()=>{
    clsoe()
})



document.addEventListener("DOMContentLoaded", ()=> {
    if(window.width < 1300){
        loading.style.height = `${window.innerHeight}px`;
        cover.style.height = `${window.innerHeight*0.7}px`;

    }
    setTimeout(() => {
        loading.style.transform = `translateY(-${window.innerHeight+200}px)`;
        const banner = document.getElementById("prof");
        const head = document.getElementById("header");
        setTimeout(()=>{
            banner.classList.add("show")
            tran.forEach((card) => observer.observe(card));
        }, 100);
        setTimeout(()=>{head.classList.add("show")}, 300);
        setTimeout(()=>{loading.style.display = "none"}, 1000);
    }, 1000);
    
    
  });