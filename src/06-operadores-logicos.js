/* OPERADORES LÓGICOS:
OU: ||, a condição é verdadeira se um dos dois componentes forem verdade
E: && a condição é verdadeira se os dois componentes forem verdade*/



const idade = 19
const ia= "Infatil A"
const ib = "Infantil B"
const ja = "Juvenil A"
const jb = "Juvenil B"
const a = "Adultos" 
if (idade >= 5 && idade <= 7 ) {
  console.log(ia)
} else if (idade >= 8 && idade <= 11 ) {
  console.log(ib)
}
else if (idade >= 12 && idade <= 13 ) {
  console.log(ja)
}
else if (idade >= 14 && idade <= 17 ) {
  console.log(jb)
} if (idade >= 18){
  console.log(a)
}

