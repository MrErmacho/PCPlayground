let gds_item = document.createElement("li")
gds_item.classList.add("gds__item")
const gds_spawn = document.querySelector(".gds__list")
let gds_name = document.createElement('h1')
let gds_h1 = document.createTextNode('Игра + 2 DLC')
gds_name.appendChild(gds_h1)
let gds_img = document.createElement('img')
gds_img.src = "img/3.jpg"
gds_img.classList.add("gds_img")
gds_name.classList.add("gds_name")
let gds_text = document.createElement('p')
let gds_h2 = document.createTextNode('3200')
gds_text.appendChild(gds_h2)
gds_text.innerHTML = 3200 + " &#8381"
gds_text.classList.add("gds_text")
let button_delete = document.createElement('button')
let gds_delete = document.createTextNode('удалить')
button_delete.setAttribute('onclick','del()')
button_delete.classList.add("button_delete")
button_delete.appendChild(gds_delete)
let f1_item = document.querySelectorAll('.gds__item')[0]


function spawning() {
    gds_spawn.appendChild(gds_item)
    gds_item.appendChild(gds_name)
    gds_item.appendChild(gds_img)
    gds_item.appendChild(gds_text)
    gds_item.appendChild(button_delete)
    f1_item.classList.add("hide1")
}


function del() {
    button_delete.parentNode.remove();
    f1_item.classList.remove("hide1")
}