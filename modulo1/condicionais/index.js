// Exercícios de interpretação de código 23/02/2022

// 1 -
//A - O código realiza uma pergunta ao usuário solicitando um número
// ao inserir o número o mesmo realiza uma divisão por 2 e confirma se
// o resultado da divisão tem resto zero.
//B - Ele apresenta a resposta com números divisíveis por 2 e com o
//resultado da divisão com resto zero. Normalmente números pares.
//C - Para números não divisíveis por 2 e com resultado diferente de zero,
//normalmente números ímpares

//2 - 
//A - O código reprenseta uma função case que apresenta uma lista de 
//frutas ao qual o prompt pergunta ao usuário qual fruta deseja consultar
//o valor da mesma. Ao inserir o nome da fruta no prompt o mesmo retona no
//console a informação do nome da fruta e o seu respectivo valor.
//B - Retorna no console o nome da fruta desejada e o valor de R$2,25
//C - Retorna no console o nome da fruta desejada e o valor de R$5,50 e
//ao descomentar o break ele retornaria o valor direto do último item
//default com o preco de R$5,00.

//3 - 
//A - Está solicitando ao usuário um número para fazer a comparação após
//B - Daria a mensagem que o número passou no teste por ser maior que 0 e
// apresentará um erro pois não foi declarado um else caso o número seja
// menor ou igual a zero que apresente uma mensagem no console.
//C -   Sim caso o número seja menor que zero apresentará erro pois não
// foi declarado o else para caso seja inserido um valor menor e a 
//"mensagem" não foi atribuída uma função para que a mesma seja utilizada
//se tornando uma função vazia.

//Exercícios de escrita de código

//Exercício 1 -
const idadeAdulto = Number(prompt("Qual a sua idade ?"))
if(idadeAdulto > 18) {
console.log("Você está apto para dirigir")
}else{
    console.log("Você não está apto ainda...")

}

// Exercício 2 -
const turnoDia = prompt("Qual turno você estuda ? (M = Manhã V = Tarde N = Noite)")
.toUpperCase()
const turnoManha = "M"
const turnoTarde = "V"
const turnoNoite = "N"


if(turnoDia === turnoManha){
    console.log("Bom dia")
}
else if(turnoDia === turnoTarde){
    console.log("Boa tarde")
}else if(turnoDia === turnoNoite){
    console.log("Boa noite")
}

//Exercício 3 -

let turnos = prompt("Qual turno você estuda ? (M = Manhã V = Tarde N = Noite").toUpperCase()

switch (turnos) {
    case 'M':
        console.log("Bom dia")
        break

    case 'V':
        console.log("Boa tarde")
        break

    case 'N':
            console.log("Boa noite")
            break
}

//Exercício 4 - 
const filmeGenero = prompt("Qual o gênero do filme ?")
const filmePreco = (prompt("Qual o valor do ingresso ?"))
const cartaz = "fantasia"
if(filmeGenero === cartaz === filmePreco <= 15){
console.log("Bom Filme!")
}
else if(filmeGenero === cartaz === filmePreco > 15){
    console.log("Escolha outro filme")
}
   
//Desafio 1

const filmeGenero = prompt("Qual o gênero do filme ?").toLowerCase()
const filmePreco = (prompt("Qual o valor do ingresso ?"))
const lanche = prompt("Qual lanche vai querer ?")
const cartaz = "fantasia"

if(filmeGenero === cartaz && filmePreco <= 15 ){
console.log(`Bom Filme! Aproveite o seu ${lanche}`)
}
else{
    console.log("Escolha outro filme")
}
//Desafio 2 - Me aguarde...