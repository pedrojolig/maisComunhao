import { mostrarMenuInicial } from './navegacao.js';
import { telas } from './telas.js';
import {
  configurarFormularioConvite,
  configurarFormularioContato
} from './formularios.js';
import { tocarSom, toggleSom } from './audio.js';

document.addEventListener("DOMContentLoaded", () => {
  window.mostrarMenuInicial();
  tocarSom("intro-mais-comunhao");
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

  if (tela === "convite") configurarFormularioConvite();
  if (tela === "faleConosco") configurarFormularioContato();

  if (tela === "loja") tocarSom("som-loja");
  else if (tela === "poesias") tocarSom("som-poesias");
  else tocarSom("som-clique");
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("som-voltar");
};

window.toggleSom = toggleSom;
