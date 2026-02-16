class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    goAttack(){
        let attack;

        switch(this.type){
            case 'Mago':
                attack = 'magia';
                break;
            case 'Guerreiro':
                attack = 'espada';
                break;
            case 'Ninja':
                attack = 'shuriken';
                break;
            case 'Monge':
                attack = 'artes marciais';
                break;
    }
        console.log(`O ${this.type} atacou usando ${attack}`);
}
}
    const heroes = [
    new hero('Goku', 40, 'Ninja'),
    new hero('Naruto', 35, 'Guerreiro'),
    new hero('Sasuke', 38, 'Mago'),
    new hero('Sakura', 30, 'Monge'),
    ];

    console.log("--- INÍCIO DA AVENTURA ---");
    for (let h of heroes) {
    h.goAttack();
    }
/*
class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
    goAttack(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}
let newHeroOne = new hero('Goku', 40, 'Ninja', 'shuriken');
    //console.log(newHeroOne);
let newHeroTwo = new hero('Naruto', 35, 'Guerreiro', 'espada');
    //console.log(newHeroTwo);
let newHeroThree = new hero('Sasuke', 38, 'Mago', 'magia');
    //console.log(newHeroThree);
let newHeroFour = new hero('Sakura', 30, 'Monge', 'artes marciais');
    //console.log(newHeroFour);

newHeroOne.goAttack()
*/