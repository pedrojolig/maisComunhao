import { mostrarMenuInicial } from './navegacao.js';
import { telas } from './telas.js';
import {
  configurarFormularioConvite,
  configurarFormularioContato
} from './formularios.js';
import { tocarSom, toggleSom, atualizarBotaoSom } from './audio.js';

document.addEventListener("DOMContentLoaded", () => {
  window.mostrarMenuInicial();
});

window.abrirTela = function (tela) {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "none";

  menuContainer.innerHTML = `
    <button onclick="window.mostrarMenuInicial()" style="margin: 1em;">← Voltar</button>
    <button id="controle-som" onclick="window.toggleSom()" style="margin: 1em;" title="Ativar/Desativar som">🔊</button>
  `;

  atualizarBotaoSom();

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
  } else if (tela === "album") {
    tocarSom("som-album");
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("telaInicial");

  const botaoSom = document.getElementById("controle-som");
  if (botaoSom) atualizarBotaoSom();
};

window.toggleSom = toggleSom;
