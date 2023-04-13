const pessoa = {
 nome: "Paulo",
 sobrenome: "Gini",
 idade: 19,
}

const { nome,idade } = pessoa
//pessoa.nome e pessoa.idade 
console.log(nome)
console.log(idade)

const pessoaComMaisDados = {// os 3 pontos sao usados para  pegar todos os dados da outro objeto,funçao, array, etc
  ...pessoa, 
  idade:20,
  senha: "8206978"
}
console.log(pessoaComMaisDados)

/*
const array = [1,2,3,4]
const [a, b] = array
console.log(a)
console.log(b)*/