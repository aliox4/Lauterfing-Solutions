// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// Optionally, handle form submission success notification (without backend processing)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // The default behaviour will send data to Formspree or your configured endpoint
    // You can optionally show a message after submission
    // Uncomment below lines if you don't want page reload (works with Formspree AJAX)
    // e.preventDefault();
    // fetch(contactForm.action, {
    //   method: 'POST',
    //   body: new FormData(contactForm),
    //   headers: { 'Accept': 'application/json' }
    // }).then(response => {
    //   if (response.ok) {
    //     alert('Merci ! Votre message a été envoyé.');
    //     contactForm.reset();
    //   } else {
    //     alert("Une erreur s'est produite. Veuillez réessayer.");
    //   }
    // });
  });
}
