// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        
        // Ici, normalement, on enverrait les données à un serveur
        // Pour cet exemple, on simule juste un envoi réussi
        alert(`Merci ${name}! Votre message a été envoyé avec succès. Nous vous répondrons à ${email} dans les plus brefs délais.`);
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
}

// Smooth scroll pour les ancres internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorer les liens vers d'autres pages
        if (href === '#' || href.startsWith('#!') || 
            href.includes('.html') || 
            this.classList.contains('filter-btn')) {
            return;
        }
        
        e.preventDefault();
        
        const targetId = href;
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Toggle (pour la page contact)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        answer.classList.toggle('active');
        
        if (answer.classList.contains('active')) {
            icon.className = 'fas fa-chevron-up';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            icon.className = 'fas fa-chevron-down';
            answer.style.maxHeight = '0';
        }
    });
});

// Initialisation des FAQs
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease';
});