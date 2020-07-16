const personagens = ['Jake', 'Holt', 'Santiago', 'Charles']
personagens.pop() // Charles ta de férias  //  Pop remove o ultimo elemento da lista
console.log(personagens)

personagens.push('Jeffords') // push adiciona um novo elemento na lista
console.log(personagens)

personagens.shift()  // Remove o 1°
console.log(personagens)

personagens.unshift('Jake') // Adiciona na 1° posição
console.log(personagens)

// Splice pode adicionar ou remover elementos 

// adicionar
personagens.splice(2, 0, 'Gina', 'Hitcock')
console.log(personagens)

// remover
personagens.splice(4, 1)
console.log(personagens)

const detetives = personagens.splice(2) // novo array 
console.log(detetives)

const detetives2 =  personagens.splice(1,4)
console.log(detetives2)