// Verifica o estado inicial do som com base no localStorage
let somLigado = localStorage.getItem("somLigado") !== "false";

// Função para tocar som, se estiver ativado
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
