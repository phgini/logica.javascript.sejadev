
/*array.pop remove o ultimo elemento do array
array.push adiciona elementos no array, sempre em ordem crescente
array.length mostra o "tamano" do seu array, ou seja, a quantidade de elemnetos presentes nele */
let  array = [10, 20, 30,]
let i = 0
while(i < array.length) {
  
  i++
}
for(let pos = 0; pos < array.length; pos++){
  //console.log(array[pos])
}
// for...in
for (let pos in array){
  //console.log(pos)
}
//for...of
for ( let arr of array){
 // console.log(arr)
}
// dado um array com X numeros, encontrar a media desses numeros 


const numbers = [10,20,30,70,50,56,80,75,95,45]
let sum = 0 
for (let num of numbers){
  sum = sum + num 
}
const media = sum / numbers.length
console.log(media)