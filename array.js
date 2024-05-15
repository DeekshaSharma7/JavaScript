let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];

for (let i = 0; i < heroes.length; i++) {
  console.log(`List #${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}
