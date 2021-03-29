const reviews=[
    {
        id:1,
        name:"Mg Mg",
        job:"Web Desginer",
        img:"images/mbappe.jpeg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque ullam! Debitis, aliquam! Commodi pariatur exercitationem atque asperiores rerum eius natus error iste, illum quia vel saepe rem ut ducimus!"
    },
    {
        id:2,
        name:"Kyaw Kyaw",
        job:"PHP Devlper",
        img:"images/ronaldo.jpeg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque ullam! Debitis, aliquam! Commodi pariatur exercitationem atque asperiores rerum eius natus error iste, illum quia vel saepe rem ut ducimus!"
    },
    {
        id:1,
        name:"Su Su",
        job:"Andriod Devlper",
        img:"images/messi.jpeg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque ullam! Debitis, aliquam! Commodi pariatur exercitationem atque asperiores rerum eius natus error iste, illum quia vel saepe rem ut ducimus!"
    }
]
let img=document.getElementById("person-img");
let author=document.getElementById("author");
let job=document.getElementById("job");
let info=document.getElementById("info");

let prevBtn=document.querySelector(".prev-btn");
let nextBtn=document.querySelector(".next-btn");
let ramdomBtn=document.querySelector(".ramdom-btn");

let newimg=img.src;
let newauthor=author.textContent;
let newjob=job.textContent;
let newinfo=info.textContent;
let currentItem=0;

window.addEventListener("DOMContentLoaded",()=>{
    showPerson(currentItem);
})

nextBtn.addEventListener("click",()=>{
    if(currentItem===reviews.length){
        currentItem=0;
        showPerson(currentItem);
        return;
    }
    currentItem++;
   
   
    
    if(currentItem>reviews.length-1){
        img.src=newimg;
        author.textContent=newauthor;
        job.textContent=newjob;
        info.textContent=newinfo;
        currentItem=-1;
        return;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        img.src=newimg;
        author.textContent=newauthor;
        job.textContent=newjob;
        info.textContent=newinfo;
        currentItem=reviews.length;
        return;
    }
    showPerson(currentItem);
})
ramdom.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length-1)
    showPerson(currentItem);
})

function showPerson(currentItem){
    let items=reviews[currentItem];
    img.src=items.img;
    author.textContent=items.name;
    job.textContent=items.job;
    info.textContent=items.text;
}