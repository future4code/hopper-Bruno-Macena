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
const aluno1= {
nome: "Bruno",
idade: 32,
profissao: "Backoffice"
}

const aluno2={
...aluno1,
nome:"Andre",
idade:20,
profissao: "Youtuber"
}
//B-

const cadastro1 = (aluno1) => {
console.log(aluno1.nome.length)
}
console.log(cadastro1)