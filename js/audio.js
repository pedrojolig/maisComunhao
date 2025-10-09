let somLigado = localStorage.getItem("somLigado") !== "false";

export function tocarSom(tipo) {
  if (!somLigado) return;

  const caminho = `audio/${tipo}.wav`;

  const audio = new Audio(caminho);
  audio.play().catch(() => {
    console.warn("Não foi possível reproduzir o áudio:", caminho);
  });
}

export function toggleSom() {
  somLigado = !somLigado;
  localStorage.setItem("somLigado", somLigado);

  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.textContent = somLigado ? "🔊" : "🔇";
  }
}

export function atualizarBotaoSom() {
  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.textContent = somLigado ? "🔊" : "🔇";
  }
}
