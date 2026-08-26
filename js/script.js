// =========================================
// Portfolio interactions
// =========================================

// Add a small reveal effect when sections enter the viewport.

const revealElements = document.querySelectorAll(
    ".project-card, .experience-item, .approach-content, .about-text"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


// Add the reveal class behavior dynamically.

const style = document.createElement("style");

style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
