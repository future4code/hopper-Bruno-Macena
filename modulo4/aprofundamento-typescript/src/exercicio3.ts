// Exercicio 3

//a -

type post = {
    autor: string,
    texto: string
}

let posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

//b - Recebe um array de objetos e retorna um array filtrado

function buscarPostsPorAutor (posts: post[], autorInformado: string): {}[] {
    return posts.filter((post) => post.autor.toLowerCase() === autorInformado.toLowerCase())
}

console.log(buscarPostsPorAutor(posts, 'Severo Snape'))

//2 - a entrada é um parametro de array de propriedades autor e texto
// a saida seria um booleano com  o nome filtrado igual ao autor