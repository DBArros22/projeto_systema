document.addEventListener("DOMContentLoaded", function() {
  const btnCliente = document.getElementById("btnCliente");
  const btnAdmin = document.getElementById("btnAdmin");

  if (btnCliente) {
    btnCliente.addEventListener("click", function() {
      window.location.href = "login_cliente.html";
    });
  }

  if (btnAdmin) {
    btnAdmin.addEventListener("click", function() {
      window.location.href = "login_admin.html";
    });
  }
});
