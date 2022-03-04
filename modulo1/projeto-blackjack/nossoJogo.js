// Jogo Blackjack (21) Projeto Labenu - Bruno de Salles M.

console.log("Boas vindas ao jogo de Blackjack!")
   if(confirm("Quer iniciar uma nova rodada?")) {
   }
   else{
console.log("O jogo acabou")
   }
   const cartaUsuario = comprarCarta()
   const cartaComputador = comprarCarta()
   const novaCartaUsuario = comprarCarta()
   const novaCartaComputador = comprarCarta()
   const pontosUsuario = cartaUsuario.valor + novaCartaUsuario.valor
   const pontosComputador = cartaComputador.valor + novaCartaComputador.valor
console.log(`As suas cartas foram: ${cartaUsuario.texto} e ${novaCartaUsuario.texto} pontuação final: ${pontosUsuario}`)
console.log(`As cartas do computador foram: ${cartaComputador.texto} e ${novaCartaComputador.texto} pontuação final: ${pontosComputador}`)
   if(pontosUsuario > pontosComputador){
console.log("O Usuário venceu!!!")
   }else if(pontosUsuario < pontosComputador){
console.log("O computador venceu!!!")
   }else if(pontosUsuario === pontosComputador){
console.log("O jogo terminou em empate")
   }
   else {
console.log("Não houve um vencedor")
}   


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
