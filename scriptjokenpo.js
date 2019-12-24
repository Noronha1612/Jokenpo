function reiniciar() {
    document.getElementById('content').innerHTML = `
    <div id='txtselect'>Selecione sua opção</div>
    <div id='btns'>
        <span class="btn" onclick="(escolha('Tesoura'), aparecer())"><span class="txt">tesoura</span></span>
        <span class="btn" onclick="(escolha('Pedra'), aparecer())"><span class="txt">pedra</span></span>
        <span class="btn" onclick="(escolha('Papel'), aparecer())"><span class="txt">papel</span></span>
    </div>
    `
}

function escolha(id) {
    if (id == 'Papel') {
        sessionStorage.setItem('escolha', id)
    } else if (id == 'Pedra'){
        sessionStorage.setItem('escolha', id)
    } else if (id == 'Tesoura') {
        sessionStorage.setItem('escolha', id)
    }
    aparecer()
}

function jogo() {
    const opcoes = ['Papel', 'Pedra', 'Tesoura']
    let opcomp = opcoes[Math.floor(Math.random()*opcoes.length)]
    let opjog = sessionStorage.getItem('escolha')
    let [empate, vitoria, derrota] = [false, false, false]
    if (opjog == opcomp) empate = true
    else if (opjog == 'Pedra' && opcomp == 'Tesoura' || opjog == 'Tesoura' && opcomp == 'Papel' || opjog == 'Papel' && opcomp == 'Pedra') vitoria = true
    else if (opjog == 'Papel' && opcomp == 'Tesoura' || opjog == 'Pedra' && opcomp == 'Papel' || opjog == 'Tesoura' && opcomp == 'Pedra') derrota = true
    if (derrota) {
        document.getElementById('content').innerHTML = `<div id="batalha">
        <span class="perdedor" id='opjog'>${opjog}</span>
        <span class="bat" id='imagem'><img src="ec.png" alt=""></span class="bat">
        <span class="vencedor" id='opcomp'>${opcomp}</span class="bat">
    </div>
    <div id='interface'>
        <div id='msg'>
            <p>Que pena!!!</p>
            <p>Dessa vez o computador venceu...</p>
        </div>
        <div id='divbfinal'>
            <input id="btnfinal" type="button" value="Jogar novamente" onclick="reiniciar()">
        </div>
    </div>`
    }
    
    else if (vitoria) {
        document.getElementById('content').innerHTML = `<div id="batalha">
        <span class="vencedor" id='opjog'>${opjog}</span>
        <span class="bat" id='imagem'><img src="ec.png" alt=""></span class="bat">
        <span class="perdedor" id='opcomp'>${opcomp}</span class="bat">
    </div>
    <div id='interface'>
        <div id='msg'>
            <p>Parabéns!</p>
            <p>Você venceu o computador!</p>
        </div>
        <div id='divbfinal'>
            <input id="btnfinal" type="button" value="Jogar novamente" onclick="reiniciar()">
        </div>
    </div>`
    }
    else if (empate) {
        document.getElementById('content').innerHTML = `<div id="batalha">
        <span class="empate" id='opjog'>${opjog}</span>
        <span class="bat" id='imagem'><img src="ec.png" alt=""></span class="bat">
        <span class="empate" id='opcomp'>${opcomp}</span class="bat">
    </div>
    <div id='interface'>
        <div id='msg'>
            <p>Uuuuuuh</p>
            <p>Deu empate... Tente denovo!</p>
        </div>
        <div id='divbfinal'>
            <input id="btnfinal" type="button" value="Jogar novamente" onclick="reiniciar()">
        </div>
    </div>`
    }
    
    sessionStorage.clear()
}

function aparecer() {
    document.getElementById('content').innerHTML = `
    <span class='tit' id="jo"></span>
    <span class='tit' id="ken"></span>
    <span class='tit' id="po"></span>`
    setTimeout(function () { document.getElementById('jo').innerHTML = 'JO' }, 800)
    setTimeout(function () { document.getElementById('ken').innerHTML = 'KEN' }, 1600)
    setTimeout(function () { document.getElementById('po').innerHTML = 'PÔ' }, 2400)
    setTimeout(function () { jogo() }, 3300)
}
