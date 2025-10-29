document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  const resposta = document.getElementById("respostaIA");
  const btnVoltar = document.getElementById("btnVoltarCliente");

  // Submissão do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (mensagem === "") {
      resposta.textContent = "Por favor, digite uma mensagem.";
      return;
    }

    // Resposta simulada (IA ou atendimento)
    resposta.textContent = "Recebido! Nossa equipe responderá em breve. Obrigado!";
    form.reset();
  });

  // Botão voltar ao menu do cliente
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      const confirmar = confirm("Deseja realmente voltar ao menu?");
      if (confirmar) {
        window.location.href = "menu_cliente.html";
      }
    });
  }
});
