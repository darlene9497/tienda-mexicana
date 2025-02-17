function loadHTMLComponent(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

// Load and footer
document.addEventListener("DOMContentLoaded", function () {
    const backLink = document.querySelector(".back-link");

    if (backLink) {
        backLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            if (document.referrer) {
                window.history.back(); // Go back without reload
            } else {
                window.location.href = "/index.html"; // Fallback if no history
            }
        });
    }

    // Check if user is navigating back
    if (performance.navigation.type === 2) { // Type 2 means "Back/Forward navigation"
        let scrollPos = sessionStorage.getItem("scrollPosition");
        if (scrollPos !== null) {
            window.scrollTo(0, scrollPos);
        }
    } else {
        // If opening the page fresh, start at the top
        window.scrollTo(0, 0);
    }

    // Save scroll position before leaving
    window.addEventListener("beforeunload", function () {
        sessionStorage.setItem("scrollPosition", window.scrollY);
    });
    
    // Load footer
    loadHTMLComponent("#footer-placeholder", "/footer.html");
});
