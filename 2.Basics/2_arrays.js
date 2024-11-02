const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);

// ************ Spread *****

const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes);

const anotherArr = [1,2,2,[4,5,6], 7, [6,7,[4,5]]]
const real_another_arr = anotherArr.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("Deeksha"));
console.log(Array.from("Deeksha"));

console.log(Array.from({name:"deeksha"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));