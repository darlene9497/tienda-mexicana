const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Toggle the 'menu-open' class when the menu open button is clicked.
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});


//  Close menu when the close button is clicked.
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
});