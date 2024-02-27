const menuMobile = document.querySelector("#menu-mobile")
const navbarMobile = document.querySelector("#navbar-mobile")
const menuMobileClose = document.querySelector("#menu-mobile-close")
const navItem = [...document.querySelectorAll(".nav-item")]

menuMobile.addEventListener("click", ()=>{
    navbarMobile.classList.toggle("navbar-ativo")
    menuMobile.style.display = "none"
    menuMobileClose.style.display = "block"
})

menuMobileClose.addEventListener("click", ()=>{
    navbarMobile.classList.remove("navbar-ativo")
    menuMobile.style.display = "block"
    menuMobileClose.style.display = "none"
})

navItem.map((el)=>{
    el.addEventListener("click", ()=>{
        navbarMobile.classList.remove("navbar-ativo")
    menuMobile.style.display = "block"
    menuMobileClose.style.display = "none"
    })
})