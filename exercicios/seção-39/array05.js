let arr = [1, 3, 7, 5, 9]

let teste = arr.push(11, 13 , true, 'ola mundo')

console.log(teste) //push() Mostra a quantidade de indexs depois da mudança
console.log(arr)

let ultimoItem = arr.pop()// removo o ultimo elemento do array e retorna seu valor(altera o array original)
//let ultimoItem = arr[arr.length - 1] também mostra o conteúdo do último index (Não altera o array original)
console.log(ultimoItem)
console.log(arr)

let primeiroItem = arr.shift() // Remove o primeiro valor e retorna o seu valor (altera o array original)
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4,5,6)//adiciona valores no inicio do array(altera o array original)
console.log(teste) // quantidade de indexs
console.log(arr)

let arr2 = arr.slice(2, 4)//index
console.log(arr2)// mostra o número antes da parada no, caso o index 4
console.log(arr)

let arr3 = arr.splice(2,4, 'ola mundo', 10, 100, 1000)//(Em que index se inicia, Quantos index serão removidos) sempre retorna os valores removido(altera o array original)
console.log(arr)
console.log(arr3)// valores removidos