//Exercício 01
//A - Criando um arquivo index.js e usando o process.argv.

//B -
// const nome = process.argv[2]
// const idade = process.argv[3]
// console.table(`Olá, ${nome}! Você tem ${idade} anos.`)
 
//C -
// const nome = process.argv[2]
// const idade = Number (process.argv[3])
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)

//Exercício 2
// const operacao = process.argv[2]
// const numero1 = Number(process.argv[3])
// const numero2 = Number(process.argv[4])

// switch (operacao) {
//     case "soma":
//         console.log(`O resultado da soma é: ${numero1 + numero2}`)
// 		break;
//     case "subtracao":
//         console.log(`O resultado da subtração é: ${numero1 - numero2}`)
//         break;
//     case "multiplicacao":
//         console.log(`O resultado da multiplicação é: ${numero1 * numero2}` )
//         break;
//     case "divisao":
//         console.log(`O resultado da divisão é: ${numero1 / numero2}`)
//         break;
//     default:
//         console.log("Erro")
// }

// Exercício 3

// const listaDeTarefas = ["Jogar Game"]

// const tarefa = process.argv[2]

// listaDeTarefas.push(tarefa)

// console.log(listaDeTarefas)