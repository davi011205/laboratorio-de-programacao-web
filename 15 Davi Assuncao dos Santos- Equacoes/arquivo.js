//Exercício 2: clique no botão//
let botaoResolver = document.querySelector('button'); 
let ResultDelta = document.querySelector('#resultado-delta');
let ResultX1 = document.querySelector('#resultado-x1');
let ResultX2 = document.querySelector('#resultado-x2');
//desafio 2//
let NumeroDeRaizes = document.querySelector('#quantidade-de-raizes');
let PosicaoDaParabola = document.querySelector('#parabola');
let PosicaoXeY = document.querySelector('#posicao-do-vertice');

function CalculoEquacaoSegundoGrau() {
    //Exercício 3: cálculo do discriminante (Δ)//
    let valorDeA = document.querySelector('#coeficiente-a');
    let ValA = valorDeA.value;
    
    //Desafio 1: verificando a !== 0//
    if (ValA == 0) {
        window.alert('Colando? Que bonito ein... mas caso não tenha estudado, se "a = 0" a equacão nao é do segundo Grau !!!');
        return;
    }

    let valorDeB = document.querySelector('#coeficiente-b');
    let ValB = valorDeB.value;

    let valorDeC = document.querySelector('#coeficiente-c');
    let ValC = valorDeC.value;

    let delta = ValB**2 - 4 * ValA * ValC;

    //Exercício 4: cálculo das raízes//
    ResultDelta.value = delta;

    if (delta >= 0) {
       let x1 = (-ValB + Math.sqrt(delta)) / (2 * ValA);
       let x2 = (-ValB - Math.sqrt(delta)) / (2 * ValA);
       ResultX1.value = x1.toFixed(2);
       ResultX2.value = x2.toFixed(2);
    }

    if (delta < 0) {
        ResultX1.value = '';
        ResultX2.value = '';
    }
    
    //resto do desafio 2//
    if (delta == 0) {
        NumeroDeRaizes.value = 0;
    } 
    else {
        NumeroDeRaizes.value = 2;
    }

    if (ValA.value > 0) {
        PosicaoDaParabola.value = "Para cima";
    } 
    else {
        PosicaoDaParabola.value = "Para baixo";
    }

    let x = -ValB / 2 * ValA;
    let y = -delta / 4 * ValA;
    PosicaoXeY.value = "x: " + x + " y: " + y;

}; 

botaoResolver.addEventListener('click', CalculoEquacaoSegundoGrau);


