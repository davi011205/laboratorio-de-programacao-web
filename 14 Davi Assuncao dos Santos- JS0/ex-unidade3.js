// ----------------------------------------------------------------------------
// Exercício 0.6: Métodos úteis dos vetores
function metodosVetor(vetor) {
    vetor.sort();
    vetor.pop();
    vetor.unshift('abacate');

    return vetor;
}
escreva(0.6, 'teste', metodosVetor([4, 0, 9]));
escreva(0.6, 'teste', metodosVetor(['ana', 'Ana', '1ana', "1Ana"]));


// ----------------------------------------------------------------------------
// Exercício 0.7: Métodos úteis de string
function metodosString(string) {
    string = string.toUpperCase();
    string = string.replaceAll('O', 'A');
   
    return string;
}
escreva(0.7, 'teste', metodosString('davi'));
escreva(0.7, 'teste', metodosString('JoAo'));
escreva(0.7, 'teste', metodosString('o ovo de chocolate da maria eh preto'));


// ----------------------------------------------------------------------------
// Exercício 9: Escreve datas por extenso
function escreveDataPorExtenso(data) {
    let DataEscritoPorExtenso;

    data = data.split('/');
    DataEscritoPorExtenso = data[0] + ' de ' + obtemNomeDoMes(data[1]) + ' de ' + data[2]
   
    return DataEscritoPorExtenso;
}
escreva(9, 'teste', escreveDataPorExtenso('01/12/2021'))


// ----------------------------------------------------------------------------
// Exercício 10: Operações em string
function eliminaCaracteres(texto, caracteresParaEliminar) {
    
    for (let caractere of caracteresParaEliminar) {
        texto = texto.replaceAll(caractere, '');
    }

    return texto;
}
escreva(10, 'teste', eliminaCaracteres('correndo contra o tempo', 'coe'));

function substituiCaracteres(texto, caracteresProcura, caracteresSubstituirPor)  {
    
    for (let i = 0; i <= caracteresProcura.length; i++) {
        let caractereProcura = caracteresProcura[i];
        let caractereSubstituirPor = caracteresSubstituirPor[i];
        
        for (let j = 0; j <= texto.length; j++) {
            if (texto[j] === caractereProcura) {
                texto = texto.replaceAll(caractereProcura, caractereSubstituirPor);
            }
        }
    }

    return texto;
}
escreva(10, 'teste', substituiCaracteres('o sapo nao lava o pe', 'aoe', 'iiu'));

function inverteTexto(texto) {
    let textoInvertido = texto.split('');
    textoInvertido = textoInvertido.reverse();
    textoInvertido = textoInvertido.join("");
    
    return textoInvertido;
}
escreva(10, 'teste', inverteTexto('roma'));


// ----------------------------------------------------------------------------
// Desafio 11: Palíndromos
function verificaPalindromo(string) {
    
    if (string = inverteTexto(string)) {
        return true;
    } 

    return false;
}
escreva(11, 'teste', verificaPalindromo('A cara rajada da jararaca'));
escreva(11, 'teste', verificaPalindromo('Socorram-me, subi no ônibus em Marrocos'));


// ----------------------------------------------------------------------------
// Exercício 12: Funções como parâmetro 1
function dizOiPara(funcaoDeDarOi, nomeDaPessoa) {
    
    // veja que aqui, independente do nome da função
    // externa, invocamos ela como funcaoDeDarOi
    textoDoOi = funcaoDeDarOi(nomeDaPessoa);
    
    escrevaMensagem(12, '=========== Início do chat ===========');
    escrevaMensagem(12, textoDoOi);
    escrevaMensagem(12, '======================================');
    escrevaMensagem(12, '<br>');
}


function oiEmPortuguesFormal(nome) {
    return 'Oi Sr(a). ' + nome + ', como vai?';
}

let oiEmPortugues = function(nome) {
    return 'Oi ' + nome + ', blza?';
};


// dá oi para 'Daniel' de várias formas diferentes
dizOiPara(oiEmPortuguesFormal, 'Daniel');
dizOiPara(oiEmPortugues, 'Daniel');
dizOiPara(function(nome)  {
    return 'Hi ' + nome + ', how are you?';
}, 'Daniel');
dizOiPara(oiEmTurco, 'Davi');
dizOiPara(oiEmEspanhol, 'Davi');
dizOiPara(oiEmChines, 'Davi');

function oiEmTurco(nome) {
    return 'Selam ' + nome + ', nasılsın?';
}

function oiEmEspanhol(nome) {
    return 'Hola ' + nome + ', ¿cómo te va?';
}

function oiEmChines(nome) {
    return '你好 ' + nome + ', 你好吗？';
}


// ----------------------------------------------------------------------------
// Exercício 13: Funções como parâmetro 2
function aplicaOperacaoEmCadaElemento(operacao, vetor1, vetor2) {
let vetFinal = [];

    if (vetor1.length != vetor2.length) {
        return null;
    }

    else { 
        for(let i = 0; i< vetor1.length; i++) {
            vetFinal[i] = operacao(vetor1[i], vetor2[i]);
        }
    }
     
    return vetFinal;
}

function multiplica(a, b) {
    return a * b;
}

function subtrai(a, b) {
    return a - b;
}

escreva(13, 'teste', aplicaOperacaoEmCadaElemento(multiplica, vetor = [4, 2, -1, 10], vet = [10, 2, 3, 5]));