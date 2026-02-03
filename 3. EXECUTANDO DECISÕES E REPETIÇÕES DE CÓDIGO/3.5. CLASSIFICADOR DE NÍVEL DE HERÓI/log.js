const prompt = require('prompt-sync')();

// SOLICITAR NOME E SAUDAR USUÁRIO
const name = prompt('Qual o nome do seu heroi? ');
console.log("Nice to meet you, " + name)

// SOLICITAR QUANTIDADE DE EXPERIÊNCIA (XP) E EXIBIR O RESULTADO NO TERMINAL
const xp = Number(prompt('Qual a quantidade de experiência (XP) do seu herói? '));

let level;
if (xp <= 1000) {
    level = 'Ferro';
} else if (xp >= 1001 && xp <= 2000) {
    level = 'Bronze';
} else if (xp >= 2001 && xp <= 5000) {
    level = 'Prata';
} else if (xp >= 5001 && xp <= 7000) {
    level = 'Ouro';
} else if (xp >= 7001 && xp <= 8000) {
    level = 'Platina';
} else if (xp >= 8001 && xp <= 9000) {
    level = 'Ascendente';
} else if (xp >= 9001 && xp <= 10000) {
    level = 'Imortal'
} else {
    level = 'Radiante'
}
console.log("O herói de nome " + name, "está no nível " + level)