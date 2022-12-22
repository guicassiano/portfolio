function createList(...list){
    return `
    <p>${list}</p>
    `
}

function tec(iconTec,nameTec,lista){
    return `
    <div class="accordion">
        <div class="contentBx">
            <div class="label"><img class="icon-tec" src="assets/img/${iconTec}.png">${nameTec}</div>
            <div class="content">
                ${lista}            
            </div>
        </div>
    </div>
    `
}

document.querySelector("#accordion").innerHTML = `
    ${tec("html-5","HTML",createList("Semântica")+createList("Títulos e Páragrafos")+createList("Listas")+createList("Elementos Genéricos")+createList("Links")+createList("Tabelas")+createList("Tag meta")+createList("Elementos de mídia")+createList("Formulários")+createList("Atributos Globais"))}

    ${tec("css-3","CSS",createList("Seletores")+createList("Cores")+createList("Unidades de medidas")+createList("Propriedade background")+createList("Propriedade border")+createList("Propriedade margin")+createList("Propriedade padding")+createList("Box Model")+createList("Gradientes")+createList("Sombras")+createList("Propriedade position")+createList("Propriedade overflow")+createList("Propriedade transition")+createList("Propriedade animation")+createList("Propriedade box-sizing")+createList("Formatações de textos")+createList("Formatações de fontes")+createList("Formatações de listas")+createList("Propriedade outline")+createList("Propriedade display")+createList("Transformações 2D")+createList("Transformações 3D")+createList("Pseudo-classes")+createList("Pseudo elements")+createList("Layout Responsivo")+createList("Flexbox")+createList("Grid"))}
    
    ${tec("script-java","Javascript",createList("Sintaxe")+createList("Tipos de Dados")+createList("Variáveis")+createList("Funções")+createList("Operadores Matemáticos")+createList("Operadores Relacionais")+createList("Operadore Lógicos")+createList("Operador Ternário")+createList("Operador typeof")+createList("Operador spread")+createList("if e if else")+createList("switch case")+createList("Loop for")+createList("Loop while e do while")+createList("Declarações break e continue")+createList("Manipulação do DOM")+createList("Método map")+createList("Método filter"))}
    
    ${tec("servidor-sql","SQL",createList("Tipos de Dados")+createList("Comando create")+createList("Comando insert into")+createList("Comando update")+createList("Comando delete")+createList("Comando select")+createList("Cláusula from")+createList("Cláusula where")+createList("inner join")+createList("group by")+createList("order by")+createList("Operadores and,or e not")+createList("like"))}
    
    ${tec("php","PHP",createList("Sintaxe")+createList("Variáveis")+createList("Tipos de  Dados")+createList("Arrays")+createList("if e else")+createList("Switch case")+createList("Operadores Aritméticos")+createList("Operadores de Incremento e Decremento")+createList("Operadores de Atribuição")+createList("Operadores de Comparação")+createList("Operadores Lógicos")+createList("while e do while")+createList("for e foreach")+createList("Funções")+createList("Método POST e GET")+createList("Sessions")+createList("Include e Require")+createList("CRUD"))}
`


const accordion = document.getElementsByClassName("contentBx")

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}