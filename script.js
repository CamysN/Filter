import { complementArray, complementFunction, complementObject, complementDom, complementEscopo, complementModulos} from "./script1.js";


const filterElement  = document.querySelector("input")
const cards = document.querySelectorAll("li")
const moreSubjects = document.querySelectorAll(".page-subjects")

moreSubjects.forEach(subject => {
    subject.addEventListener('click' , function(event){
      const value = event.target.getAttribute("value");

      localStorage.setItem("selectedValue",value)
    })
});

document.addEventListener('DOMContentLoaded',function(){
  
   if(window.location.pathname.includes("index1.html")){
    
    const value = localStorage.getItem("selectedValue")
    const iconSubject = document.querySelector('#header-1 #subject i.ph')
    const titleSubject = document.querySelector('#title-subject')
    const conceptDescription = document.querySelector('#concept-description')
    const subSubjects = document.querySelector('#sub-subject')
    const subjectDescription = document.querySelector('#subject-description')
    const example = document.querySelector('#example')
    const content = document.querySelector('#content')
    
    
    switch(value){
      case "1":
        iconSubject.classList.add('ph-package')
        titleSubject.textContent = "Array"
        conceptDescription.textContent = "O array é um vetor representado por colchetes [], que possibilita armazenar mais de um valor dentro dele. Os elementos de u array são numerados de acordo com sua posição dentro dele com isso é possível selecionar apenas um elemento separadamente apenas colocando o numero de sua posição dentro dos colchetes."
        subSubjects.textContent = "Estrutura de um array"
        subjectDescription.textContent = "O array é representado por colchetes e dentro dele são guardados valores, além disso um array pode ser armazenado dentro de uma variável e quando for necessária a sua utilização pode ser chamado pelo nome da variável em que foi atribuido."
        example.innerHTML = '<img src="img/array-example1.1.png" class="img-example"> <img src="img/array-example1.2.png" class="img-example">'
        content.innerHTML += complementArray;
        break
      case "2":
        iconSubject.classList.add('ph-clipboard-text')
        titleSubject.textContent = "Object"
        conceptDescription.textContent = "Objetos são coleções de propriedades, essas propriedades possuem chave e valor."
        subSubjects.textContent = "Estrura de um objeto"
        subjectDescription.textContent = "Um objeto assim como um array pode ser armazenado dentro de uma variável, assim quando for necessário sua utilização ele será chamado pelo nome da variável."
        example.innerHTML = '<img src="img/object-example1.1.jpeg" class="img-example"> <img src="img/object-example1.2.jpeg" class="img-example">'
        content.innerHTML += complementObject;
        break
      case "3":
        iconSubject.classList.add('ph-play-circle')
        titleSubject.textContent = "Functions"
        conceptDescription.textContent = "Função é um conjunto de instruções que executa uma tarefa, que para poder usá-la você precisa defini-la em algum lugar do escopo do que qual você quiser chamá-la."
        subSubjects.textContent = "Function declaration"
        subjectDescription.textContent = "É a estrutura básica de uma função, que possui seu nome , parâmetro e sua execução dentro dela."
        example.innerHTML = '<img src="img/function-exampl1.1.jpeg" class="img-example"> <img src="img/function-example1.2.jpeg" class="img-example">'
        content.innerHTML += complementFunction;
        break
      case "4":
        iconSubject.classList.add('ph-tree-evergreen')
        titleSubject.textContent = "DOM"
        conceptDescription.textContent = "O DOM no javaScript funciona como um representador dos documentos HTML,podendo por meio dele fazer alterações na estrutura do documento, estilo ou conteúdo, também podemos manipular eventos pelo DOM para afetar o HTML ou CSS. O DOM funciona como uma arvore. "
        subSubjects.textContent = "Eventos DOM"
        subjectDescription.textContent = "Abaixo tem um exemplo de como funciona a arvore Dom."
        example.innerHTML = '<img src="img/dom-example1.1.jpeg" class="img-example">'
        content.innerHTML += complementDom;
        break
      case "5":
        iconSubject.classList.add('ph-lego')
        titleSubject.textContent = "Escopos"
        conceptDescription.textContent = "Escopo é referente ao contexto que uma variável ou função tem visibilidade e pode ser referenciada."
        subSubjects.textContent = "Escopo local"
        subjectDescription.textContent = "No escopo local a variável só pode ser referenciadas no escopo que ela foi declarada ou em escopos filhos ao escopo pai."
        example.innerHTML = '<img src="img/escopo-example1.1.jpeg" class="img-example"><img src="img/escopo-example1.2.jpeg" class="img-example">'
        content.innerHTML += complementEscopo
        break
      case "6":
        iconSubject.classList.add('ph-file-arrow-up')
        titleSubject.textContent = "Módulos"
        conceptDescription.textContent = "Módulos são o uso de declarações de um arquivo javascript em outro através do uso do export e import, que possibilita importar uma declaração de um arquivo e exportar para usar em outro"
        subSubjects.textContent = "Como funciona"
        example.innerHTML = '<img src="img/modulo-example1.1.jpeg" class="img-example"><img src="img/modulo-example1.2.jpeg" class="img-example"><img src="img/modulo-example2.1.jpeg" class="img-example"><img src="img/modulo-example2.2.jpeg" class="img-example">'
        content.innerHTML += complementModulos;
        break
    }
  }
})

filterElement.addEventListener('input', filterCards)

function filterCards(){
  if(filterElement.value === ''){
    for(let card of cards){
      card.style.display = "block"
    }
  }else{
    for(let card of cards){
      let title = card.querySelector('h2')
      title = title.textContent.toLocaleLowerCase()
      let filterText = filterElement.value.toLowerCase()
      card.style.display = title.includes(filterText)?"block":"none";
    }
  }   
}