const quaseArray = { 0: 'Julie', 1:'Selena', 2:'Comendador' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Julie', 'Selena', 'Comendados']
console.log(quaseArray.toString())