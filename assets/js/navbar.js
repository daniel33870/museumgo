const body = document.querySelector("body"), 
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    loader = body.querySelector(".loader-shape-3");

toggle.addEventListener('click', () => {
    sidebar.classList.toggle("close");

    // Verifica el ancho de la pantalla
    if (window.innerWidth <= 768) {
        // Si la sidebar está cerrada, oculta el loader
        if (sidebar.classList.contains("close")) {
            loader.classList.toggle("show");
            loader.classList.remove("hide");
        } else {
            loader.classList.toggle("hide");
            loader.classList.remove("show")

        }
    }
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});
