document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("resposta-contato").innerText =
    "Mensagem enviada com sucesso! Deus abençoe.";
  this.reset();
});
