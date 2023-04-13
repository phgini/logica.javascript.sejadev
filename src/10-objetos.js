/* variavel de numero se escreve assim :
const ou let numero = 10
array se escreve  assim : 
const ou let array =[]*/
 const pessoa= {
  nome:"Paulo",
  idade:19, 
  comprometido: true,
  notas : [5, 6 , 10],
  endereco: {
    rua:"rua xyz",
    numero: 22
  }
 }
 console.log(pessoa["nome"]) //ou pode usar tambem 
 console.log(pessoa.nome)
 console.log(pessoa["notas"][1])
 console.log(pessoa.notas[1])
 console.log(pessoa["idade"])
 console.log(pessoa.idade)
 console.log(pessoa["comprometido"])
 console.log(pessoa.comprometido)
 console.log(pessoa["endereco"]["numero"])
 console.log(pessoa.endereco.rua)
 