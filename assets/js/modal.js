const fade = document.getElementById("fade")
const modal = document.getElementById("modal")
const btnOpenModal = document.getElementById("open-modal")
const btnCloseModal = document.getElementById("close-modal")

btnOpenModal.addEventListener("click", (evt)=>{
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
})

btnCloseModal.addEventListener("click", ()=>{
    modal.classList.add("hide")
    fade.classList.add("hide")
})