import arena from "../arena/arena.js";
import Charmander from "../entities/enemies/charmander/Charmander.js";

arena.createArena()

const limit = 10;
let counter = 0;
let y = 0;
let x = 0;

while (counter < limit) {
    const charmander = new Charmander(10, 5, 10, y, x);
    counter++
    y = Math.floor(Math.random() * (window.innerHeight - charmander.height));
    x = Math.floor(Math.random() * (window.innerWidth - charmander.width));
}