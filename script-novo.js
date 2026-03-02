// ============================================
// FAQ ACCORDION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle do item atual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// ============================================
// SCROLL SUAVE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ============================================
// ANIMAÇÕES AO APARECER (Intersection Observer)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicar animação aos elementos
    const animatedElements = document.querySelectorAll('.help-block, .process-step, .faq-item, .about-content p');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ============================================
// EFEITO HOVER NOS BOTÕES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .help-btn, .btn-contact');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ============================================
// TRACKING DE CLICKS NO WHATSAPP (Opcional)
// ============================================
function trackWhatsAppClick(location, area) {
    // Aqui você pode adicionar código de tracking (Google Analytics, etc.)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': location,
            'value': area || 'geral'
        });
    }
    
    // Log para debug (remover em produção se necessário)
    console.log('WhatsApp clicked from:', location, area || '');
}

// Adicionar tracking aos botões de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            let location = 'geral';
            let area = '';
            
            // Identificar origem do clique
            if (this.classList.contains('whatsapp-float')) {
                location = 'float_button';
            } else if (this.classList.contains('btn-primary')) {
                location = 'hero_button';
            } else if (this.classList.contains('btn-contact')) {
                location = 'contact_button';
            } else if (this.classList.contains('help-btn')) {
                location = 'help_block';
                // Identificar área
                const block = this.closest('.help-block');
                if (block) {
                    const title = block.querySelector('h3');
                    if (title) {
                        area = title.textContent.trim();
                    }
                }
            } else if (this.classList.contains('footer-whatsapp')) {
                location = 'footer_link';
            }
            
            trackWhatsAppClick(location, area);
        });
    });
});

// ============================================
// MELHORAR ACESSIBILIDADE DO FAQ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        // Adicionar suporte a teclado
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Adicionar aria-expanded
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('role', 'button');
        question.setAttribute('tabindex', '0');
    });
    
    // Atualizar aria-expanded quando abrir/fechar
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const observer = new MutationObserver(function(mutations) {
            const isActive = item.classList.contains('active');
            question.setAttribute('aria-expanded', isActive.toString());
        });
        
        observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
});

// ============================================
// OTIMIZAÇÃO DE PERFORMANCE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imagens (se necessário no futuro)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Adicionar classe ao body quando carregar
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// ============================================
// PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o CSS está carregado antes de mostrar conteúdo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.opacity = '1';
        });
    } else {
        document.body.style.opacity = '1';
    }
});

// ============================================
// SMOOTH SCROLL POLYFILL (para navegadores antigos)
// ============================================
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill para smooth scroll se necessário
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}
