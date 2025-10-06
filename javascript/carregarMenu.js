// Este script carrega o menu.html dentro do elemento <header id="menu"> em cada página
document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("menu").innerHTML = html;
    });
});
