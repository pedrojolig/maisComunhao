export function configurarFormularioConvite() {
  const form = document.getElementById("form-convite");
  const resposta = document.getElementById("resposta-convite");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector("input[placeholder='Seu Nome']").value.trim();
    const evento = form.querySelector("input[placeholder='Nome do Evento']").value.trim();
    const data = form.querySelector("input[type='date']").value;
    const mensagem = form.querySelector("textarea").value.trim();

    if (nome.length < 3 || evento.length < 3 || !data || mensagem.length < 5) {
      resposta.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    resposta.textContent = "Convite enviado com sucesso! Entraremos em contato.";
    form.reset();
  });
}

export function configurarFormularioContato() {
  const form = document.getElementById("form-contato");
  const resposta = document.getElementById("resposta-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector("input[placeholder='Seu Nome']").value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    if (nome.length < 3 || mensagem.length < 5) {
      resposta.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    resposta.textContent = "Mensagem enviada com sucesso! Deus abençoe.";
    form.reset();
  });
}
