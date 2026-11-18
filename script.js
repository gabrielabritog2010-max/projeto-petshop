// Patas & Cia - script.js
// Cada bloco abaixo é uma função com uma tarefa só.

// ---------- Carrinho (R4) ----------
const carrinho = [];   // guarda {nome, preco} de cada item adicionado

function formatarReal(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function calcularTotal() {
  let total = 0;
  carrinho.forEach(function (item) { total = total + item.preco; });
  return total;
}

function atualizarCarrinho() {
  document.getElementById("contador").textContent = carrinho.length;
  document.getElementById("contadorMenu").textContent = carrinho.length;
  document.getElementById("total").textContent = formatarReal(calcularTotal());

  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  carrinho.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item.nome + " - " + formatarReal(item.preco);
    lista.appendChild(li);
  });
}

function adicionarItem(nome, preco) {
  carrinho.push({ nome: nome, preco: preco });
  atualizarCarrinho();
}

function removerItem() {
  if (carrinho.length > 0) {      // não deixa ficar negativo
    carrinho.pop();
    atualizarCarrinho();
  }
}

document.querySelectorAll(".btn-adicionar").forEach(function (botao) {
  botao.addEventListener("click", function () {
    adicionarItem(botao.dataset.nome, Number(botao.dataset.preco));
  });
});
document.getElementById("btnRemover").addEventListener("click", removerItem);

// ---------- Mostrar / esconder (R3) ----------
document.getElementById("btnSaibaMais").addEventListener("click", function () {
  document.getElementById("textoSaibaMais").classList.toggle("escondido");
});

// ---------- Modo escuro ----------
document.getElementById("btnTema").addEventListener("click", function () {
  const escuro = document.body.classList.toggle("escuro");
  document.documentElement.setAttribute("data-bs-theme", escuro ? "dark" : "light");
  this.textContent = escuro ? "Modo claro" : "Modo escuro";
});

// ---------- Formulário (R5) ----------
document.getElementById("formContato").addEventListener("submit", function (evento) {
  evento.preventDefault();   // impede a página de recarregar
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const aviso = document.getElementById("aviso");

  if (nome === "" || email === "" || mensagem === "") {
    aviso.textContent = "Preencha o nome, o e-mail e a mensagem.";
  } else {
    aviso.textContent = "Mensagem enviada! Obrigado, " + nome + ".";
  }
});

// ---------- Busca de CEP (R6) ----------
document.getElementById("btnBuscar").addEventListener("click", async function () {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");  // só números
  const resultado = document.getElementById("resultado");

  if (cep.length !== 8) {
    resultado.textContent = "Digite os 8 números do CEP.";
    return;
  }

  resultado.textContent = "Carregando...";
  try {
    const resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    const dados = await resposta.json();
    if (dados.erro) {
      resultado.textContent = "CEP não encontrado.";
    } else {
      resultado.textContent = dados.logradouro + ", " + dados.bairro + " - " + dados.localidade + "/" + dados.uf;
    }
  } catch (erro) {
    resultado.textContent = "Erro ao buscar. Verifique a internet.";
  }
});
