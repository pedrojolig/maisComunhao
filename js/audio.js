// Verifica o estado inicial do som com base no localStorage
let somLigado = localStorage.getItem("somLigado") !== "false";

// Função para tocar som, se estiver ativado
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
      // Alguns navegadores bloqueiam autoplay sem interação
      console.warn("Não foi possível reproduzir o áudio:", caminho);
    });
  }
}

// Alterna o estado do som e atualiza o botão
export function toggleSom() {
  somLigado = !somLigado;
  localStorage.setItem("somLigado", somLigado);

  const botao = document.getElementById("controle-som");
  if (botao) {
    botao.textContent = somLigado ? "🔊 Som: Ligado" : "🔇 Som: Desligado";
  }
}
