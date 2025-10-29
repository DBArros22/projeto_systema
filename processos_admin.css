// Espera o DOM estar completamente carregado
window.onload = function() {
  // Captura do container do relatório
  const relatorioContainer = document.getElementById("relatorio");

  // Recupera dados do localStorage (ou cria array vazio se não houver)
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const processos = JSON.parse(localStorage.getItem("processosAdmin")) || [];

  // Preenche o relatório
  if (relatorioContainer) {
    relatorioContainer.innerHTML = `
      <h3>Resumo Geral</h3>
      <p>Total de clientes: ${clientes.length}</p>
      <p>Total de processos: ${processos.length}</p>
    `;
  }

  // Captura o botão de voltar **depois do DOM carregado**
  const btnVoltar = document.getElementById("voltarAdmin");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", function() {
      const confirmar = confirm("Deseja voltar para o menu do administrador?");
      if (confirmar) {
        window.location.href = "menu_admin.html";
      }
    });
  }
};
