let somLigado = localStorage.getItem("somLigado") !== "false";

export function tocarSom(tipo) {
  if (!somLigado) return;

  const sons = {
    telaInicial: "audio/tela-inicial.mp3",
    somFormulario: "audio/formulario.mp3",
    somLoja: "audio/loja.mp3",
    somPoesias: "audio/poesias.mp3"
  };

  const caminho = sons[tipo];
  if (caminho) {
    const audio = new Audio(caminho);
    audio.play();
  }
}

export function toggleSom() {
  somLigado = !somLigado;
  localStorage.setItem("somLigado", somLigado);
  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.textContent = somLigado ? "🔊 Som: Ligado" : "🔇 Som: Desligado";
  }
}
