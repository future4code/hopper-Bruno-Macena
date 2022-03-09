//Exercicios de interpretação de código 08/03

// 1- De acordo com o código, o mesmo declarou o valor como 0 e o indice 0, enquanto o indice for menor que 5, o indice ganha +1(número), e valor é somado com o valor do índice (valor = indice + valor) ao chegar no valor do 
//indice 5 o laco é quebrado e o resultado do valor é exibido = 10 pois 6+4 = 10.

//2- 

//A- A lista exibe o array com a lista de números ao qual o if somente exibirá no console o número da lista do array números maiores que 18 e irá ignorar osnúmeros menores que este.

//B- Teria que usar for pois o  for...of não fornece as informações do  índice dos elementos.

//3- Ao inserir o número 4 o usuário informa que deseja a quantidade total de 4 linhas, ao qual enquanto  a quantitadadeAtual for menor que a quantidade total solicitada a linha será exibida com 1 * somado a
//quantidadeAtual até exibir o número de linhas solicitadas pelo usuário ao qual o final terá 4 linhas e 4 asteriscos.

//Exercícios de escrita de código

//1-

let numberAnimals = Number(prompt("Quantos animais voce possui ?"))
let nameAnimals = []

if (numberAnimals === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    while (numberAnimals > 0) {
        nameAnimals.push(prompt("Qual o nome do(s) seu(s) pet(s) ?"))
        numberAnimals -= 1
    }
}
console.log(nameAnimals)

//2-
//A-

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let num of arrayOriginal) {
    console.log(num)
}

//B-
for (let num of arrayOriginal) {
    console.log(num / 10)
}

//C-
const novoArray = []
for (let num of arrayOriginal) {
    if ((num % 2) === 0) {
        novoArray.push(num)
    }
}
console.log(novoArray)

//D-
const arrayDeStrings = []
for (let num of arrayOriginal) {
    arrayDeStrings.push(`O elemento do índex ${arrayOriginal.indexOf(num)} é: ${num}`)
}
console.log(arrayDeStrings)
//E-

let maiorNumero = 0
for (let num of arrayOriginal) {
    if (num > maiorNumero) {
        maiorNumero = num
    }
}
let menorNumero = maiorNumero
for (let i = 0; i < arrayOriginal.length - 1; i++) {
    if (menorNumero > arrayOriginal[i]) {
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)








