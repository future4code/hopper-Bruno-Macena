//Exercícios de interpretação de código 09/03 aula callback

//1- Será impresso no console o primeiro item do array o segundo ou (tipo) e o array completo com as 3 array da const usuários, como se fosse um console.log(usuarios) e fará o mesmo nos demais arrays utilizando o map.

//2- Será impresso somente os nomes dos arrays conforme foi solicitado o primeiro item da função map e o return será do item.nome de cada uma das arrays.

//3- Irá retornar os arrays que não possuem o apelido "Chijo" como declarado no return. Ele irá filtrar o array e exibirá todos os arrays menos o elemento com o apelido Chijo.

//Exercícios de escrita de código

//1-

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//A-
// const novoArrayA = pets.map((item, index) => {
//     console.log(item.nome)
// })
//B-
// const novoArrayB = pets.filter((item, index) => {
//     return item.raca === "Salsicha"
//  })
//   console.log(novoArrayB)

//C- 
const novoArrayC = pets.filter((item, index) => {
    return(item.raca === "Poodle")
    
})

const cumpomTosa = pets.map((item,index) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${novoArrayC}!`)
    
})


// const recebePoodle = (novoArrayC)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${novoArrayC}!`)
// novoArrayC(`Você ganhou um cupom de desconto de 10% para tosar o/a ${}!`)

// console.log(novoArrayC.)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a !`(novoArrayC))



// const verificaImpar = (numero, imprimir)=>{
//     if(numero % 2 !== 0){
//         imprimir()
//     }
// }

// const imprimirImpar = ()=>{
//     console.log(`Sim é impar`)
// }
// verificaImpar(25, imprimirImpar)

// const arrayDeNumeros = [10,20,30,40,50]

// const imprimirNumeros = arrayDeNumeros.map((numero, indice)=>{
//     console.log(`O número é ${numero} e sua posição é ${indice}`)
// })