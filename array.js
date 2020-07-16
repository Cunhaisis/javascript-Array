console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Damon', 'Stefan', 'Bonnie')
console.log(aprovados)

aparovados = ['Damon', 'Stefan', 'Bonnie']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Caroline'
aprovados.push('Alarc')
console.log(aprovados.length)


aprovados[9] = 'Elena'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados[11] = 'Matt'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[4]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Damon', 'Stefan', 'Bonnie']
aprovados.splice(1, 1)
console.log(aprovados)
