function loadHTMLComponent(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", function () {
    loadHTMLComponent("#navbar-placeholder", "./navbar.html");
    loadHTMLComponent("#footer-placeholder", "/footer.html");
});
