document.addEventListener("DOMContentLoaded", () => {
  mostrarMenuInicial();
});

function mostrarMenuInicial() {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  // Exibe a logo
  if (logo) logo.style.display = "block";

  // Menu completo
  menuContainer.innerHTML = `
    <nav>
      <ul>
        <li><a href="#" onclick="abrirTela('inicio')">Início</a></li>
        <li><a href="#" onclick="abrirTela('poesias')">Poesias</a></li>
        <li><a href="#" onclick="abrirTela('convite')">Convite</a></li>
        <li><a href="#" onclick="abrirTela('loja')">Loja</a></li>
        <li><a href="#" onclick="abrirTela('quemSomos')">Quem Somos</a></li>
        <li><a href="#" onclick="abrirTela('faleConosco')">Fale Conosco</a></li>
      </ul>
    </nav>
  `;

  // Tela inicial
  conteudo.innerHTML = `
    <h1>Bem-vindos ao Ministério Mais Comunhão</h1>
    <p>Este é o nosso espaço para compartilhar fé, arte e amor.</p>
  `;
}

function abrirTela(tela) {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");

  // Oculta a logo
  if (logo) logo.style.display = "none";

  // Substitui o menu pelo botão voltar
  menuContainer.innerHTML = `
    <button onclick="mostrarMenuInicial()" style="margin: 1em;">← Voltar</button>
  `;

  // Carrega a tela correspondente
  switch (tela) {
    case "inicio":
      conteudo.innerHTML = `
        <h1>Bem-vindos ao Ministério Mais Comunhão</h1>
        <p>Este é o nosso espaço para compartilhar fé, arte e amor.</p>
      `;
      break;

    case "poesias":
      conteudo.innerHTML = `
        <h1>Poesias</h1>
        <ul>
          <li>"Promessa Viva"</li>
          <li>"Teu Amor nos Une"</li>
          <li>"Mais Comunhão"</li>
        </ul>
      `;
      break;

    case "convite":
      conteudo.innerHTML = `
        <h1>Convite para Ministrar</h1>
        <form id="form-convite">
          <input type="text" placeholder="Seu Nome" required />
          <input type="text" placeholder="Nome do Evento" required />
          <input type="date" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar Convite</button>
        </form>
        <div id="resposta-convite"></div>
      `;
      document.getElementById("form-convite").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("resposta-convite").innerText =
          "Convite enviado com sucesso! Entraremos em contato.";
        this.reset();
      });
      break;

    case "loja":
      conteudo.innerHTML = `
        <h1>Loja</h1>
        <ul>
          <li>CD "Mais Comunhão" – R$ 29,90</li>
          <li>Livro "Casais em Aliança" – R$ 39,90</li>
          <li>Camisa do Ministério – R$ 49,90</li>
        </ul>
      `;
      break;

    case "quemSomos":
      conteudo.innerHTML = `
        <h1>Quem Somos</h1>
        <p>Somos Ketyanne e [Seu Nome], fundadores do Ministério Mais Comunhão. Atuamos como cantores, compositores, intercessores e conselheiros de casais.</p>
      `;
      break;

    case "faleConosco":
      conteudo.innerHTML = `
        <h1>Fale Conosco</h1>
        <form id="form-contato">
          <input type="text" placeholder="Seu Nome" required />
          <textarea placeholder="Sua Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div id="resposta-contato"></div>
      `;
      document.getElementById("form-contato").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("resposta-contato").innerText =
          "Mensagem enviada com sucesso! Deus abençoe.";
        this.reset();
      });
      break;
  }
}
