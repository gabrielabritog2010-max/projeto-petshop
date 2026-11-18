// Parte A - Encontre os erros (código já corrigido)
// Erro 1: faltava fechar as aspas em "Ração 15kg"
// Erro 2: a variável é "preco" (minúscula), eu tinha escrito "Preco"
// Erro 3: faltava fechar o parêntese no if: if (preco > 50)
// Erro 4: o comando é console.log, não "consol.log"
let produto = "Ração 15kg";
let preco = 90;
console.log("Produto: " + produto);
console.log("Preço: R$ " + preco);
if (preco > 50) {
  console.log("Produto caro");
}
console.log("Fim");
