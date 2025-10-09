export function mostrarMenuInicial() {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  if (logo) logo.style.display = "block";

  // Primeiro, exibe as boas-vindas e conteúdo principal
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

    <h2>Confira nossa agenda.</h2>
    <p>
      Dia 11 de outubro de 2025: evento na Arena de Pernambuco, às 13 horas.
    </p>

    <h2>Álbum <strong>Mais Comunhão</strong></h2>
    <p>
      Confira as músicas do EP Mais Comunhão.<br>
      <a href="https://open.spotify.com/intl-pt/track/6wn3ZDK4ahgIMW9BErWGVl?si=53db13e3c9924643">
        Tocar Mais Comunhão no <strong>Spotify</strong>
      </a><br>
      <a href="https://youtu.be/PgAUuSSgSW8?si=3xJBpU90u1V7K7qi">
        Tocar Mais Comunhão no <strong>YouTube</strong>
      </a>
    </p>
  `;

  // Depois, exibe o menu com os links das telas
  menuContainer.innerHTML = `
    <nav>
      <ul>
        <li><a href="#" onclick="abrirTela('poesias')">Poesias</a></li>
        <li><a href="#" onclick="abrirTela('convite')">Convite</a></li>
        <li><a href="#" onclick="abrirTela('loja')">Loja</a></li>
        <li><a href="#" onclick="abrirTela('quemSomos')">Quem Somos</a></li>
        <li><a href="#" onclick="abrirTela('faleConosco')">Fale Conosco</a></li>
      </ul>
    </nav>
  `;
}
