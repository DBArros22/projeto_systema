// Garante que o DOM esteja carregado
window.onload = function() {
  // Botão voltar ao menu do admin
  const btnVoltar = document.getElementById("voltarAdmin");

  if (btnVoltar) {
    btnVoltar.addEventListener("click", function() {
      const confirmar = confirm("Deseja voltar para o menu do administrador?");
      if (confirmar) {
        window.location.href = "menu_admin.html";
      }
    });
  }

  // Exemplo: adicionar funcionalidade para os botões "Atualizar" de cada linha
  const btnAtualizar = document.querySelectorAll("table tbody button");
  btnAtualizar.forEach((btn) => {
    btn.addEventListener("click", function() {
      alert("Função de atualizar status do processo ainda não implementada.");
    });
  });
};
