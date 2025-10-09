// Estado inicial do som baseado no localStorage
let somLigado = localStorage.getItem("somLigado") !== "false";

// Função para tocar som, se estiver ativado
export function tocarSom(tipo) {
  if (!somLigado) return;

  const sons = {
    telaInicial: "audio/telaInicial.mp3",
    somFormulario: "audio/som-formulario.mp3",
    somLoja: "audio/som-loja.mp3",
    somPoesias: "audio/som-poesias.mp3",
    somVoltar: "audio/som-voltar.mp3"
  };

  const caminho = sons[tipo];
  if (caminho) {
    const audio = new Audio(caminho);
    audio.play();
  }
}

// Alterna o estado do som e atualiza o botão
export function toggleSom() {
  somLigado = !somLigado;
  localStorage.setItem("somLigado", somLigado);
  atualizarBotaoSom();
}

// Atualiza o texto do botão com base no estado atual
export function atualizarBotaoSom() {
  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.textContent = somLigado ? "🔊 Som: Ligado" : "🔇 Som: Desligado";
  }
}
