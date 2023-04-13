const balanca = 50
let numero = 458
let excesso = numero - balanca
const multa = 4
if ( numero <= balanca){
  console.log("Está dento do peso")
} else {
  console.log("Peso exedido")
  console.log("multa de: R$", excesso * multa)
 
   
}