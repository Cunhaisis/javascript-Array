Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }

}


const seriesFavoritas = ['This is Us', 'Brooklyn 99', 'The Handmans tale', 'How i Met Your Mother']

seriesFavoritas.forEach2(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})
