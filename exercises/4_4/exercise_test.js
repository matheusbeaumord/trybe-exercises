var curso = {
    nome: "Curso de desenvolvimento Front-end 2019/09 - BH",
    modulos: {
        internet: {
            descricao: "Como a internet funciona",
            semana: 1,
            tipo: "teórica",
            estado: "completo"
        },
        shell: {
            descricao: "Shell Script",
            semana: 1,
            tipo: ["teórica", "prática"],
            estado: "completo"
        },
        html: {
            descricao: "HTML + CSS",
            semana: [2, 3],
            tipo: "prática",
            estado: "em andamento"
        }
    },
    quantidade_alunos: 10,
    arquivado: false
};

// Mostre o nome do curso
console.log(curso.nome);

// Agora é a sua vez!!!

// Mostre a descrição do módulo Internet
console.log(curso.modulos.internet.descricao);

// Mostre qual é a última semana do módulo HTML
console.log(curso.modulos.html.semana[1]);


// Mostre qual é o tipo do módulo Shell
console.log(curso.modulos.shell.tipo);

/*let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }
  */