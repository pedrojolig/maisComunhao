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

  // Sons específicos por tela
  if (tela === "convite") {
    configurarFormularioConvite();
    tocarSom("som-formulario.wav");
  }

  if (tela === "faleConosco") {
    configurarFormularioContato();
    tocarSom("faleConosco.wav");
  }

  if (tela === "loja") {
    tocarSom("loja.wav");
  } else if (tela === "poesias") {
    tocarSom("poesias.wav");
  } else if (tela === "quemSomos") {
    tocarSom("quemSomos.wav");
  } else if (tela === "albuns") {
    tocarSom("albuns.wav");
  } else if (tela === "cdEntrega") {
    tocarSom("entrega.wav");
  } else if (tela === "epMaisComunhao") {
    tocarSom("epMaisComunhao.wav");
  }
};

window.mostrarMenuInicial = function () {
  mostrarMenuInicial();
  tocarSom("telaInicial.wav");

  const botaoSom = document.getElementById("controle-som");
  if (botaoSom) atualizarBotaoSom();
};

window.toggleSom = toggleSom;
