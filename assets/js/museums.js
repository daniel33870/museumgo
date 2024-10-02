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


document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.getElementById("map-container");
  const modal = document.getElementById("myModal");
  const modalBody = document.getElementById("modal-body");

  // Cuando se haga clic en el mapa, abre el modal
  mapContainer.addEventListener("click", function () {
    modalBody.innerHTML = `
    <h3>Map Museum</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95565101586415!3d-37.81732677975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e3d6d2a8f5b9!2sMelbourne%20Museum!5e0!3m2!1sen!2sau!4v1615516799013!5m2!1sen!2sau"
        width="100%"
        height="400px"
        allowfullscreen=""
        loading="lazy"
      ></iframe>`;
    modal.style.display = "block";
  });

  // Cierra el modal si el usuario hace clic fuera del contenido del modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
