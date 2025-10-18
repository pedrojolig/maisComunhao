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

  conteudo.classList.remove("fade-in");
  conteudo.classList.add("fade-out");

  setTimeout(() => {
    conteudo.innerHTML = telas[tela] || "<p>Tela não encontrada.</p>";
    conteudo.classList.remove("fade-out");
    conteudo.classList.add("fade-in");

    if (tela === "convite") {
      configurarFormularioConvite();
      tocarSom("som-formulario");
    } else if (tela === "faleConosco") {
      configurarFormularioContato();
      tocarSom("faleConosco");
    } else if (tela === "loja") {
      tocarSom("loja");
    } else if (tela === "poesias") {
      tocarSom("poesias");
    } else if (tela === "quemSomos") {
      tocarSom("quemSomos");
    } else if (tela === "albuns") {
      tocarSom("discografia");
    } else if (tela === "cdEntrega") {
      tocarSom("entrega");
    } else if (tela === "epMaisComunhao") {
      tocarSom("epMaisComunhao");
    }
  }, 300);
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("telaInicial");

  const botaoSom = document.getElementById("controle-som");
  if (botaoSom) atualizarBotaoSom();
};

window.toggleSom = toggleSom;
