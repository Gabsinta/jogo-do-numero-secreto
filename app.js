let numerosSorteados = []
let numeroMaximo = 50
let numeroSecreto = numeroAletorio();
let tentativas = 1;

function exibirNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1})
}

function TextoInicial() {
    exibirNaTela('h1', 'Jogo do Número Secreto!');
    exibirNaTela('p', `Escolha um Número de 1 a ${numeroMaximo}`);
}

TextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o Número Secreto com ${tentativas} ${palavraTentativa} `;
        exibirNaTela('h1', 'Parabéns!!');
        exibirNaTela('p', `${mensagem}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela('p', 'O Número Secreto é menor')
        } else {
            exibirNaTela('p', 'O Número Secreto é maior')
        }
        tentativas++ ;
        LimparTela() ;
    }
}

function numeroAletorio() {
    let numeroEscolido = parseInt(Math.random() * numeroMaximo + 1);
    let numeroUsado = numerosSorteados.length;
    
    if (numeroUsado == numeroMaximo){
        numerosSorteados [0]
    }

    if(numerosSorteados.includes(numeroEscolido)){
        return numeroAletorio()
    } else {
        numerosSorteados.push(numeroEscolido);
        return numeroEscolido;

}}

function LimparTela() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAletorio();
    TextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    LimparTela()
}