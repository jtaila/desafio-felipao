// Solicitar ao usuário que digite o nome do jogador
let nomeHeroi= prompt("Digite o nome do herói:");
let nivelDeXp= prompt("Digite a quantidade de experiência exbida (xp) :" );
let nivelHeroi= " ";

if (nivelDeXp< 1000) {

    nivelHeroi = "Ferro";
} else if (nivelDeXp >= 1001 && nivelDeXp <= 2000) {
    nivelHeroi = "Bronze";
} else if (nivelDeXp >= 2001 && nivelDeXp <= 5000) {
    nivelHeroi = "Prata";
} else if (nivelDeXp >= 6001 && nivelDeXp<= 7000) {
    nivelHeroi = "Ouro";
} else if (nivelDeXp >= 7001 && nivelDeXp<= 8000) {
    nivelHeroi = "Platina";
} else if (nivelDeXp >= 8001 && nivelDeXp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (nivelDeXp >= 9001 && nivelDeXp<= 10000) {
    nivelHeroi = "Imortal";
} else if (nivelDeXp >= 10001) {
    nivelHeroi = "Radiante";
}

// Exibir a mensagem com o nome e o nível do herói
console.log("O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}");