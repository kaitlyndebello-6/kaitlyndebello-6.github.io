// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";
    });


    // Close the menu after clicking a navigation link.

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";
        });

    });

}


// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ========================================
// ACTIVE NAVIGATION SECTION
// ========================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// ========================================
// PREVENT PLACEHOLDER LINKS
// ========================================

// LinkedIn and Portfolio appear on Katie's résumé,
// but their URLs were not available in the supplied
// résumé text. Until the real URLs are inserted,
// prevent the placeholder "#" links from jumping
// to the top of the page.

document.querySelectorAll(".needs-link").forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();
        }

    });

});
