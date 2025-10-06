document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu").innerHTML = menuHTML;
  carregarPagina("inicio");
});

function carregarPagina(pagina) {
  switch (pagina) {
    case "inicio":
      document.getElementById("conteudo").innerHTML = `
        <h1>Bem-vindos ao Ministério Mais Comunhão</h1>
        <p>Este é o nosso espaço para compartilhar fé, arte e amor.</p>
  <h2>Confira a nossa agenda</h2>
  <p>Dia 11 de outubro de 2025: evento na Arena de Pernambuco, às 13 horas.</p>

  <h2>Álbum <strong>Mais Comunhão</strong></h2>
  <p>
    Confira as músicas do EP Mais Comunhão:<br>
    <a href="https://open.spotify.com/intl-pt/track/6wn3ZDK4ahgIMW9BErWGVl?si=53db13e3c9924643">
      Tocar no <strong>Spotify</strong>
    </a><br>
    <a href="https://youtu.be/PgAUuSSgSW8?si=3xJBpU90u1V7K7qi">
      Tocar no <strong>YouTube</strong>
    </a>
  </p>

      `;
      break;
    case "poesias":
      carregarPoesias();
      break;
    case "convite":
      carregarConvite();
      break;
    case "loja":
      carregarLoja();
      break;
    case "quemSomos":
      carregarQuemSomos();
      break;
    case "faleConosco":
      carregarFaleConosco();
      break;
  }
}
