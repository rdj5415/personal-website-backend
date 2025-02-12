// Animated Particles Background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Simulate form submission
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }
});

// ✅ Function to Show Elements on Scroll
function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in, .hidden");

    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add("show");
        } else {
            el.classList.remove("show"); // Optional: remove if you don't want it to disappear when scrolling back up
        }
    });
}

// ✅ Run the function when scrolling
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Also trigger on page load

// ✅ Ensure All Sections Fade In on Load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        el.classList.add("show");
    });
});
