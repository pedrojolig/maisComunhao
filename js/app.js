import { mostrarMenuInicial } from './navegacao.js';
import { telas } from './telas.js';
import {
  configurarFormularioConvite,
  configurarFormularioContato
} from './formularios.js';
import { tocarSom, toggleSom } from './audio.js';

document.addEventListener("DOMContentLoaded", () => {
  window.mostrarMenuInicial();

  // Tenta tocar som imediatamente
  const audio = new Audio("audio/intro-mais-comunhao.mp3");
  audio.volume = 0.5;
  audio.play().catch(() => {
    // Se falhar, aguarda primeira interação
    const ativarSom = () => {
      audio.play();
      document.body.removeEventListener("click", ativarSom);
      document.body.removeEventListener("keydown", ativarSom);
      document.body.removeEventListener("touchstart", ativarSom);
    };

    document.body.addEventListener("click", ativarSom);
    document.body.addEventListener("keydown", ativarSom);
    document.body.addEventListener("touchstart", ativarSom);
  });
});

window.abrirTela = function (tela) {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "none";

  menuContainer.innerHTML = `
    <button onclick="window.mostrarMenuInicial()" style="margin: 1em;">← Voltar</button>
    <button id="controle-som" onclick="window.toggleSom()" style="margin: 1em;">🔊 Som: Ligado</button>
  `;

  conteudo.innerHTML = telas[tela] || "<p>Tela não encontrada.</p>";

  if (tela === "convite") {
    configurarFormularioConvite();
    tocarSom("som-formulario");
  }

  if (tela === "faleConosco") {
    configurarFormularioContato();
    tocarSom("som-formulario");
  }

  if (tela === "loja") {
    tocarSom("som-loja");
  } else if (tela === "poesias") {
    tocarSom("som-poesias");
  } else if (tela !== "convite" && tela !== "faleConosco") {
    tocarSom("som-clique");
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("som-voltar");
};

window.toggleSom = toggleSom;
