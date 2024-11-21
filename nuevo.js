const API_URL = "https://random-data-api.com/api/v2/users";
const userList = document.getElementById("user-list");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Fetch datos de la API
fetch(`${API_URL}?size=10&response_type=json`)  // Cambia el número de usuarios a obtener si es necesario
  .then((response) => response.json())
  .then((data) => renderUsers(data))
  .catch((error) => {
    console.error("Error al cargar los usuarios:", error);
  });

// Función para renderizar los usuarios
function renderUsers(users) {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Aseguramos que haya una imagen o usamos un placeholder
    const userImage = user.avatar || "https://placehold.co/150x150";
    
    card.innerHTML = `
      <img src="${userImage}" alt="${user.first_name} ${user.last_name}">
      <h3>${user.first_name} ${user.last_name}</h3>
    `;

    // Evento de clic para abrir el modal
    card.addEventListener("click", () => openModal(user));
    userList.appendChild(card);
  });
}

// Función para abrir el modal con la información del usuario
function openModal(user) {
  modalImg.src = user.avatar || "https://placehold.co/150x150";  // Usamos avatar si está disponible
  modalName.textContent = `${user.first_name} ${user.last_name}`;

  modalDescription.innerHTML = `
    <p><strong>Correo electrónico:</strong> ${user.email || 'Desconocido'}</p>
    <p><strong>Dirección:</strong> ${user.address || 'Desconocida'}</p>
    <p><strong>Fecha de nacimiento:</strong> ${user.date_of_birth || 'Desconocida'}</p>
    <p><strong>Género:</strong> ${user.gender || 'Desconocido'}</p>
  `;

  // Mostrar el modal
  modal.style.display = "flex";  // Cambiar a "flex" para que el modal sea visible
}

// Cerrar el modal cuando se hace clic en la "X"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";  // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera de la ventana modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";  // Ocultar el modal
  }
});
