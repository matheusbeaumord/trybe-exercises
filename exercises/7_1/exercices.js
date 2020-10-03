//1. Crie uma função que receba um número e retorne seu fatorial.
const fatorar = num => {
    const value = num
    let arrayNum = []
    let numFatorado
    for (let i = num; i >= 1; i--) {
        arrayNum.push([i]);
        numFatorado = (num *= [i])
    }
    console.log(`${value}! fatorial é: ${arrayNum} = ${numFatorado / value}`)

}

fatorar(20);

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.