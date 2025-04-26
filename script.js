const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        Swal.fire({
            title: 'Sending your message...',
            html: 'Please wait a moment.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        
        setTimeout(() => {
            Swal.fire({
                title: 'Thank You!',
                text: "Your message has been received. We'll be in touch soon!",
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                showClass: {
                    popup: 'animate__animated animate__bounceIn' 
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp' 
                }
            });
            contactForm.reset(); 
        }, 2000);
    });
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const icon = modeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ParticlesJS Background
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#007BFF"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        line_linked: {
            enable: true,
            color: "#007BFF"
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});

