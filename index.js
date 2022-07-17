import { animal } from "./animal.js";

let cat = new animal('cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs)