// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Qual a área do retângulo ?"))
let largura = Number(prompt("Qual a largura do retangulo ?"))
const areaRetangulo = altura * largura
console.log (areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  //implemente sua lógica aqui
let anoAtual = Number(prompt("Em que ano estamos ?"))
let anoNascimento = Number(prompt("Em que ano você nasceu ?"))
const idade = anoAtual-anoNascimento
console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  //"Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 let seuNome = prompt("Qual o seu nome ?")
 let suaIdade = Number(prompt("Qual a sua idade ?"))
 let email = prompt("Qual o seu e-mail ?")
 console.log (`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Insira a primeira cor")
let cor2 = prompt("Insira a segunda cor")
let cor3 = prompt("Insira a terceira cor")
const cores = [cor1 , cor2 , cor3]
console.log (cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const teste = array[0] 
  return teste
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const testeElemento = array[1]
  array[0] = array[array.length -0]= testeElemento
  return testeElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const testeArray = array[0]

  array[0] = array[array.length - 1]
  array[array.length - 1] = testeArray
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que anos estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  let anoIdentidade = Number(prompt("Em que ano você fez a sua identidade?"))

    let idade = anoAtual - anoNascimento

    let renovacao
  
  if (idade <= 20) {
    renovacao = 5
  } 
  else {if (idade > 20, idade < 50) {
    renovacao = 10
  } 
  else {if (idade > 50) {
    renovacao = 15
  }}}
  const renova = 0
  let calculaRG = (idade - (anoAtual - anoIdentidade)) % renovacao
  
  console.log(calculaRG === renova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 
  }


  // function checaAnoBissexto(ano) {
  //   let divisivelpor4 = ano % 4 === 0;
  //   let naoDivisivelpor100 = ano % 100 !== 0;
  //   let divisivelpor400 = ano % 400 === 0;
  
  //   return (divisivelpor4 && naoDivisivelpor100) || divisivelpor400;


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}



//   let maisDe18 = prompt("Você tem mais de 18 anos?");
//   maisDe18 = maisDe18 === "sim";

// let maisDe18 = confirm("Você tem mais de 18 anos?")
