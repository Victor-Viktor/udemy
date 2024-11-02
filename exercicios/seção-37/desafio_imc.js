function calculaImc(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error('Informe ambos os parâmetros')
    }
    if(typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Informe apenas números')
    }
    let imc = peso / (altura ** 2)
    return imc 
}
