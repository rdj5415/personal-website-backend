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

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-animation');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Project video/image hover effect
document.querySelectorAll('.project-media').forEach(media => {
    media.addEventListener('mouseenter', () => {
        media.classList.add('enlarged');
    });
    
    media.addEventListener('mouseleave', () => {
        media.classList.remove('enlarged');
    });
});

// Form Validation Enhancement
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Submit form
        contactForm.submit();
        
        // Show success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNavToggle.querySelector('i').classList.toggle('fa-bars');
    mobileNavToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileNavToggle.querySelector('i').classList.add('fa-bars');
        mobileNavToggle.querySelector('i').classList.remove('fa-times');
    }
});

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Loading Animation
const loadingTexts = ['Loading...', 'Preparing your experience...', 'Almost there...'];
let loadingTextIndex = 0;
const loadingText = document.querySelector('.loading-text');

const loadingTextInterval = setInterval(() => {
    loadingTextIndex = (loadingTextIndex + 1) % loadingTexts.length;
    loadingText.textContent = loadingTexts[loadingTextIndex];
}, 1500);

window.addEventListener('load', () => {
    clearInterval(loadingTextInterval);
    const loader = document.querySelector('.loading-animation');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Enhanced Scroll Animations
const fadeUpElements = document.querySelectorAll('.fade-up');
const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeUpElements.forEach(element => {
    fadeUpObserver.observe(element);
});

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Project Carousel Functionality
const projectContainer = document.querySelector('.project-container');
const slides = document.querySelectorAll('.project-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.project-dots');

let currentSlide = 0;
let isAnimating = false;
let autoAdvanceInterval;
const SLIDE_DURATION = 8000; // Increased to 8 seconds

// Create dots for each slide
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('project-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        if (!isAnimating && currentSlide !== index) {
            goToSlide(index);
        }
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.project-dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(slideIndex) {
    if (isAnimating) return;
    isAnimating = true;

    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
    updateDots();

    // Reset animation lock after transition
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    if (!isAnimating) nextSlide();
});

prevBtn.addEventListener('click', () => {
    if (!isAnimating) prevSlide();
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (!isAnimating) nextSlide();
    } else if (e.key === 'ArrowLeft') {
        if (!isAnimating) prevSlide();
    }
});

// Auto-advance slides
function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
}

// Start auto-advance and handle hover pause
projectContainer.addEventListener('mouseenter', stopAutoAdvance);
projectContainer.addEventListener('mouseleave', startAutoAdvance);

// Initial auto-advance start
startAutoAdvance();

// Scroll Animation Observer
const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add animation classes when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // For grid items, add staggered animations
                if (entry.target.classList.contains('skill-card') || 
                    entry.target.classList.contains('interest-card')) {
                    const items = entry.target.parentElement.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 100); // 100ms delay between each item
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe elements with animation classes
    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .skill-card, .interest-card').forEach(el => {
        observer.observe(el);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    document.querySelector('.about-content').classList.add('slide-in-left');
    document.querySelector('.skills-section').classList.add('slide-in-up');
    document.querySelector('.projects-section').classList.add('slide-in-right');
    document.querySelector('.education-section').classList.add('slide-in-left');
    document.querySelector('.interests-section').classList.add('slide-in-up');
    document.querySelector('.contact-section').classList.add('slide-in-right');
    
    // Initialize scroll animations
    animateOnScroll();
});

