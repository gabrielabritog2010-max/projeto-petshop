// Parte D - Repetições e funções
// 1
for (let i = 1; i <= 10; i++) { console.log(i); }
// 2 - tabuada do 5
for (let i = 1; i <= 10; i++) { console.log("5 x " + i + " = " + 5 * i); }
// 3 - lista de 5 produtos
const produtos = ["Ração", "Coleira", "Caminha", "Bolinha", "Areia"];
for (let i = 0; i < produtos.length; i++) { console.log(produtos[i]); }
// 4
function somar(a, b) { return a + b; }
console.log(somar(2, 3)); // mostra 5
// 5
function calcularTotal(preco, quantidade) { return preco * quantidade; }
console.log(calcularTotal(25, 3)); // mostra 75
// 6
function saudacao(nome) { console.log("Bem-vindo, " + nome + "!"); }
saudacao("Maria");
