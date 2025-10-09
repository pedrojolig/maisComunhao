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
    <button id="controle-som" onclick="window.toggleSom()" style="margin: 1em;"></button>
  `;
  atualizarBotaoSom();

  conteudo.innerHTML = telas[tela] || "<p>Tela não encontrada.</p>";

  switch (tela) {
    case "convite":
      configurarFormularioConvite();
      tocarSom("som-formulario");
      break;

    case "faleConosco":
      configurarFormularioContato();
      tocarSom("som-formulario");
      break;

    case "loja":
      tocarSom("som-loja");
      break;

    case "poesias":
      tocarSom("som-poesias");
      break;

    case "inicio":
      tocarSom("telaInicial");
      break;

    default:
      break;
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();

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
