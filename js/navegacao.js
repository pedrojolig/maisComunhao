export function mostrarMenuInicial() {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "block";

  // Exibe a mensagem de boas-vindas
  conteudo.innerHTML = `
    <section id="boas-vindas">
      <h1>Shalom! Seja muito bem-vindo ao Ministério Mais Comunhão</h1>
      <p>
        Que este espaço seja um lugar de paz, inspiração e comunhão com Deus. Aqui celebramos a fé, o amor que nos une como corpo de Cristo.
      </p>
      <blockquote>
        “O Senhor te abençoe e te guarde;<br>
        o Senhor faça resplandecer o Seu rosto sobre ti e tenha misericórdia de ti;<br>
        o Senhor sobre ti levante o Seu rosto e te dê a paz.”<br>
        <strong>— Números 6:24–26</strong>
      </blockquote>
    </section>

    <h2>Menu</h2>
    <nav aria-label="Menu principal">
      <ul>
        <li><a href="#" onclick="abrirTela('poesias')">Poesias</a></li>
        <li><a href="#" onclick="abrirTela('convite')">Convite</a></li>
        <li><a href="#" onclick="abrirTela('loja')">Loja</a></li>
        <li><a href="#" onclick="abrirTela('albuns')">Álbuns</a></li>
        <li><a href="#" onclick="abrirTela('quemSomos')">Quem Somos</a></li>
        <li><a href="#" onclick="abrirTela('faleConosco')">Fale Conosco</a></li>
      </ul>
    </nav>

    <h3>Confira nossa agenda</h3>
    <p>
    Estamos atualizando a nossa agenda
    </p>
  `;

  // Limpa o menuContainer para evitar duplicidade
  menuContainer.innerHTML = "";
}
