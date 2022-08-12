// Exercicio 1
// a -
//    const minhaString:string = 10 // O tipo number não pode ser atribuído ao tipo string

// b -

const meuNumero: number = 10 // Utilizando o Union Type
let nome: string | number = ''

// c -

const pessoa: {
    nome: string,
    idade: number,
    corFavorita: string
}
={
    nome: "Bruno",
    idade: 33,
    corFavorita: "azul"
}

// d -

enum Cores {
    Cor1 = "Verde",
    Cor2 = "Amarelo",
    Cor3 = "Vermelho"
}

type Palheta = {
    Cor: string,
}

const teste: Palheta = {
    Cor: Cores.Cor3
}
console.log(teste)