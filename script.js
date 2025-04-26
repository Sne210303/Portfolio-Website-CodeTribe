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
            });
            contactForm.reset(); 
        }, 2000); 
    });
}




