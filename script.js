const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero-section");

// Toggle the 'menu-open' class when the menu open button is clicked.
menuOpenButton.addEventListener("click", () => {
    console.log("Menu open button clicked");
    document.body.classList.toggle("menu-open");
});

//  Close menu when the close button is clicked.
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
});

// Close menu when a nav link is clicked.
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
    });
});

// Function to handle navbar background change on scroll
window.addEventListener("scroll", () => {
    const heroBottom = heroSection.offsetHeight;
    if (window.scrollY > heroBottom) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
