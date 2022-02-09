let a = 10
let b = 10
console.log(b)
b = 5
console.log(a,b)
//10 e 10,5
//------------------------------------------------------------------------------------
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a,b,c)
//10,10,10
//------------------------------------------------------------------------------------
let horasTrabalhadas = prompt("Quantas horas  você trabalha por dia ?")
let ganhosPorDia = prompt("Quanto você recebe por dia ?")
alert (`Voce recebe ${horasTrabalhadas/ganhosPorDia} por hora`)  
//------------------------------------------------------------------------------------
const seuNome = prompt("Qual o seu nome ?")
const suaIdade = Number (prompt("Qual a sua idade ?"))
console.log(typeof seuNome)
console.log(typeof suaIdade)
console.log("Olá",seuNome, "Voce tem",suaIdade,"anos")
//sting, number
//------------------------------------------------------------------------------------
const meteorologia = prompt("Choveu hoje na sua cidade ?")
console.log(meteorologia)

const curso = prompt("Está gostando do curso da Labenu ?")
console.log(curso)

const metodologia = prompt("A metodologia do curso está bom para todos ?")
console.log(metodologia)
//------------------------------------------------------------------------------------

const a = "sim"
const b = "nao" 
const c = "talvez" 

const meteorologia = ("Choveu hoje na sua cidade ?")
console.log(meteorologia,a)

const curso = ("Está gostando do curso da Labenu ?")
console.log(curso,a)

const metodologia = ("A metodologia do curso está bom para todos ?")
console.log(metodologia,c)
//------------------------------------------------------------------------------------
let a = 10
let b = 25
c = a
a = b 
b = c

console.log("O novo valor de a é",a, "O novo valor de b é",b,)
//a = 25 e b = 10
//------------------------------------------------------------------------------------
let numero1 = Number(prompt("Insira um valor"))
let numero2 = Number(prompt("Insira um valor"))
console.log("O primeiro número somado ao segundo número resulta em:",numero1+ numero2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:",numero1*numero2)
//*Outra forma* ----------------------------------------------------------------------
alert (`O primeiro número somado ao segundo número resulta em:${numero1+numero2}`) 
alert (`O primeiro número multiplicado pelo segundo número resulta em${numero1*numero2}`)