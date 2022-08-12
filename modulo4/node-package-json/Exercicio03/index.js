// Exercício 3

const listaDeTarefas = ["Jogar Game"]

const tarefa = process.argv[2]

listaDeTarefas.push(tarefa)

console.table(listaDeTarefas)