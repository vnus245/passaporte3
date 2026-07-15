let nivelEscolhido = "";
let erros = 0;

function irParaDificuldade() {
    trocarTela('telaInicial', 'telaDificuldade');
}

function voltarParaInicio() {
    trocarTela('telaDificuldade', 'telaInicial');
}

function definirNivel(nivel) {
    nivelEscolhido = nivel;
    document.querySelectorAll('.botao-nivel').forEach(b => b.classList.remove('selecionado'));
    event.target.classList.add('selecionado');
}

function iniciarJogo() {
    if (!nivelEscolhido) return alert("Escolha um nível primeiro!");
    document.getElementById('nivelAtual').textContent = nivelEscolhido.toUpperCase();
    trocarTela('telaDificuldade', 'telaMapa');
}

function trocarTela(origem, destino) {
    document.getElementById(origem).classList.remove('ativa');
    document.getElementById(destino).classList.add('ativa');
}

function voltarParaDificuldade() {
    trocarTela('telaMapa', 'telaDificuldade');
}

function voltarParaMapa() {
    trocarTela('telaAeroporto', 'telaMapa');
}

function abrirPais(codigo) {
    alert(`Abrindo informações de: ${codigo.toUpperCase()}`);
    trocarTela('telaMapa', 'telaAeroporto');
}

function abrirQuiz() {
    document.getElementById('telaQuiz').classList.add('aberto');
}

function reiniciarJogo() {
    erros = 0;
    nivelEscolhido = "";
    trocarTela('telaDeportacao', 'telaInicial');
}
