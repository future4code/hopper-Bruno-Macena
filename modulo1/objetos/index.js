//1
//A- "Matheus Nachtergaele" , 
//"Virginia Cavendish","Matheus Nachtergaele", "Selton Mello", "Denise Fraga"
//canal: "Globo", horario: "14h"
//2
//A- Nome:Juca, Idade:3, Raca:SRD
//Nome:Juba, Idade:3, Raca:SRD
//Nome:Jubo, Idade 3, Raca:SRD
//B- Atribiu ou espelha todas as informações da variável
// citada
//3
//A- false / undefined
//B- Deu o resultado como undefined pois a variavel "altura"
//não foi declarada.
//Exercício 1
//A-

// const pessoa = {
//     nome: "Diego", 
//     apelidos: ["Dieguinho", "Dumbo", "Orelha"]
 //}
 
//  // Exemplo de saída
//  const texto = `Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos}`

//  console.log(texto)

//B-
// const novaLista = {...pessoa,
//     novosApelidos:["Canela fina", "Zé", "Chicote"]
// }
// console.log(novaLista.novosApelidos)

 //Exercício 2
 //A-

 
// const aluno1= {
// nome: "Bruno",
// idade: 32,
// profissao: "Backoffice"
//  }
// const aluno2={
// ...aluno1,
// nome:"Andre",
// idade:20,
// profissao: "Youtuber"
// }
// //B-
// const dados = (cadastro)=>{
// return [cadastro.nome, cadastro.nome.length, 
//     cadastro.idade, cadastro.profissao, 
//     cadastro.profissao.length]

// }
// console.log(dados(aluno1))
// console.log(dados(aluno2))


//Exercício 3
// const carrinho = []
// const frutas1 = {nome:"Maca", disponibilidade:true}
// const fruta2 = {nome:"Melancia", disponibilidade:true}
// const fruta3 = {nome: "Jaca", disponibilidade:true}
// const sacola = (mercado1, mercado2, mercado3)=>{
// carrinho.push(mercado1, mercado2, mercado3)
// return [mercado1, mercado2, mercado3]
// }

// console.log(sacola(frutas1,fruta2,fruta3))

//Desafio 1
// const dados1 = []
// const nome = "Bruno"
// const idade = 32
// const profissao = "Backoffice"
// console.log(nome, idade, profissao)
// const dadosUsuario = [nome, idade, profissao]
// const dados2 = (cadastro)=>{
// dados1.push(cadastro)
// }
// dados2(dadosUsuario)
// console.log(dados1)







