Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i <  globalThis.length; i++){
    if(callback(this[i], i, this)) {
        newArray.push(this[i])
    }
  }
}


const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4122, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))