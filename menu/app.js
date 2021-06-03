const menu=[
    {
        id:1,
        img:"./images/food1.jpeg",
        category:"breakfast",
        price:15.9,
        title:"buttermilk pancakes",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`
    },
    {
        id:2,
        img:"./images/blouses.jpeg",
        category:"breakfast",
        price:15.9,
        title:"bugger",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`
    },
    {
        id:3,
        img:"./images/hat.jpeg",
        category:"lunch",
        price:15.9,
        title:"noodle",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`
    },
    {
        id:4,
        img:"./images/nike.jpeg",
        category:"lunch",
        price:15.9,
        title:"buttermilk pancakes",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`
    },
    {
        id:5,
        img:"./images/shirt.jpg",
        category:"dinner",
        price:15.9,
        title:"sanpyoke",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`
    }
];
let sectionCenter=document.querySelector(".section-center");
let filterBtns=document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        let category=event.currentTarget.dataset.id;
        let filteredMenu=menu.filter(me =>{
          return me.category===category;
        })
        displayMenu(filteredMenu);
        if(category==="all"){
            displayMenu(menu);
        }
    })
})
window.addEventListener("DOMContentLoaded",()=>{
   displayMenu(menu);
  
})

let displayMenu=(menu)=>{
    let menuItems=menu.map(item =>{
        return `
        <article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
        `
    })
    menuItems=menuItems.join("");
    sectionCenter.innerHTML=menuItems;
}