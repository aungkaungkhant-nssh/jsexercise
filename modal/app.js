let modalBtn=document.querySelector(".modal-btn");
let modalOverlay=document.querySelector(".modal-overlay");
let close=document.querySelector(".close-btn");

modalBtn.addEventListener("click",()=>{
    modalOverlay.classList.add("open-modal")
})
close.addEventListener("click",()=>{
    modalOverlay.classList.remove("open-modal")
})