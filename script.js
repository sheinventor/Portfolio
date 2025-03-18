function searchFunction() {
    let query = document.getElementById("search").value.trim();
    if (query) {
        window.location.href = `resultados.html?q=${encodeURIComponent(query)}`;
    }
}

// Función para activar/desactivar el menú en móviles
function toggleMenu() {
    let nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

// Función para incluir la barra de navegación en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error cargando la barra de navegación:", error));
});
