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

  // Aguarda o DOM ser atualizado antes de executar ações específicas
  setTimeout(() => {
    switch (tela) {
      case "convite":
        configurarFormularioConvite();
        const campoConvite = document.querySelector("#form-convite input[placeholder='Seu Nome']");
        if (campoConvite) campoConvite.focus();
        tocarSom("som-formulario");
        break;

      case "faleConosco":
        configurarFormularioContato();
        const campoContato = document.querySelector("#form-contato input[placeholder='Seu Nome']");
        if (campoContato) campoContato.focus();
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
    }
  }, 200); // tempo suficiente para o DOM atualizar
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();

  setTimeout(() => {
    tocarSom("telaInicial");

    const menuContainer = document.getElementById("menu");
    if (menuContainer) {
      const botaoSom = document.createElement("button");
      botaoSom.id = "controle-som";
      botaoSom.onclick = window.toggleSom;
      botaoSom.style.marginTop = "1em";
      menuContainer.appendChild(botaoSom);
      atualizarBotaoSom();
    }
  }, 300);
};

window.toggleSom = toggleSom;
