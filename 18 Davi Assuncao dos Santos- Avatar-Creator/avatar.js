let paragrafoEl = document.querySelector('#avatar-nome');
let inputNomeEl = document.querySelector('#nome');
let corpoEl = document.querySelector('#avatar-corpo');
let cabecaEl = document.querySelector('#avatar-cabeca');
let inputCorEl = document.querySelector('#cor-pele');
let cabeloEl = document.querySelector('#avatar-cabelo');
let opcaoEL = document.querySelector('#cabelo');

inputNomeEl.addEventListener('change', () => {
    let inputNomeEl = document.querySelector('#nome');
    paragrafoEl.innerHTML = inputNomeEl.value
});

inputCorEl.addEventListener('change', (event) => {
    let corEscolhida = event.currentTarget.value;
    console.log(corEscolhida)
    cabecaEl.style.backgroundColor = corEscolhida;
    corpoEl.style.backgroundColor = corEscolhida;
}); 

opcaoEL.addEventListener('input', () => {
    cabeloEl.src = opcaoEL.value;
})