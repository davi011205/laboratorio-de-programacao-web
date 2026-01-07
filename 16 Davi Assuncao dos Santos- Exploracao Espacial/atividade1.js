// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let BotaoMaisEL = document.querySelectorAll('.botao-expandir-retrair');

for(let i = 0; i < BotaoMaisEL.length; i++) { 
    BotaoMaisEL[i].addEventListener('click', function(event) {
        let BotaoMais = event.currentTarget;
        let colocou = BotaoMais.parentNode.classList.toggle('expandido');
        
        if(colocou === true) {
            BotaoMais.innerHTML = '-';
        }
        
        if(colocou === false) {
            BotaoMais.innerHTML = '+';
        }
    });  
}