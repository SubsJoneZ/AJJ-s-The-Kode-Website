const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "HUARACHE",
        price: 119,
        colors: [
            {
                code: "gray",
                img: "img/Gray Huarache Shoe.png",
            },
            {
                code: "maroon",
                img: "img/Maroon Huarache.png"
            },
        ],
    },
    {
        id: 2,
        title: "MAX",
        price: 129,
        colors: [
            {
                code: "yellowgreen",
                img: "img/Neon Green Air Max.png",
            },
            {
                code: "silver",
                img: "img/Silver Air Max.png"
            },
        ],
    },
    {
        id: 3,
        title: "JAY'S",
        price: 139,
        colors: [
            {
                code: "darkred",
                img: "img/Nike Jordan 1.png",
            },
            {
                code: "blue",
                img: "img/Blue Jordan 1.png"
            },
        ],
    },
    {
        id: 4,
        title: "CHUCKS",
        price: 59,
        colors: [
            {
                code: "black",
                img: "img/Low top Chucks.png",
            },
            {
                code: "maroon",
                img: "img/Red High Top Chucks.png"
            },
        ],
    },
    {
        id: 5,
        title: "RUNNERS",
        price: 99,
        colors: [
            {
                code: "magenta",
                img: "img/Women's Nike Runners.png",
            },
            {
                code: "black",
                img: "img/Men's Nike Runners Black.png"
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        
        //change the chosen product
        chosenProduct = products[index];

        //change text of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img; 
        
        //assign new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        }); 
    });
});

currentProductColors.forEach((color,index)=> {
    color.addEventListener("click", ()=> {
        currentProductImg.src = chosenProduct.colors[index].img
    });
});