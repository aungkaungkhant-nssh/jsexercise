let colorArray=["red","green","blue","yellow"]
let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let getRamdomNumber=ramdomNumber();
    document.body.style.backgroundColor=colorArray[getRamdomNumber];
    color.textContent=colorArray[getRamdomNumber];


})
function ramdomNumber(){
     return Math.floor(Math.random()*colorArray.length);
}