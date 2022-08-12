// Exercicio 1
//a -
//    const minhaString:string = 10 // O tipo number não pode ser atribuído ao tipo string

//b -

// const meuNumero: number = 10 // Utilizando o Union Type
// let nome: string | number = ''

//c -

// const pessoa: {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }
// ={
//     nome: "Bruno",
//     idade: 33,
//     corFavorita: "azul"
// }

//d -

// enum Cores {
//     Cor1 = "Verde",
//     Cor2 = "Amarelo",
//     Cor3 = "Vermelho"
// }

// type Palheta = {
//     Cor: string,
// }

// const teste: Palheta = {
//     Cor: Cores.Cor3
// }
// console.log(teste)

// Exercicio 2

//a - A entrada é um parametro de um array de numeros e
//a saida é um objeto de propriedade maior,menor e media entre os mesmos

//b - 

// type Estatisticas = {
//     maior:number,
//     menor:number,
//     media:number
// }


// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([3,6,9,12,21,33,36,56]))

//c -

// type amostraIdades = {

//     numeros:number [],

//     obterEstatisticas: () => {},
// }

// Exercicio 3

//a -

// type post = {
//     autor: string,
//     texto: string
// }

// let posts: post[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

//b - Recebe um array de objetos e retorna um array filtrado

// function buscarPostsPorAutor (posts: post[], autorInformado: string): {}[] {
//     return posts.filter((post) => post.autor.toLowerCase() === autorInformado.toLowerCase())
// }

// console.log(buscarPostsPorAutor(posts, 'Severo Snape'))

//2 - a entrada é um parametro de array de propriedades autor e texto
// a saida seria um booleano com  o nome filtrado igual ao autor

//Exercicio 4

// type pokemon = {
// 	name: string,
//   types: string,
// 	healthPoints: number
// }

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28
// }

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31
// }

// const pokemon3: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35
// }

// //b - tsc exercicio4.ts
// //c - tsc ./src/exercicio4.ts
// //d - tsc ./src/index.ts ./src/exercicio4.ts