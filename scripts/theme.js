const body=document.querySelector("body")
const header__item=document.querySelectorAll(".header__link")
const product__text=document.querySelector(".text__poduct")


function light(){
    console.log("light")
    body.style.background="#8E9AAB"
    header__item.forEach(element => {
        element.style.color="white"
    });
    body.style.color="white"
    product__text.style.color="white"
}


function dark(){
    console.log("dark")
    body.style.background="white"
    header__item.forEach(element => {
        element.style.color="black"
    });
    body.style.color="black"
    product__text.style.color="black"
}