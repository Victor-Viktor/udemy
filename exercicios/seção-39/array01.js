const arr = [1, 5, 10, 'ola', true]

let sohNumeros = arr.some(function(el){
    
    return typeof el === 'number' && el > 20
})
console.log(sohNumeros)

//arr.filter não altera o array original mas sim cria um novo :)
let arr1 = arr.filter(function(el, i, _arr){
    return typeof el === 'number'
})

arr.forEach(function (el, i, _arr){
    console.log(i + ': ' + el)
})

 arr2 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)