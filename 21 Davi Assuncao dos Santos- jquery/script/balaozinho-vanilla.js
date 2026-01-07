let marcacoes = document.querySelectorAll('.marcacao');
let balaoEl = document.querySelector('#balaozinho');
let marcacaoAtual;

for(let i = 0; i < marcacoes.length; i++) {
    marcacoes[i].addEventListener('mouseover', (event) => {
        let clicado = event.currentTarget;
        balaoEl.innerHTML = `<h2>${clicado.dataset.titulo}</h2><p>${clicado.dataset.conteudo}</p>`;
    });

    marcacoes[i].addEventListener('mouseout', () => balaoEl.innerHTML = '');

    marcacoes[i].addEventListener('mousemove', (event) => {
        balaoEl.style.left = `${event.pageX}px`;
        balaoEl.style.top = `${event.pageY}px`;
    });

    marcacoes[i].addEventListener('click', (event) => {
        clicado = event.currentTarget;
        marcacaoAtual = clicado;
    });
}

let larguraEl = document.querySelector('#marcacao-largura');
let alturaEl = document.querySelector('#marcacao-altura');
let yEl = document.querySelector('#marcacao-y');
let xEl = document.querySelector('#marcacao-x');

larguraEl.addEventListener('change', () => { 
    let valorDeLargura = larguraEl.value;
    marcacaoAtual.style.width = `${valorDeLargura}px`;
});

alturaEl.addEventListener('change', () => { 
    let valorDeAltura = alturaEl.value;
    marcacaoAtual.style.height = `${valorDeAltura}px`;
});

yEl.addEventListener('change', () => { 
    let valorDeY = yEl.value;
    marcacaoAtual.style.top = `${valorDeY}px`;
});

xEl.addEventListener('change', () => { 
    let valorDeX = xEl.value;
    marcacaoAtual.style.left= `${valorDeX}px`;
});