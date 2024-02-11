let btn_state = false
const btn__buing=document.getElementById("btn__buing")


let product_price =document.querySelector('.product__price')
let basket_cost =document.querySelector('.price__cost')
console.log(product_price)


function buy() {
    console.log("buy")
    if (btn_state === false) {
        btn__buing.innerHTML = "В корзине";
        btn__buing.style.background = "green";
    btn_state=true
    } 
    else{
        btn__buing.innerHTML = "Добавить в корзину 3200&#8381";
        btn__buing.style.background = "orange";
    btn_state=false
    }
}