let somLigado = localStorage.getItem("somLigado") !== "false";

export function tocarSom(tipo) {
  if (!somLigado) return;

  const sons = {
    "telaInicial": "audio/telaInicial.mp3",
    "som-formulario": "audio/som-formulario.mp3",
    "som-loja": "audio/som-loja.mp3",
    "som-poesias": "audio/som-poesias.mp3",
    "som-voltar": "audio/som-voltar.mp3"
  };

  const caminho = sons[tipo];
  if (caminho) {
    const audio = new Audio(caminho);
    audio.play().catch(() => {
      console.warn("Não foi possível reproduzir o áudio:", caminho);
    });
  }
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
