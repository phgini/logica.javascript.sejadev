function Pessoa (nome, sobrenome){
 let pessoa = {
  nome,
  sobrenome
  
 }
 

pessoa.nomeCompleto = `${nome} ${sobrenome}`
return pessoa 
}

const pessoaA = Pessoa("Paulo", "Gini")
const pessoaB = Pessoa("Letícia", "Andriani")
console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)