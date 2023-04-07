
alert("Boas vindas ao jogo de BlackJack!")

let cartasUser = []
let cartasPC = []

let somaUser = 0
let somaPc = 0

let txtUser
let txtPc

let check = true

function verificaAs () {
    if(cartasUser[0].texto === "A" && cartasUser[1].texto ==="A"){
        cartasUser = []
        cartasPC = []
        
        for (let i = 0; i < 2; i++) {
            cartasUser.push(comprarCarta())
        }
        for (let i = 0; i < 2; i++) {
            cartasPC.push(comprarCarta())
        }
    }else if(cartasPC[0].texto === "A" && cartasPC[1].texto ==="A"){
        cartasUser = []
        cartasPC = []
        
        for (let i = 0; i < 2; i++) {
            cartasUser.push(comprarCarta())
        }
        for (let i = 0; i < 2; i++) {
            cartasPC.push(comprarCarta())
        }
    }
}

function somaCartas () {
    somaUser = 0
    somaPc = 0

    for (let i = 0; i < cartasUser.length; i++) {
        somaUser += cartasUser[i].valor       
    }
    for (let i = 0; i < cartasPC.length; i++) {
        somaPc += cartasPC[i].valor       
    }
}

function lertxtUser () {
    txtUser = ""
    for (const txt of cartasUser) {
        txtUser += txt.texto + ""
    }
}
function lertxtPc() {
    txtPc = ""
    for (const txt of cartasPC) {
        txtPc += txt.texto + ""
    }
}


function inicioJogo () {
    if (confirm("Deseja jogar BlackJack?")) {
        
        cartasUser.push(comprarCarta())
        cartasUser.push(comprarCarta())
        cartasPC.push(comprarCarta())
        cartasPC.push(comprarCarta())
        
        verificaAs()
        somaCartas()
        lertxtUser()
        lertxtPc()

        while (somaUser < 21 && check === true) {
            if (confirm(`Suas cartas são ${txtUser}.\nA carta revelada do computador é ${cartasPC[0].texto}.\nDeseja comprar uma nova carta?`)) {
                cartasUser.push(comprarCarta())
                lertxtUser()
                somaCartas()
            }else{
                while (somaPc < somaUser) {
                    cartasPC.push(comprarCarta())
                    lertxtPc()
                    somaCartas()
                }
                check = false
            }
        }
        let mensagem = ""
    if (somaUser === somaPc) {
        mensagem = "Empate!"        
    }else if (somaPc > 21 || (somaUser > somaPc && somaUser <= 21)) {
        mensagem = "Parabéns, você ganhou! =)"
    }else if (somaUser > 21 || (somaPc > somaUser && somaPc <= 21)) {
        mensagem = "O computador ganhou! =( "
    }

    alert(`Suas cartas são ${txtUser}.\n ==> Total: ${somaUser}.\nAs cartas do computador são ${txtPc}.\n ==> Total: ${somaPc}.\n${mensagem}`)
       
    }else{
        alert("O jogo acabou!")
    }
}
inicioJogo()  