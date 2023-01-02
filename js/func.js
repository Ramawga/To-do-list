const addtarefa = document.getElementById('addtarefa')
const modal = document.querySelector('.modal')
const titulo = document.getElementById('titulo')
const time1 = document.getElementById('time')
const time2 = document.getElementById('time2')
const mensagem = document.getElementById('mensagem')
const todo = document.querySelector('.todo')
const fechar = document.querySelectorAll('.fechar')
const todoSingle = document.querySelectorAll('.todo-single')

addtarefa.addEventListener("click", abrirModal)

document.addEventListener("click", function(e){
    const target = e.target.closest(".fechar"); 
    const check = e.target.closest(".todo-single")

    if(target){
        target.parentNode.style.display = 'none'
    }
    if(check){
        check.classList.toggle('checked');
    }
  });

function abrirModal(){
    modal.style.display = 'block'
}


function fecharModal(){
    if(titulo.value == ''){
        alert("Adicione um titulo a sua tarefa!")
    }else{
        let tituloTarefa = titulo.value
        let time1Tarefa = time1.value
        let time2Tarefa = time2.value
        let mensagemTarefa = mensagem.value
        
        let newdiv = document.createElement("div")
        newdiv.classList.add("todo-single")
    
        todo.appendChild(newdiv)
        newdiv.innerHTML += '<h1 class="fechar">X</h1>'
        newdiv.innerHTML += `<h1>${tituloTarefa}</h1>`
        newdiv.innerHTML += `<p>${mensagemTarefa}</p>`
        newdiv.innerHTML += `<span>${time1Tarefa} - ${time2Tarefa}</span>`
        modal.style.display = 'none'
    }
}





