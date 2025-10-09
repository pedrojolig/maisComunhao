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
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();

  // Atualiza botão de som na tela inicial, se estiver presente
  const menuContainer = document.getElementById("menu");
  if (menuContainer) {
    const botaoSom = document.createElement("button");
    botaoSom.id = "controle-som";
    botaoSom.onclick = window.toggleSom;
    botaoSom.style.marginTop = "1em";
    menuContainer.appendChild(botaoSom);
    atualizarBotaoSom();
  }

  tocarSom("telaInicial");
};

window.toggleSom = toggleSom;
