document.addEventListener("DOMContentLoaded", () => {
  // Carrega o menu em todas as páginas
  fetch("menu.html")
    .then(response => response.text())
    .then(html => {
      const menuContainer = document.getElementById("menu");
      if (menuContainer) {
        menuContainer.innerHTML = html;
      }
    })
    .catch(error => console.error("Erro ao carregar o menu:", error));

  // Lógica para a página de Convite
  const formConvite = document.getElementById("form-convite");
  if (formConvite) {
    formConvite.addEventListener("submit", function (e) {
      e.preventDefault();
      const resposta = document.getElementById("resposta-convite");
      if (resposta) {
        resposta.innerText = "Convite enviado com sucesso! Entraremos em contato.";
      }
      formConvite.reset();
    });
  }

  // Lógica para a página de Fale Conosco
  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      const resposta = document.getElementById("resposta-contato");
      if (resposta) {
        resposta.innerText = "Mensagem enviada com sucesso! Deus abençoe.";
      }
      formContato.reset();
    });
  }
});
