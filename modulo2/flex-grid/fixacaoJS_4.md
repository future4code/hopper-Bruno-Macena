```JS
let repeticoes = 0
for(let i= 0; i < arrayDeNumeros.length; i++){
            if(arrayDeNumeros[i] === numeroEscolhido){
              repeticoes++
}
}
if(repeticoes === 0){
return "Número não encontrado"  
}else{return "O número " + numeroEscolhido + " aparece "+ repeticoes + "x"}
}
```