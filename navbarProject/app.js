let navToogle=document.querySelector(".nav-toogle");
let links=document.querySelector(".links");
navToogle.addEventListener("click",()=>{
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
})
