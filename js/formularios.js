import { tocarSom } from './audio.js';

export function configurarFormularioConvite() {
  const form = document.getElementById("form-convite");
  const botao = document.getElementById("btn-convite");
  const campos = form.querySelectorAll("input, textarea");

  // Foco automático no primeiro campo
  if (campos.length > 0) campos[0].focus();

  campos.forEach(campo => {
    campo.addEventListener("input", () => {
      const preenchido = Array.from(campos).every(i => i.value.trim() !== "");
      botao.disabled = !preenchido;
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    tocarSom("som-formulario");
    document.getElementById("resposta-convite").innerText =
      "Convite enviado com sucesso! Entraremos em contato.";
    form.reset();
    botao.disabled = true;
  });
}

export function configurarFormularioContato() {
  const form = document.getElementById("form-contato");
  const botao = document.getElementById("btn-contato");
  const campos = form.querySelectorAll("input, textarea");

  // Foco automático no primeiro campo
  if (campos.length > 0) campos[0].focus();

  campos.forEach(campo => {
    campo.addEventListener("input", () => {
      const preenchido = Array.from(campos).every(i => i.value.trim() !== "");
      botao.disabled = !preenchido;
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    tocarSom("som-formulario");
    document.getElementById("resposta-contato").innerText =
      "Mensagem enviada com sucesso! Deus abençoe.";
    form.reset();
    botao.disabled = true;
  });
}
