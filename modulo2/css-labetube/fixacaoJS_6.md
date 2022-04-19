```JS
const novoArray = tarefas.filter((item) => {
    return item.status === "done"
 })
const resultado = novoArray.map((item) => {
return item.titulo
})
return resultado
}
```