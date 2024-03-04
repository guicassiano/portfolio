function cardProject(nomeProject,id,idBtn,...icons){
    return `    
<div class="card-project" id="${id}">
    <div class="card-body">
    <div class="icon-skill">
    ${icons}
    </div>
    </div>
    <div class="card-footer">
    <p>${nomeProject}</p>
        <button id="${idBtn}" class="btn-more">ver mais</button>
    </div>
</div>
    `
}

document.querySelector("#projects").innerHTML = `
<h2>Projetos</h2>
${cardProject("fetch-api","cardFetchApi","btnFetchApi","<img src='./assets/img/html-5.png' alt='icone html'>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
${cardProject("nlw copa","cardNlwCopa","btnNlwCopa","<img src='./assets/img/html-5.png' alt='icone html'>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
${cardProject("dark mode","cardDarkMode","btnDarkMode","<img src='./assets/img/html-5.png' alt=''>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
${cardProject("calculadora","cardCalculadora","btnCalculadora","<img src='./assets/img/html-5.png' alt=''>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
${cardProject("cronômetro","cardCronometro","btnCronometro","<img src='./assets/img/html-5.png' alt=''>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
${cardProject("relogio digital","cardRelogioDigital","btnRelogioDigital","<img src='./assets/img/html-5.png' alt=''>","<img src='./assets/img/css-3.png' alt='icone css'>","<img src='./assets/img/script-java.png' alt='icone js'>")}
`

function contentModal(imgProject,titleProject,paragraphProject,repositorio){
    return `
    <div class="img-modal">
                ${imgProject}
            </div>
    
            <div class="texts-modal">
                <div class="header-text">
                    <h3>${titleProject}</h3>
                    <button class="close-modal"><img src="./assets/img/close.png" alt="Botão de fechar"></button>
                </div>
                <div class="modal-paragrafo">
                    ${paragraphProject}
                </div>
            </div>
            <div class="btn-modal">
                <a href="${repositorio}" target="_blank" class="btn-repositorio">Acessar Repositório</a>
            </div>
    `
}

const modalFetchApi = document.createElement("div")
modalFetchApi.setAttribute("id", "modalFetchApi")
modalFetchApi.setAttribute("class", "modal hide")
modalFetchApi.innerHTML = contentModal("<img src='./assets/img/fetch-api.png' alt='imagem do projeto'></img>","Fetch-api", "Blog com layout simples com foco em integrar uma API utilizando o Fetch API, onde é pego os títulos, paragrafos e comentários de cada post.","https://github.com/guicassiano/fetch-api.git")

const modalNlwCopa = document.createElement("div")
modalNlwCopa.setAttribute("id", "modalNlwCopa")
modalNlwCopa.setAttribute("class", "modal hide")
modalNlwCopa.innerHTML = contentModal("<img src='./assets/img/nlw-copa.jpg' alt='imagem do projeto'></img>","nlw copa", "Projeto desenvolvido em um evento da Rocketseat para aprimoramento das habilidades em HTML, CSS e JavaScript. O projeto lista os resultados dos jogos da copa do mundo de 2022.","https://github.com/guicassiano/nlw-copa.git")

const modalDarkMode = document.createElement("div")
modalDarkMode.setAttribute("id", "modalDarkMode")
modalDarkMode.setAttribute("class", "modal hide")
modalDarkMode.innerHTML = contentModal("<img src='./assets/img/dark-mode.png' alt='imagem do projeto'></img>","Dark Mode","Esse projeto tem como funcionalidade demonstrar o uso do modo escuro em uma página e salvar as preferências de tema escuro ou claro utilizando LocalStorage.","https://github.com/guicassiano/dark-mode.git")

const modalCalculadora = document.createElement("div")
modalCalculadora.setAttribute("id", "modalCalculadora")
modalCalculadora.setAttribute("class", "modal hide")
modalCalculadora.innerHTML = contentModal("<img src='./assets/img/calculadora.png' alt='imagem do projeto'></img>","Calculadora JS","Calculadora criada utilizando JavaScript POO, com o objetivo de aprimorar a habilidade em JavaScript POO.","https://github.com/guicassiano/calculadora.git")

const modalCronometro = document.createElement("div")
modalCronometro.setAttribute("id", "modalCronometro")
modalCronometro.setAttribute("class", "modal hide")
modalCronometro.innerHTML = contentModal("<img src='./assets/img/cronometro.png' alt='imagem do projeto'></img>","Cronômetro JS","Cronômetro criado utilizando a linguagem JavaScript, com o objetivo de aprimorar a habilidade em manipulação de data e hora.","https://github.com/guicassiano/cronometro.git")

const modalRelogioDigital = document.createElement("div")
modalRelogioDigital.setAttribute("id", "modalRelogioDigital")
modalRelogioDigital.setAttribute("class", "modal hide")
modalRelogioDigital.innerHTML = contentModal("<img src='./assets/img/relogio-digital.png' alt='imagem do projeto'></img>","Relógio Digital","Relógio Digital criado utilizando a linguagem JavaScript, com o objetivo de aprimorar a habilidade em manipulação de data e hora.","https://github.com/guicassiano/relogio-digital.git")

document.body.appendChild(modalNlwCopa)
document.body.appendChild(modalDarkMode)
document.body.appendChild(modalCalculadora)
document.body.appendChild(modalCronometro)
document.body.appendChild(modalRelogioDigital)
document.body.appendChild(modalFetchApi)

const fade = document.getElementById("fade")
const modal1 = document.querySelector("#modalNlwCopa")
const modal2 = document.querySelector("#modalDarkMode")
const modal3 = document.querySelector("#modalCalculadora")
const modal4 = document.querySelector("#modalCronometro")
const modal5 = document.querySelector("#modalRelogioDigital")
const modal6 = document.querySelector("#modalFetchApi")
const openNlwCopa = document.querySelector("#btnNlwCopa")
const openDarkMode = document.querySelector("#btnDarkMode")
const openCalculadora = document.querySelector("#btnCalculadora")
const openCronometro = document.querySelector("#btnCronometro")
const openRelogioDigital = document.querySelector("#btnRelogioDigital")
const openFetchApi = document.querySelector("#btnFetchApi")
const btnCloseModal = [...document.querySelectorAll(".close-modal")]

openFetchApi.addEventListener("click", (evt)=>{
        fade.classList.toggle("hide")
        modal6.classList.toggle("hide")
})
openNlwCopa.addEventListener("click", (evt)=>{
        fade.classList.toggle("hide")
        modal1.classList.toggle("hide")
})

openDarkMode.addEventListener("click", (evt)=>{
        fade.classList.toggle("hide")
        modal2.classList.toggle("hide") 
})

openCalculadora.addEventListener("click", (evt)=>{
        fade.classList.toggle("hide")
        modal3.classList.toggle("hide") 
})

openCronometro.addEventListener("click", (evt)=>{
    fade.classList.toggle("hide")
    modal4.classList.toggle("hide") 
})

openRelogioDigital.addEventListener("click", (evt)=>{
    fade.classList.toggle("hide")
    modal5.classList.toggle("hide") 
})

btnCloseModal.map((el)=>{
  el.addEventListener("click", ()=>{
    modal1.classList.add("hide")
    modal2.classList.add("hide")
    modal3.classList.add("hide")
    modal4.classList.add("hide")
    modal5.classList.add("hide")
    modal6.classList.add("hide")
    fade.classList.add("hide")
})  
})