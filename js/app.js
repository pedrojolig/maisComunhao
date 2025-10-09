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

// Expondo funções globais para uso via onclick
window.abrirTela = function (tela) {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "none";

  // Renderiza menu com botão voltar e botão de som
  menuContainer.innerHTML = `
    <button onclick="window.mostrarMenuInicial()" style="margin: 1em;">← Voltar</button>
    <button id="controle-som" onclick="window.toggleSom()" style="margin: 1em;"></button>
  `;
  atualizarBotaoSom(); // Atualiza texto do botão com base no estado atual

  // Renderiza conteúdo da tela
  conteudo.innerHTML = telas[tela] || "<p>Tela não encontrada.</p>";

  // Configurações específicas por tela
  if (tela === "convite") {
    configurarFormularioConvite();
    tocarSom("somFormulario");
  }

  if (tela === "faleConosco") {
    configurarFormularioContato();
    tocarSom("somFormulario");
  }

  if (tela === "loja") {
    tocarSom("somLoja");
  } else if (tela === "poesias") {
    tocarSom("somPoesias");
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("telaInicial");
};

window.toggleSom = toggleSom;
