export function mostrarMenuInicial() {
  const logo = document.getElementById("logo");
  const menuContainer = document.getElementById("menu");

  if (logo) logo.style.display = "block";

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
