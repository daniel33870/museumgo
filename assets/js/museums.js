// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Obtener todos los botones que abren el modal
var modalButtons = document.querySelectorAll(".modal-btn");

// Obtener el cuerpo del modal
var modalBody = document.getElementById("modal-body");

// Datos que se mostrarán en el modal
var modalContent = {
  horarios: "<h3>Horarios del museo</h3><p>Lunes a viernes: 9am - 6pm</p>",
  precios: "<h3>Precios de entrada</h3><p>Adultos: $10 <br/> Niños: $5</p>"
};

// Cuando el usuario hace clic en el botón, abre el modal
modalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var target = button.getAttribute("data-target");
    modalBody.innerHTML = modalContent[target];
    modal.style.display = "block";
  });
});

// Datos que se mostrarán en el modal para salas y eventos
var detailContent = {
  salas: "<h3>Salas del museo</h3><p>Aquí hay una descripción detallada de las salas.</p>",
  eventos: "<h3>Eventos del museo</h3><p>Aquí hay una descripción detallada de los eventos.</p>"
};

// Agregar evento de clic para las salas
document.querySelector(".rooms").addEventListener("click", function () {
  modalBody.innerHTML = detailContent.salas;
  modal.style.display = "block";
});

// Agregar evento de clic para los eventos
document.querySelector(".events").addEventListener("click", function () {
  modalBody.innerHTML = detailContent.eventos;
  modal.style.display = "block";
});

// Cuando el usuario hace clic en el span (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
};

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



