document.getElementById("form-convite").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("resposta-convite").innerText =
    "Convite enviado com sucesso! Entraremos em contato.";
  this.reset();
});
