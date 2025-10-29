document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabelaClientes").querySelector("tbody");
  const form = document.getElementById("formCliente");

  // Recupera clientes do localStorage ou cria array vazio
  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  // Atualiza a tabela com os clientes
  const atualizarTabela = () => {
    tabela.innerHTML = "";
    clientes.forEach((c, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${c.nome}</td>
        <td>${c.email}</td>
        <td><button class="excluir" data-index="${index}">Excluir</button></td>
      `;
      tabela.appendChild(tr);
    });
  };

  // Adiciona novo cliente
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome && email) {
      clientes.push({ nome, email });
      localStorage.setItem("clientes", JSON.stringify(clientes));
      form.reset();
      atualizarTabela();
    }
  });

  // Excluir cliente
  tabela.addEventListener("click", (e) => {
    if (e.target.classList.contains("excluir")) {
      const index = e.target.dataset.index;
      clientes.splice(index, 1);
      localStorage.setItem("clientes", JSON.stringify(clientes));
      atualizarTabela();
    }
  });

  // Botão voltar ao menu
  const btnVoltar = document.getElementById("btnVoltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      const confirmar = confirm("Deseja realmente voltar ao menu do administrador?");
      if (confirmar) {
        window.location.href = "menu_admin.html";
      }
    });
  }

  // Inicializa tabela
  atualizarTabela();
});
