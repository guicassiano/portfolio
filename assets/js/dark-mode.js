const changeTheme = document.getElementById("change-theme")
const elementsLight = [...document.querySelectorAll(".nav-item a, #title a, #header, .bi, #main, #title-main, #title-main p,#title-main button,#about, h2, p, #skills, .skill,#projects,#contacts,.contacts small,#modal, .card-project, .card-footer")]

function toggleLight(element){
    element.classList.toggle("light")
}

changeTheme.addEventListener("change", ()=>{
    elementsLight.map((el)=>{
        toggleLight(el)
    })
})