document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("responsiveBanner");

    // Muestra el banner al cargar la página
    setTimeout(() => {
        banner.classList.add("show");
    }, 500); // Aparece después de 0.5 segundos
});

function hideBanner() {
    const banner = document.getElementById("responsiveBanner");
    banner.classList.remove("show"); // Oculta el banner
}