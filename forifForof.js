//FOR OF
let numerosArray = [12, 34, 17, 02, 16, 13]
let numeroArray = [12, 34, 17, 02, 16, 13]

// para exibir índices 
for (let numero of numerosArray){
    console.log(numerosArray.indexOf(numero))
}

// para exibir itens 
for (let numeros of numeroArray){
    console.log(numeros)
}

//FOR OF
let datas = {
    natal: new Date(2022, 11, 25).toLocaleDateString(),
    diaDasCriancas: new Date(2022, 09, 12).toLocaleDateString(),
    diaDaIdependencia: new Date(2022, 08, 07).toLocaleDateString()
} 
console.log(datas)

for (data in datas){
    console.log(data)
    console.log(datas[data])
}

