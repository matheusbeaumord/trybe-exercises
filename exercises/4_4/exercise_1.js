let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "Sim"
//Parte 2
console.log("Bem-vinda, " + info.personagem)

console.log(info)
// Parte 3
for (let part_3 in info) {
    console.log(part_3)
}
//Parte 4
for (let part_3 in info) {
    console.log(info[part_3])
}

//Parte 5

let info2 = {
    personagem: "Tio Patinhos",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let properties in info){
    if(
        info[properties] === info.recorrente &&
        info[properties] === "Sim" &&
        info2[properties] === "Sim"
    ){
        console.log("Ambos recorrentes");
    } else{
        console.log(info[properties] + " e " +info2[properties]);
    }
}