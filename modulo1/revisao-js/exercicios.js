// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = a => a % 2 === 0
    return array.filter(pares)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            numerosPares.push((array[i]*array[i]))
        }
    }
   return numerosPares
  
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const  objeto = {
  maiorNumero:Math.max(num1, num2),
  maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
diferenca: Math.max(num1, num2) - Math.min(num1, num2)
}
return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
      
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
// return ladoA * ladoB * ladoC
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
    let comparativos = array.sort((a, b) => a - b)
    return [comparativos[comparativos.length-2], comparativos[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    
   
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let permissao = []
   for(const pessoa of pessoas){
       if(
           pessoa.altura > 1.5 && idade > 14 && pessoa < 60){
          permissao.push(pessoa);
            }
        }
   return permissao;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
// return consultas.sort((a,b)=>a-b)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}