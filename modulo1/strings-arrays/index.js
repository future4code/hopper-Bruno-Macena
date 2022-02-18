//Exercício de segunda feira 14/02 Bruno de S. M.
//Exemplos de fixação

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3,4,5,6,7,8,9,10,11,12,13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array [i+1] = 19
// console.log('e. ',array)

// const valor = array[i+6]
// console.log('f. ',valor)

// A: Undefined B: Null C:11 D:3 E: [3,19,5..] F:9

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Irá alterar todas as letras minúsculas em maiúsculas e substituir todas
// as letras "A" pela letra "I" e mostrar no sistema quantos caracteres possui
// a frase, incluindo os espaços
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercício 1

//const cadastroUser = prompt("Qual o seu nome de usuário ?")
//const cadastroEmail = prompt("Qual é o seu e-mail ?")
//console.log("O e-mail " +cadastroEmail+ "foi cadastrado com sucesso. Seja bem vindo(a)," +cadastroUser)
//console.log(`O email ${cadastroEmail} foi cadastrado com sucesso. Seja bem vindo(a)${cadastroUser}`)

// Exercício 2

//const comidasFavoritas = ["Lasanha", "Strogonoff", "Pizza", "Espinafre", "Macarronada"]
// console.log(comidasFavoritas)
// console.log(`Essas são as minhas comidas preferidas ${comidasFavoritas[0]},
// ${comidasFavoritas[1]},
// ${comidasFavoritas[2]},
// ${comidasFavoritas[3]},  
// ${comidasFavoritas[4]}`)
// let pergunta = prompt("Qual o seu prato predileto ?")
// comidasFavoritas.splice(1,1,pergunta)
// console.log (comidasFavoritas)

// Exercício 3

// const listaDETarefas = []
// let primeiraTarefa = prompt("Qual a primeira tarefa ?")
// let segundaTarefa = prompt("Qual a segunda tarefa ?")
// let terceiraTarefa = prompt("Qual a terceira tarefa ?")
// listaDETarefas[0] = primeiraTarefa
// listaDETarefas[1] = segundaTarefa
// listaDETarefas[2] = terceiraTarefa
// console.log (listaDETarefas)
// let qualTarefa = Number(prompt("Qual das 3 tarefas de 1 a 3 você já realizou ?"))
// listaDETarefas.splice((qualTarefa-1), 1)
// console.log(`Faltam as tarefas ${listaDETarefas}`)

// Desafio 1

// let frase1 = "Tenho algumas dificuldades em alguns exercicios"
// let texto02 = [frase1.split(" ")]
// console.log(texto02)

// Desafio 2

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(frutas.indexOf("Abacaxi"), frutas.length)