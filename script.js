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

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }
});

function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in, .hidden");

    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add("show");
        } else {
            el.classList.remove("show"); 
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        el.classList.add("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mediaElements = document.querySelectorAll(".project-video, .thrive-image");

    mediaElements.forEach(media => {
        media.addEventListener("click", function (event) {
            event.stopPropagation(); 

            if (this.classList.contains("enlarged")) {
                this.classList.remove("enlarged");
            } else {
                document.querySelectorAll(".enlarged").forEach(enlargedMedia => {
                    enlargedMedia.classList.remove("enlarged");
                });

                this.classList.add("enlarged"); 
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.classList.contains("project-video") && !event.target.classList.contains("thrive-image")) {
            document.querySelectorAll(".enlarged").forEach(enlargedMedia => {
                enlargedMedia.classList.remove("enlarged");
            });
        }
    });
});

