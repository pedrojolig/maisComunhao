import { mostrarMenuInicial } from './navegacao.js';
import { telas } from './telas.js';
import {
  configurarFormularioConvite,
  configurarFormularioContato
} from './formularios.js';

document.addEventListener("DOMContentLoaded", () => {
  window.mostrarMenuInicial(); // Chamada global para garantir execução
});

window.abrirTela = function (tela) {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "none";

  menuContainer.innerHTML = `
    <button onclick="window.mostrarMenuInicial()" style="margin: 1em;">← Voltar</button>
  `;

  conteudo.innerHTML = telas[tela] || "<p>Tela não encontrada.</p>";

  if (tela === "convite") configurarFormularioConvite();
  if (tela === "faleConosco") configurarFormularioContato();
};

window.mostrarMenuInicial = mostrarMenuInicial;
