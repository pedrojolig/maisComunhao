const sons = {
  "telaInicial.wav": new Audio("audio/telaInicial.wav"),
  "som-formulario.wav": new Audio("audio/som-formulario.wav"),
  "faleConosco.wav": new Audio("audio/faleConosco.wav"),
  "loja.wav": new Audio("audio/loja.wav"),
  "poesias.wav": new Audio("audio/poesias.wav"),
  "quemSomos.wav": new Audio("audio/quemSomos.wav"),
  "albuns.wav": new Audio("audio/albuns.wav"),
  "entrega.wav": new Audio("audio/entrega.wav"),
  "epMaisComunhao.wav": new Audio("audio/epMaisComunhao.wav")
};

export function tocarSom(nome) {
  if (sons[nome]) {
    sons[nome].play();
  }
}

export function toggleSom() {
  const estadoAtual = localStorage.getItem("somAtivo") === "true";
  localStorage.setItem("somAtivo", !estadoAtual);
  atualizarBotaoSom();
}

export function atualizarBotaoSom() {
  const botao = document.getElementById("controle-som");
  const somAtivo = localStorage.getItem("somAtivo") === "true";
  if (botao) {
    botao.textContent = somAtivo ? "🔊" : "🔇";
  }
}
