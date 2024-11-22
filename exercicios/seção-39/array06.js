let arr = [1,2,3]
console.log(arr.reverse()) //inverte a ordem dos valores e altera a array original
console.log(arr)

let soma = arr.reduce(function(acumulador, atual, i, _arr){
    return acumulador + atual
}, 0)
console.log(soma)

let nomes = ['Victor', 'João', 'Maria', 'Joana']

let nomesOrdenados = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
},{})
console.log(nomesOrdenados)