// Exercicio 2

//a - A entrada é um parametro de um array de numeros e
//a saida é um objeto de propriedade maior,menor e media entre os mesmos

//b - 

type Estatisticas = {
    maior:number,
    menor:number,
    media:number
}


function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([3,6,9,12,21,33,36,56]))

//c -

// type amostraIdades = {

//     numeros:number [],

//     obterEstatisticas: () => {},
// }