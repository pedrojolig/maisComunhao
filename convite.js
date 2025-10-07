function carregarConvite() {
  const conteudo = document.getElementById("conteudo");
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
}
