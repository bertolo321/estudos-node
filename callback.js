function soma(x,callback){
    return setTimeout(()=>{
       return callback (null,x + 5000)
    },3000)
    
}

/**
function escreve(){
    console.log('Executando a função escreve.',soma(270))
}

escreve();
 */
//calback function
 function resolveSoma(err,resultado){
    if(err) throw err
    console.log(resultado)
 }

 soma(200,resolveSoma)
