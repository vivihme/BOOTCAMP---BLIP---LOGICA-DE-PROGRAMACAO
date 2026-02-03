const prompt = require('prompt-sync')();
let numbersOfWins = Number(prompt('How many victories do you have? '));
let numbersOfDefeats = Number(prompt('How many defeats do you have? '));

let balance = numbersOfWins - numbersOfDefeats;
let heroLevel = rankingCalc(balance);

console.log(`The hero has a balance of ${balance} victories and he's at level ${heroLevel}`);

function rankingCalc(balance){
    if (balance <= 10){
        return 'Ferro';
    } else if (balance >= 11 && balance <= 20){
        return 'Bronze';
    } else if (balance >= 21 && balance <= 50){
        return 'Prata';
    } else if (balance >= 51 && balance <= 80){
        return 'Ouro';
    } else if (balance >= 81 && balance <= 90){
        return 'Diamante';
    } else if (balance >= 91 && balance <= 100){
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}