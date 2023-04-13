const array = [1, 5, 4, 3, 10, 8, 20, 12]

//lacos especifico para usar no array:forEach, passa por todos os elementos da array 
array.forEach((elemento, posicao) => {
console.log(`${elemento}- posicao ${posicao}`)

})

//find: retorna o elemento 
  const valor = array.find((elemento) => {
 return elemento === 10

  })
  console.log(valor)
  //findIndex: retorna a posição do elemento 
  const index = array.findIndex((elemento) => {
    return elemento === 10
   
     })
     console.log(index)
    // some: retorna true se pelo menos um numero satisfazer a condição 
     const some = array.some(elemento =>  elemento >= 14
      
     )
     console.log(some)
     //every: retorna true se TODOS os elementos satisfazem a condição 
     const every = array.every(elemento =>  elemento >= 14
    )
     console.log(every)
     // PARTE 2 DA AULA SOBBRE FUNCOES UTEIS COM ARRAY
     const newArray = [1, 2, 3, 4, 5]
      //splice: corta o array, (comeco do corte, fim do corte )
      //console.log(newArray.splice(1, 1))

      //map: altera os valores dentro do array,seguindo uma regra
      console.log(newArray.map((elemento) => {
        return elemento * 2 
      }))
      //filter: filtra os elementos dentro do array 
        console.log(newArray.filter((elemento) => {
        return elemento % 2 === 0
        }))
        //reduce: reduz o array para outro elemento 
        console.log(newArray.reduce((acumulado, elemento) => {
          return acumulado - elemento
        }, 100 ))  