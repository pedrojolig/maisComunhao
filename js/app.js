import { mostrarMenuInicial } from './navegacao.js';
import { telas } from './telas.js';
import {
  configurarFormularioConvite,
  configurarFormularioContato
} from './formularios.js';
import { tocarSom, toggleSom } from './audio.js';

let primeiraInteracao = false;

document.addEventListener("DOMContentLoaded", () => {
  window.mostrarMenuInicial();

  const ativarSom = () => {
    if (!primeiraInteracao) {
      primeiraInteracao = true;
      const conteudo = document.getElementById("conteudo");
      if (conteudo && conteudo.innerHTML.includes("Seja muito bem-vindo")) {
        tocarSom("intro-mais-comunhao");
      }
    }
  };

  // Escuta qualquer tipo de interação do usuário
  document.body.addEventListener("click", ativarSom, { once: true });
  document.body.addEventListener("keydown", ativarSom, { once: true });
  document.body.addEventListener("touchstart", ativarSom, { once: true });
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
