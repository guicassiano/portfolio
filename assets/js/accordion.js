function createList(...list){
    return `
    <li>${list}</li>
    `
}

function tec(nameTec,lista){
    return `
    <div class="accordion">
        <div class="contentBx">
            <div class="label">${nameTec}</div>
            <div class="content">
            <ul>
                ${lista}
            </ul>
            </div>
        </div>
    </div>
    `
}

document.querySelector("#accordion").innerHTML = `
    ${tec("HTML",createList("a")+createList("b"))}
`


const accordion = document.getElementsByClassName("contentBx")

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}