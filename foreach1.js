const seriesFavoritas = ['This is Us', 'Brooklyn 99', 'The Handmans tale', 'How i Met Your Mother']

seriesFavoritas.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

seriesFavoritas.forEach(nome => console.log(nome))

const exibirSeries = seriesFavoritas => console.log(seriesFavoritas)
seriesFavoritas.forEach(exibirSeries)