// Parte C - Decisões com if e else (cada exercício testado com 2 valores)
// 1
function aprovacao(nota) { console.log(nota >= 6 ? "Aprovado" : "Reprovado"); }
aprovacao(7); aprovacao(4);
// 2
function maioridade(idade) { if (idade >= 18) { console.log("Maior de idade"); } else { console.log("Menor de idade"); } }
maioridade(20); maioridade(15);
// 3
function frete(compra) { if (compra > 100) { console.log("Frete grátis"); } else { console.log("Frete de R$ 15"); } }
frete(150); frete(60);
// 4
function loja(hora) { if (hora >= 8 && hora <= 18) { console.log("Loja aberta"); } else { console.log("Loja fechada"); } }
loja(10); loja(22);
// 5
function desconto(compra) {
  if (compra > 500) { console.log("Desconto de 15%: R$ " + compra * 0.85); }
  else if (compra > 200) { console.log("Desconto de 10%: R$ " + compra * 0.90); }
  else { console.log("Sem desconto: R$ " + compra); }
}
desconto(600); desconto(300); desconto(100);
