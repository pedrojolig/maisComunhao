function carregarFaleConosco() {
  document.getElementById("conteudo").innerHTML = `
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
}
