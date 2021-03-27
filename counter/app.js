let counter=0;
let value=document.querySelector("#value");
let btns=document.querySelectorAll(".btn");

btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        let style=event.target;
        if(style.classList.contains("increase")){
          counter++;
        }
        else if(style.classList.contains("decrease")){
            counter--;
        }
        else{
            counter=0;
        }
        if(counter>0){
            value.style.color="green";
        }
        if(counter<0){
            value.style.color="red";
        }
        if(counter===0){
            value.style.color="#000";
        }
        value.textContent=counter;
    })
})