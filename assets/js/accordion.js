function createList(...list){
    return `
    <p>${list}</p>
    `
}

function tec(nameTec,lista){
    return `
    <div class="accordion">
        <div class="contentBx">
            <div class="label">${nameTec}</div>
            <div class="content">
                ${lista}            
            </div>
        </div>
    </div>
    `
}

document.querySelector("#accordion").innerHTML = `
    ${tec("HTML")}
    ${tec("CSS")}
    ${tec("Javascript")}
    ${tec("SQL")}
    ${tec("PHP")}
`


const accordion = document.getElementsByClassName("contentBx")

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}