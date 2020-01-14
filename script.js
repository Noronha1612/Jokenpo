function jogo() {
    $("#itensjokenpo").fadeOut(400)
    setTimeout(function(){ 
        $("#itensjokenpo").html(`<div id="jotxt"'>
                                    <div id="jo">JO</div>
                                    <div id="ken">KEN</div>
                                    <div id="po">PO</div>
                                </div>`) 
        $("#itensjokenpo").fadeIn()
        $("#jo, #ken, #po").hide()
        setTimeout(function(){
            $('#jo').show(300)
            setTimeout(function(){
                $("#ken").show(300)
                setTimeout(function(){
                    $("#po").show(300)
                    setTimeout(function(){
                        $('#itensjokenpo').hide(300)
                        let opjog = sessionStorage.getItem('opjog')
                        let opcomp = sessionStorage.getItem('opcomp')

                        let derrota = false
                        let vitoria = false
                        let empate = false

                        if (opjog === opcomp) empate = true
                        else if (opjog === 'tesoura' && opcomp === 'papel'|| opjog === 'pedra' && opcomp === 'tesoura' || opjog === 'papel' && opcomp === 'pedra') vitoria = true
                        else if (opcomp === 'tesoura' && opjog === 'papel'|| opcomp === 'pedra' && opjog === 'tesoura' || opcomp === 'papel' && opjog === 'pedra') derrota = true

                        if (empate) {
                            var classjog = 'draw'
                            var classcomp = 'draw'
                            var txthtmlfim = `
                            <h1>💥💥Empate!!💥💥</h1>
                            <h2>Você e o computador empataram</h2>
                            <h2>Clique no botão abaixo para jogar de novo</h2>
                            `
                        } else if (vitoria) {
                            var classjog = 'winner'
                            var classcomp = 'loser'
                            var txthtmlfim = `
                            <h1>🎉🎉Parabéns!!🎉🎉</h1>
                            <h2>Você conseguiu vencer o Computador</h2>
                            <h2>Clique no botão abaixo para jogar de novo</h2>
                            `
                        } else if (derrota) {
                            var classjog = 'loser'
                            var classcomp = 'winner'
                            var txthtmlfim = `
                            <h1>☠️☠️Que pena...☠️☠️</h1>
                            <h2>Dessa vez o computador venceu...</h2>
                            <h2>Clique no botão abaixo para jogar de novo</h2>
                            `
                        }

                        setTimeout(function(){
                            $('#itensjokenpo').html(`
                            <div id="indentifiers">
                                <div id="jogind">Jogador</div>
                                <div id="compind">Computador</div>
                            </div>
                    
                            <div id="opjog" class="items draw">
                                <div class="header">${opjog}</div>
                                <img src="maos/${opjog}.png">
                            </div>
                    
                            <div id="imgbattle" class="items"><img src="img.png"></div>
                    
                            <div id="resultadobox">
                    
                                <div id="txtfinal">
                                    ${txthtmlfim}
                                </div>
                    
                                <button id="returnbtn" onclick="retornar()">Jogar novamente</button>
                    
                            </div>
                    
                            <div id="opcomp" class="items draw">
                                <div class="header">${opcomp}</div>
                                <img src="maos/${opcomp}.png">
                            </div>
                            `)
                            $('#itensjokenpo').show(300)
                            setTimeout(function(){
                                $('#opjog').toggleClass('draw')
                                $('#opjog').toggleClass(classjog)
                                $('#opcomp').toggleClass('draw')
                                $('#opcomp').toggleClass(classcomp)
                            }, 300)
                        }, 300)
                    }, 300)
                }, 600)
            }, 600)
        }, 600)
    }, 400)
}

function select(op) {
    const opcoes = {
        0: 'tesoura',
        1: 'pedra',
        2: 'papel',
    }
    let opjog = opcoes[op]
    let keycomp = Math.floor(Math.random()*3)
    if (keycomp === 3) keycomp = 2
    let opcomp = opcoes[keycomp]
    sessionStorage.setItem('opcomp', opcomp)
    sessionStorage.setItem('opjog', opjog)
    jogo()
}

function retornar() {
    $("#itensjokenpo").hide(300)
    setTimeout(function(){
        $("#itensjokenpo").html(`
        <header>Jokenpô</header>
        <div id="itembox">
            <span id="tesoura" class="opc" onclick="select(0)"><img src="maos/tesoura.png"></span>
            <span id="pedra" class="opc" onclick="select(1)"><img src="maos/pedra.png"></span>
            <span id="papel" class="opc" onclick="select(2)"><img src="maos/papel.png"></span>
        </div>
        <footer>&copy;NoronhaProductions</footer>
        `)
        $("#itensjokenpo").show(300)
    }, 300)
}
