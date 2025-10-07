let somAtivo = true;

export function toggleSom() {
  somAtivo = !somAtivo;
  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.innerText = somAtivo ? "🔊 Som: Ligado" : "🔇 Som: Desligado";
  }
}

export function tocarSom(nome) {
  if (!somAtivo) return;
  const audio = new Audio(`audio/${nome}.mp3`);
  audio.volume = 0.5;
  audio.play();
}
