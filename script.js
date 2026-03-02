// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    const toggleMenu = () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        // Prevenir scroll do body quando menu está aberto
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    // Suporte para click e touch
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao clicar fora (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Fechar todas as outras perguntas
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Toggle da pergunta clicada
        question.setAttribute('aria-expanded', !isExpanded);
    });
});

// Formulário de Contato
const contatoForm = document.getElementById('contatoForm');

if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contatoForm);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const assunto = formData.get('assunto');
        const mensagem = formData.get('mensagem');
        
        // Criar mensagem para WhatsApp
        const whatsappMessage = `Olá, Dra. Ruth. Meu nome é ${nome}.\n\nAssunto: ${assunto}\n\n${mensagem}\n\nE-mail para retorno: ${email}`;
        const whatsappUrl = `https://wa.me/5513997260053?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpar formulário
        contatoForm.reset();
        
        // Feedback visual (opcional)
        const submitButton = contatoForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Mensagem enviada!';
        submitButton.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = '';
        }, 3000);
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Ajustar offset baseado no tamanho da tela
                const headerOffset = window.innerWidth <= 768 ? 60 : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animação de entrada suave para elementos ao scrollar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.area-card, .diferencial-card, .conteudo-card, .sobre-content, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
