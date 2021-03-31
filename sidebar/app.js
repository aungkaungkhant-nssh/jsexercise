const navToogle=document.querySelector(".nav-toogle");
const sideBar=document.querySelector(".sidebar-header-container");
const close=document.querySelector(".close-btn");

navToogle.addEventListener("click",()=>{
    
    if(sideBar.classList.contains("show-side")){
        sideBar.classList.remove("show-side");
    }else{
        sideBar.classList.add("show-side");
    }
})
close.addEventListener("click",()=>{
    sideBar.classList.remove("show-side");
})