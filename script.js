// script.js

const numeros = [1, 2, 3, 4, 5, 6];

// 1. Prática com forEach: Apenas para iterar e causar um efeito colateral (ex: log)
console.log("--- Praticando forEach ---");
numeros.forEach(numero => {
  console.log(`O número é: ${numero}`);
});

// 2. Prática com map: Para transformar cada item em um novo array
console.log("\n--- Praticando map ---");
const numerosDobrados = numeros.map(numero => numero * 2);
console.log("Array original:", numeros);
console.log("Array com números dobrados:", numerosDobrados);

// 3. Prática com filter: Para criar um novo array com itens que passam em um teste
console.log("\n--- Praticando filter ---");
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Array original:", numeros);
console.log("Array com apenas números pares:", numerosPares);
