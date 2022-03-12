// Jogo Blackjack (21) Projeto Labenu - Bruno de Salles M.

console.log("Boas vindas ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = [comprarCarta(), comprarCarta()]
   const cartaComputador = [comprarCarta(), comprarCarta()]
   const pontosUsuario = [cartaUsuario[0].valor + cartaUsuario[1].valor]
   const pontosComputador = [cartaComputador[0].valor + cartaComputador[1].valor]
   console.log(`As suas cartas foram: ${cartaUsuario[0].texto} e ${cartaUsuario[1].texto} pontuação final: ${pontosUsuario}`)
   console.log(`As cartas do computador foram: ${cartaComputador[0].texto} e ${cartaComputador[1].texto} pontuação final: ${pontosComputador}`)
   if (pontosUsuario > pontosComputador) {
      console.log("O Usuário venceu!!!")
   } else if (pontosUsuario < pontosComputador) {
      console.log("O computador venceu!!!")
   } else if (pontosUsuario === pontosComputador) {
      console.log("O jogo terminou em empate")
   }
   else {
      console.log("Não houve um vencedor")
   }
}
else {
   console.log("O jogo acabou")
}

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'S
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
