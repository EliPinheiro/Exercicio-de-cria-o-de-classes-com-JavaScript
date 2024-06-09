
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    }
}

class Mago extends Heroi{
    ataque = "magia";
}
class Guerreiro extends Heroi{
    ataque = "espada";
}
class Monge extends Heroi{
    ataque = "artes marciais";
}
class Ninja extends Heroi{
    ataque = "shuriken";
}

let mago = new Mago("eli", 23, "Mago");
let guerreiro = new Guerreiro("eli", 23, "Guerreiro");
let monge = new Monge("eli", 23, "Monge");
let ninja = new Ninja("eli", 23, "Ninja");


mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

