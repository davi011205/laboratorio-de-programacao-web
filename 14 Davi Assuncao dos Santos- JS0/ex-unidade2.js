/*Exercicio 0.4: Entendedo o for of e "para cada"*/
function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
    let quantidade = 0;

    for (let elemento of elementos) {
        if (elemento === elementoSendoProcurado) {
            quantidade++;
        }
    }
    return quantidade;
}
escreva(0.4, 'numero de elementos', contandoElementosDoVetor([1, 5, 5], 5));                  
escreva(0.4, 'numero de elementos', contandoElementosDoVetor(['daniel', 'flávio'], 'joão'));  


// ----------------------------------------------------------------------------
/*Exercicio 0.5: Nome do mês dado seu número*/
function obtemNomeDoMes(numero) {
    if (numero < 1 || numero > 12) {
        escrevaMensagem(0.5, 'Mês inválido: ' + numero);
        return null;
    }

    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];
    
    return meses[numero-1];
}
escreva(0.5, 'mes', obtemNomeDoMes(12));


// ----------------------------------------------------------------------------
/*Exercicio 3: Velocidade e altura da bola em vários instantes t */
function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, n) {
    for(let i = 1; i <= n; i++) {
         escreva(3, 'h(' + i + ')', calculaAlturaBola(i, velocidadeInicial, gravidade));
         escreva(3, 'v(' + i + ')', calculaVelocidadeBola(i, velocidadeInicial, gravidade));
    }
}
calculaVelocidadeAlturaBola(50, 9.81, 20);


// ----------------------------------------------------------------------------
/*Exercicio 4: Somatório */
function somatorio(n) {
    let S = 0;
    
    for(let i = 2; i <= n; i+= 2) {
        S+= 1/i;
    }

    return S;
}
escreva(4, 's', somatorio(1));
escreva(4, 's', somatorio(10));
escreva(4, 's', somatorio(100));


// ----------------------------------------------------------------------------
// Exercício 5: Posição de um elemento no vetor
function obtemPosicaoDoElemento(vetor, elemento) {
    
    for(let i = 0; i <= vetor.length; i++) {
        if(vetor[i] === elemento) {
            return i;
            break;
        }
    }
     
    return null;
}
escreva(5, 'posicao', obtemPosicaoDoElemento(['azul', 'branco', 'cinza','preto','rosa',], 'preto'));
escreva(5, 'posicao', obtemPosicaoDoElemento(['1', '5', '2','4','3',], '6'));


// ----------------------------------------------------------------------------
// Exercício 6: Posição de um elemento no vetor
function calculaMediaEntreExtremos(vetor) {
    let menor = vetor[0];
    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    
    return ((menor + maior)/2);
}

escreva(6, 'media', calculaMediaEntreExtremos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function fibonacci(tamanhoSequencia) {
    let sequencia = [];
    

    escreva(7, 'Fib(' + tamanhoSequencia + ')', sequencia);
    return sequencia;0
}