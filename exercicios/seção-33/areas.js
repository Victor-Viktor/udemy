function calcularAreaTriangulo(l, a){
    if(typeof l !== 'number' || typeof a !== 'number'){
        throw Error ('calcularAreaTrinagulo aceita apenas parâmetros do tipo number')
    }
    return l * a / 2
}

function calcularAreaCirculo(a, pi = 3.14){
    if(typeof a !== 'number'){
        throw Error ('calcularAreacirculo aceita apenas parâmetros do tipo number')
    }
    return pi * (a**2)
}