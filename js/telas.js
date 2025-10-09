export const telas = {
  poesias: `
    <h1>Poesias de Ketyanne</h1>
    <ul>
      <li>
        <a href="https://youtu.be/oQ8BKHoMZ1Y" target="_blank">
          Poesia "Minha Identidade"
        </a>
      </li>
      <li>
        <a href="https://youtu.be/H_EIW4W34U8" target="_blank">
          Poesia "Tu Sabes Que Eu Te Amo, Senhor" no YouTube
        </a>
      </li>
      <li>
        <a href="https://youtu.be/2jBGCybzzKQ" target="_blank">
          Poesia "Seremos Sempre Assim" no YouTube
        </a>
      </li>
      <li>
        <a href="https://youtu.be/2i825adsCVg" target="_blank">
          Poesia "Hoje Eu Quero Falar de Saudade" no YouTube
        </a>
      </li>
      <li>
        <a href="https://youtu.be/nPhrfEz__ig" target="_blank">
          Poesia "Conforma-me Contigo" no YouTube
        </a>
      </li>
      <li>
      <a href="https://www.youtube.com/@ketyanne-ofc">Poesias, pregações, louvores, e muito mais em ketyanne-ofc no youtube</a>
      </li>
    </ul>
  `,
  convite: `
    <h1>Convite para Ministrar</h1>
    <form id="form-convite">
      <input type="text" placeholder="Pessoa Física ou Jurídica" required />
      <input type="email" placeholder="E-mail para contato" required />
      <input type="text" placeholder="Nome do Evento" required />
      <input type="text" placeholder="Local do Evento" required />
      <input type="text" placeholder="Duração do Evento" required />
      <input type="date" required />
      <textarea placeholder="Mensagem" required></textarea>
      <button type="submit" id="btn-convite" disabled>Enviar Convite</button>
    </form>
    <div id="resposta-convite"></div>
  `,
  loja: `
    <h1>Loja</h1>
    <ul>
      <li>CD "Mais Comunhão" – R$ 29,90</li>
      <li>Livro "Casais em Aliança" – R$ 39,90</li>
      <li>Camisa do Ministério – R$ 49,90</li>
    </ul>
  `,
  quemSomos: `
    <h1>Quem Somos</h1>
    <p>Somos Ketyanne e Pedro Lima, fundadores do Ministério Mais Comunhão. Atuamos como cantores, compositores, intercessores e conselheiros de casais.</p>
  `,
  faleConosco: `
    <h1>Fale Conosco</h1>
    <form id="form-contato">
      <input type="text" placeholder="Seu Nome" required />
      <input type="email" placeholder="Seu E-mail" required />
      <textarea placeholder="Sua Mensagem" required></textarea>
      <button type="submit" id="btn-contato" disabled>Enviar</button>
    </form>
    <div id="resposta-contato"></div>
  `
};
