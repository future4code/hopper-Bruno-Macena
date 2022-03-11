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
const novoArrayA = pets.map((item) => {
    console.log(item.nome)
})
//B-
const novoArrayB = pets.filter((item) => {
    return item.raca === "Salsicha"
 })
  console.log(novoArrayB)

//C- 
const novoArrayC = (item) => {
    return item.raca === "Poodle"
    
}

const cachorrosSelecao = pets.filter(novoArrayC)

const cupomTosa = (item) => {
    return item.nome
}
const premioTosa = cachorrosSelecao.map(cupomTosa)

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " ,premioTosa[0])
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " ,premioTosa[1])

//2-

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//A-
const novoArrayProdutosA = produtos.map((item) => {
    console.log(item.nome)
})
//B-
const novoArrayProdutosB = produtos.map((item) => {
    return {nome:item.nome,preco:item.preco-item.preco * 0.05}
 })

  console.log(novoArrayProdutosB)
//C-
const novoArrayProdutosC = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(novoArrayProdutosC)
//D-
const novoArrayProdutosD = produtos.filter((item) => {
    return item.nome.includes('Ypê')
})
console.log(novoArrayProdutosD)
//E-
const novoArrayProdutosE = produtos.filter((item => {
    return item.nome.includes("Ypê")
}))
const compraYpe = novoArrayProdutosE.map((item) => {
    return `Compre ${item.nome} por ${item.preco}!`
})
console.log(compraYpe)

//Desafio 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//A-
const  desafioSort = pokemons.map((item) => item.nome).sort()
console.log(desafioSort)
//End...