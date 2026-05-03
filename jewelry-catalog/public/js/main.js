document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtro de Categorías
    const filterButtons = document.querySelectorAll('.category');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    // Pequeña animación de re-entrada
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });

            // Feedback visual en botones (opcional)
            filterButtons.forEach(btn => btn.style.borderColor = 'var(--border-color)');
            button.style.borderColor = 'var(--accent-gold)';
        });
    });

    // 2. Header Sticky / Opacidad al Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
            header.style.padding = '0';
        }
    });

    // 3. Animación de entrada (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        card.classList.add('fade-in-element');
        observer.observe(card);
    });
});
