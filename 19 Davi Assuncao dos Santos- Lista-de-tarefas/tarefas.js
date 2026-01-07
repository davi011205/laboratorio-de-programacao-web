let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

function insereTarefaNaPagina(tarefa) {
  let novaTarefaEl = document.createElement('li');
  let opcoesEL = document.querySelector('#nova-tarefa-categoria');
  let opcaoEscolhida = opcoesEL.value;
  let listaEl = document.querySelector('#lista-tarefas');
  let primeiraTarefaEl = listaEl.querySelector(':first-child');

  novaTarefaEl.innerHTML =  tarefa.nome;  
  novaTarefaEl.classList.add('item-tarefa');
  novaTarefaEl.classList.add(`categoria-${opcaoEscolhida}`);
  listaEl.insertBefore(novaTarefaEl, primeiraTarefaEl);

  if( tarefa.marcado == true) {
    novaTarefaEl.classList.add('marcado');
  }
}
tarefas.forEach(insereTarefaNaPagina);


let inputEl = document.querySelector('#nova-tarefa-nome');
let botaoEl = document.querySelector('#incluir-nova-tarefa');

function adicionaNovaTarefa() {  
  let textoEscrito = inputEl.value;

  tarefas = {
    nome: textoEscrito,
    categoria: 'outros',
    marcado: false
  }
  
  insereTarefaNaPagina(tarefas);
  inputEl.value = '';
  inputEl.focus();
};

botaoEl.addEventListener('click', () => { adicionaNovaTarefa(); });
inputEl.addEventListener('keyup', (event) => {
  let teclaClicada = event.key;
  if( teclaClicada === 'Enter') {
    adicionaNovaTarefa();
  }
});