// Simulação de processos armazenados localmente
document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabelaProcessos").querySelector("tbody");
  const processos = JSON.parse(localStorage.getItem("processosCliente")) || [
    { id: 1, titulo: "Ação Trabalhista", status: "Em andamento" },
    { id: 2, titulo: "Divórcio Amigável", status: "Concluído" }
  ];

  // Exibe processos
  tabela.innerHTML = "";
  processos.forEach(proc => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${proc.id}</td>
      <td>${proc.titulo}</td>
      <td>${proc.status}</td>
    `;
    tabela.appendChild(tr);
  });

  // Botão voltar
  document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "menu_cliente.html";
  });
});
