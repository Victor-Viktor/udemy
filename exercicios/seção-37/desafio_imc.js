function calculaImc(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error('Informe ambos os parâmetros')
    }
    if(typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Informe apenas números')
    }
    if(typeof callback === 'function'){
        return callback()
    }
    let imc = peso / (altura ** 2)
    return imc 
}
const fn = function (){
    console.log('Tú é muito do gordo')
}
