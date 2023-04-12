const person = {
name: "Paulo",
lastName: "Gini",
age : 19,
}



//object.keys(): cris uma array com todas as chaves do objeto 
console.log(Object.keys(person))

//object.values(): cria um array com os valores do objeto
console.log(Object.values(person))

//object.entries(): cria um array com um array de objetos e valores 
const array = Object.entries(person)
array 

//EXEMPLO
const livros ={
  'livro A':19.90,
  'livro B': 97.00,
  'livro c':20.00,
}
const values = Object.values(livros).reduce((val,acc) =>  val + acc ,0)
console.log(values)

