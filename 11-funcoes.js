function soma (A, B) {
 return A + B 
}
function subtracao(A, B){
  return A - B 
}

function calculadora(tipo){
const A = 1 
const B = 2 
if ( tipo === "soma") return soma( A, B)
else if ( tipo === "subtracao") return subtracao(A, B)
}
/*
  faca uma funçao que verifica se um numero é par ou nao
*/

function par (num){
   return num % 2 === 0
} 

/*
  mostrar os numeros pares de 0 ate 100
*/

 


for (let i = 0; i <= 100;i++){
 if (par(i)) console.log(i)
}

