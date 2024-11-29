// JavaScript source code

// Example: Add a fading effect to the hero section
window.addEventListener("scroll", () =>
{
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.opacity = 1 - window.scrollY / 800;
});
