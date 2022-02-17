// Exercício aula 09/02/2022 - Bruno de Salles M.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ",resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ",resultado)

// resultado = !resultado && (bool1 || bool2)
// console.log("c.",resultado)
// console.log("d.", typeof resultado)

// Exercício 1  1 = a = false 2 = b = false 3 = c = true 4 = d = boolean

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)

// Exercicio 2 irá aparecer um erro ao qual irá juntar os dois numeros sem 
//executar a soma e sim a união das strings, precisando ser incluso a função number
//para que a soma seja executada corretamente.
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)
// Correção

// Exercicio 2-1
// let idade1 = Number(prompt("Qual é a sua idade ?"))
// let idade2 = Number(prompt("Qual é a idade do seu melhor amigo(a) ?"))
// console.log("Sua idade é maior do que a do seu melhor amigo(a) ?",idade1 >= idade2)

// Exercicio 2-2
// let numeroPar = Number(prompt("Insira um número par"))
// console.log(numeroPar / 2)
// console.log(numeroPar % 2)
// console.log(numeroPar % 2 ===0) 
// todos os testes funcionaram corretamente com resultados exatos. Com números 
// impares a divisão resulta em um número acrescido de uma vírgula(resto)

// Exercicio 2-3

// const anoAtual = 2022
// let anoNascimento = Number(prompt("Em qual ano você nasceu ?"))
// console.log("A sua idade atual é ", anoAtual - anoNascimento)
// const resultado = anoAtual - anoNascimento
// console.log("A sua idade em meses é ",  resultado* 12)
// console.log("A sua idade em dias é ",  resultado *365 )
// console.log("A sua idade em horas é ",  resultado *24 )

// Exercicio 2-4

// let calculo1 = Number(prompt("insira um número"))
// let calculo2 = Number(prompt("insira um número novamente"))
// console.log("O primeiro numero é maior que segundo?",calculo1 > calculo2)
// console.log("O primeiro numero é igual ao segundo?",calculo1 === calculo2)
// console.log("O primeiro numero é divisível pelo segundo?",calculo1 % calculo2===0)
// console.log("O segundo numero é divisível pelo primeiro?",calculo2 % calculo1===0)

// Desafio 1

// const a = (77 -32)*(5/9) + 273.15
// console.log ("a temperatura em Kelvin é",a)
// const b = (80)*(9/5)+32
// console.log("a temperatura em Fahrenheit é",b)
// const c = (30)*(9/5)+32
// console.log ("a temperatura em Fahrenheit é",c)
// const resultado1 = (c-32)*(5/9) + 273.15
// console.log ("a temperatura em Kelvin é",resultado1)
// let grausCelsius = Number(prompt("Insira um valor"))
// const FahrenHeit = (grausCelsius)*(9/5) + 32
// console.log("a temperatura em Fahrenheit é",FahrenHeit)
// const kelVin = ((FahrenHeit)-32)*(5/9)+273.15
// console.log("a temperatura em Kelvin é",kelVin)

// Desafio 2

// const valorQuilowatt = 0.05
// const consumoQuilowatt = 280
// const mes = 30
// const dia = 24
// const desconto = 15/100
// console.log ("O valor gasto por dia é R$",(valorQuilowatt*consumoQuilowatt*dia))
// console.log ("O valor consumido após 30 dias é R$",(valorQuilowatt*consumoQuilowatt*dia*mes))
// let consumoExtra = Number(prompt("Consumo dia por mês"))
// console.log ("o valor gasto a mais no mes foi de R$",(valorQuilowatt*consumoExtra*dia*mes))
// console.log ("o valor final com desconto foi de R$",(valorQuilowatt*consumoExtra*dia*mes)*desconto)

// Desafio 3

// const oz = 3.527
// const lb = 2.205
// const m = 1609
// const ft = 3.281
// const gal = 379
// const xic = 3.52
// console.log ("20 libras equivalem a",(20/lb),("kilos"))
// console.log ("10.5 onça equivalem a",(10.5/oz),("kilos"))
// console.log ("100 milhas equivale a",(100*m),("metros"))
// console.log("50 pés equivalem a ",(50/ft),("metros"))
// console.log("103.56 galões equivalem a",(103.56*gal),("litros"))
// console.log("450 xicaras equivale a",(450/xic),("litros"))
// let pesoKilo = Number(prompt("Qual o peso em libra da compra"))
// console.log ("O peso da compra em kilos é ",(pesoKilo/lb),("kilos"))