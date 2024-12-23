// Add JavaScript interactivity if needed
// Example: Smooth scrolling for navigation links

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a, .contact");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
