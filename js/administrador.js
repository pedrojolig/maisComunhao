document.getElementById("form-login").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  try {
    const res = await fetch("/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (res.ok) {
      mensagem.style.color = "green";
      mensagem.textContent = "Login bem-sucedido!";
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 1000);
    } else {
      mensagem.style.color = "red";
      mensagem.textContent = data.erro || "Credenciais inválidas.";
    }
  } catch (err) {
    mensagem.style.color = "red";
    mensagem.textContent = "Erro ao conectar com o servidor.";
    console.error(err);
  }
});
