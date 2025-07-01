const cards = document.getElementsByClassName("card");
const deck = document.getElementById("deck");
const arena1 = document.getElementById('area1');
const arena2 = document.getElementById('area2');


class Card {
    constructor(nome, simbolo, tipo, atk, hp, spd){
        this.nome = nome;
        this.simbolo = simbolo;
        this.tipo = tipo;
        this.atk = atk;
        this.hp = hp;
        this.spd = spd;
    }
}

const Cards = [
    new Card("Cavaleiro", "🛡️", "🪨", 60, 100, 100),
    new Card("Arqueiro", "🏹", "✂️", 40, 120, 150),
    new Card("Feiticeiro", "🔮", "📄", 80, 90, 125),
    new Card("Assassino", "🗡️", "✂️", 90, 50, 200),
    new Card("Berserker", "🪓", "🪨", 100, 140, 50),
    new Card("Ladrão", "🕵️‍♂️", "✂️", 100, 140, 50),
    new Card("Alquimista", "⚗️", "📄", 100, 140, 50),
    new Card("Bárbaro", "🦍", "🪨", 100, 140, 50),
    new Card("Guerreiro", "⚔️", "🪨", 100, 140, 50),
    new Card("Templário", "✝️", "🪨", 100, 140, 50),
    new Card("Bardo", "🎵", "📄", 100, 140, 50),
    new Card("Caçador", "🐾", "✂️", 100, 140, 50),
    new Card("Monge", "🧘", "📄", 100, 140, 50),
    new Card("Druída", "🌿", "✂️", 100, 140, 50),
    new Card("Clérigo", "🙏", "📄", 100, 140, 50),
]


Cards.forEach((card, index) => {
    const nomeEL = document.getElementById(`name-card-${index + 1}`);
    const simboloEL = document.getElementById(`img-card-${index + 1}`);
    const tipoEL = document.getElementById(`card-type-${index + 1}`)
    const atkEL = document.getElementById(`atk-card-${index + 1}`);
    const hpEL = document.getElementById(`hp-card-${index + 1}`);
    const spdEL = document.getElementById(`spd-card-${index + 1}`);

    if (nomeEL) nomeEL.textContent = card.nome;
    if (simboloEL) simboloEL.textContent = card.simbolo;
    if (tipoEL) tipoEL.textContent = card.tipo;
    if (atkEL) atkEL.textContent = card.atk;
    if (hpEL) hpEL.textContent = card.hp;
    if (spdEL) spdEL.textContent = card.spd;
});
