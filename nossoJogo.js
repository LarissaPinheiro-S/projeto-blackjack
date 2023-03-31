/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas-vindas ao jogo de BlackJack!")

function user () {
if(confirm("Quer iniciar uma nova rodada?")) { 
  
  //------------------------------CARTAS DO USUARIO----------------------------------------------------------------  
    const carta1 = comprarCarta()
    let userTxt1 = carta1.texto
    let userValor1 = carta1.valor

  
    const carta2 = comprarCarta()
    let userTxt2 = carta2.texto
    let userValor2 = carta2.valor
    let somaU = Number(userValor1 + userValor2)
      console.log(`Usuario - cartas: ${userTxt1} ${userTxt2} - (TOTAL: ${somaU})`)
    
//------------------------------CARTAS DO COMPUTADOR------------------------------------------------------------      
  
    const carta3 = comprarCarta()
    let pcTxt1 = carta3.texto
    let pcValor1 = carta3.valor

  
    const carta4 = comprarCarta()
    let pcTxt2 = carta4.texto
    let pcValor2 = carta4.valor
    let somaP = Number(pcValor1 + pcValor2)
      console.log(`Computador - cartas: ${pcTxt1} ${pcTxt2} - (TOTAL: ${somaP})`)

//------------------------------------CONDIÇÃO------------------------------------------------------------ 
    if(somaU > somaP || somaP > 21) {
        console.log(`\nO usuário ganhou!`)
    } else if (somaP > somaU || somaU > 21){
        console.log(`\nO computador ganhou!`)
    } else {
        console.log(`\nEmpate!`) 
    }
          
 } else { 
   console.log("O jogo acabou")
 } 
}
user() 
 