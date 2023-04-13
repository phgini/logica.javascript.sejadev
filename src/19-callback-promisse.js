function upload () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log("02-UPLOAD CONCLUIDO") 
    resolve() 
      }, 2000)
  })
   
}
async function upLoadDeFoto  () {
  console.log("01-UPLOAD INICIADO")
 await upload()
 console.log("03-UPLOAD FINALIZADO")

}

upLoadDeFoto()