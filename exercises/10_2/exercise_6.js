// Use como base para os exercícios a seguir:
// 1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

// Dica: use o código do exemplo para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
	{ name: 'Dorminhoco', age: 1, type: 'Dog' },
	{ name: 'Soneca', age: 2, type: 'Dog' },
	{ name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      }
      const messageError = 'Nenhum animal com esse nome!'
      return reject(messageError);
    }, 100);
  })
)

const getAnimal = (name) => {
  return findAnimalByName(name)
    .then(animal => animal)
}


module.exports = { getAnimal };