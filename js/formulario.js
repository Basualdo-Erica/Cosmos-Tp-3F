// manejarFormulario.js
const manejarFormulario = (evento) => {
    evento.preventDefault();
    const mensaje = document.getElementById("mensaje-enviado");
    mensaje.textContent = "Gracias por contactarnos. Pronto te responderemos.";
    document.getElementById("form-contacto").reset();
  };
  
  // Asignar el manejador del formulario
  document.getElementById("form-contacto").addEventListener("submit", manejarFormulario);
  