// // ===== SMOOTH SCROLL POUR LES ANCRES =====
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // ===== EFFET AU SURVOL DES BOUTONS =====
// const buttons = document.querySelectorAll('.btn-login, .nav-link, .cta-btn, .hero-btn, .submit-btn');
// buttons.forEach(button => {
//     button.addEventListener('mouseenter', function() {
//         this.style.transform = 'scale(1.05)';
//         this.style.transition = 'transform 0.3s ease';
//     });
//     button.addEventListener('mouseleave', function() {
//         this.style.transform = 'scale(1)';
//     });
// });

// // ===== GESTION DU HEADER AU SCROLL =====
// const header = document.querySelector('header');
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//         header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//         header.style.position = 'sticky';
//         header.style.top = '0';
//         header.style.zIndex = '1000';
//         header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
//     } else {
//         header.style.boxShadow = 'none';
//         header.style.backgroundColor = 'white';
//     }
// });

// // ===== ANIMATION DU LOGO =====
// const logo = document.querySelector('#img1');
// if (logo) {
//     logo.addEventListener('mouseenter', function() {
//         this.style.transform = 'rotate(10deg) scale(1.1)';
//         this.style.transition = 'transform 0.3s ease';
//     });
//     logo.addEventListener('mouseleave', function() {
//         this.style.transform = 'rotate(0deg) scale(1)';
//     });
// }

// // ===== GESTION DU FORMULAIRE DE CONTACT =====
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const subject = document.getElementById('subject').value;
//         const message = document.getElementById('message').value;
        
//         if (validateEmail(email)) {
//             alert(`Merci ${name}! Votre message a été envoyé avec succès.\n\nNous vous répondrons à ${email} dans les plus brefs délais.`);
//             console.log('Formulaire soumis:', {name, email, subject, message});
//             contactForm.reset();
//         } else {
//             alert('Veuillez entrer une adresse email valide.');
//         }
//     });
// }

// // ===== VALIDATION DE L'EMAIL =====
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// // ===== GESTION DU BOUTON CONNEXION =====
// const loginBtn = document.querySelector('.btn-login');
// if (loginBtn) {
//     loginBtn.addEventListener('click', function(e) {
//         // Laisser le lien aller à login.html
//     });
// }

// // ===== ANIMATION DES CARTES AU SCROLL =====
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.animation = 'slideIn 0.6s ease forwards';
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.service-card, .intro-card, .objective-card, .service-detailed').forEach(card => {
//     observer.observe(card);
// });

// // ===== MESSAGE DE BIENVENUE =====
// window.addEventListener('load', function() {
//     console.log('🚀 NAEPERtech - Bienvenue sur notre site!');
//     console.log('Contact: ayineemmanuel275@gmail.com');
//     console.log('Téléphone: +33 6 12 34 56 78');
// });

// // ===== GESTION DES CLICS SUR LES LIENS SOCIAUX =====
// const socialLinks = document.querySelectorAll('.social-btn');
// socialLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         if (this.getAttribute('href') === '#') {
//             e.preventDefault();
//             alert('Lien de réseau social à configurer');
//         }
//     });
// });

// // ===== INITIALISATION AU CHARGEMENT =====
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Page chargée avec succès');
    
//     // Ajouter l'animation au CSS dynamiquement
//     const style = document.createElement('style');
//     style.innerHTML = `
//         @keyframes slideIn {
//             from {
//                 opacity: 0;
//                 transform: translateY(20px);
//             }
//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }
//     `;
//     document.head.appendChild(style);
// });

// // ===== COMPTEUR POUR LES STATISTIQUES =====
// function countUp(element, target) {
//     let current = 0;
//     const increment = target / 50;
//     const interval = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             element.textContent = target;
//             clearInterval(interval);
//         } else {
//             element.textContent = Math.floor(current);
//         }
//     }, 30);
// }

// // Observer pour les statistiques
// const statsObserver = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !entry.target.dataset.counted) {
//             entry.target.dataset.counted = 'true';
//             const h4 = entry.target.querySelector('h4');
//             if (h4) {
//                 const number = parseInt(h4.textContent);
//                 if (!isNaN(number)) {
//                     countUp(h4, number);
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('.stat-box').forEach(box => {
//     statsObserver.observe(box);
// });
