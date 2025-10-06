document.addEventListener("DOMContentLoaded", () => {
  // Menu dinâmico
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="index.html">Página inicial</a></li>
        <li><a href="poesias.html">Poesias</a></li>
        <li><a href="convite.html">Convite</a></li>
        <li><a href="loja.html">Loja</a></li>
        <li><a href="quemSomos.html">Quem Somos</a></li>
        <li><a href="faleConosco.html">Fale Conosco</a></li>
      </ul>
    </nav>
  `;
  const menuContainer = document.getElementById("menu");
  if (menuContainer) {
    menuContainer.innerHTML = menuHTML;
  }

  // Formulário de Convite
  const formConvite = document.getElementById("form-convite");
  if (formConvite) {
    formConvite.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("resposta-convite").innerText =
        "Convite enviado com sucesso! Entraremos em contato.";
      formConvite.reset();
    });
  }

  // Formulário de Contato
  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("resposta-contato").innerText =
        "Mensagem enviada com sucesso! Deus abençoe.";
      formContato.reset();
    });
  }
});
