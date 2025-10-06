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
