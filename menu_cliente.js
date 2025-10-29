document.addEventListener("DOMContentLoaded", () => {
  const btnMeusProcessos = document.getElementById("btnMeusProcessos");
  const btnFaleConosco = document.getElementById("btnFaleConosco");
  const btnLogout = document.getElementById("logoutCliente");
  const btnVoltarMenu = document.getElementById("btnVoltarMenuCliente");

  // Navegação para "Meus Processos"
  if (btnMeusProcessos) {
    btnMeusProcessos.addEventListener("click", () => {
      window.location.href = "meus_processos_cliente.html";
    });
  }

  // Navegação para "Fale Conosco"
  if (btnFaleConosco) {
    btnFaleConosco.addEventListener("click", () => {
      window.location.href = "fale_conosco_cliente.html";
    });
  }

  // Logout do cliente
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      if (confirm("Deseja realmente sair do sistema?")) {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
      }
    });
  }

  // Voltar ao menu do cliente
  if (btnVoltarMenu) {
    btnVoltarMenu.addEventListener("click", () => {
      window.location.href = "menu_cliente.html";
    });
  }
});
