const arr = [1,2,3,4,5]
function sum(){
    //let _arr = Array.from(arguments)
    let _arr = [...arguments]
    console.log(_arr)
    return _arr.reduce(function (sum, atual){
        return sum + atual
    },0)
}

function avarege(){
    return sum(...arguments) / arguments.length
}

let soma = sum(...arr)
console.log(soma)

let media = avarege(...arr)
console.log(media)