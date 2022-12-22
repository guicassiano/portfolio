const menu = document.getElementById("menu")
const menuMobile = document.getElementById("menuMobile")

menu.addEventListener("click", ()=>{
    menuMobile.classList.toggle("menu-mobile")
})