/* ===========================================
   DLOG - Main JavaScript
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Header Scroll Effect =====
    const header = document.getElementById('header');

    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ===== Mobile Menu Toggle =====
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ===== Category Filter =====
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        // Highlight active nav link
        const navLinks = document.querySelectorAll('.nav-link[data-category]');
        navLinks.forEach(link => {
            if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });

        // Filter articles
        const articles = document.querySelectorAll('.article-card[data-category]');
        articles.forEach(article => {
            if (article.dataset.category === category) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });

        // Hide hero if it doesn't match category
        const hero = document.querySelector('.hero');
        const heroCategory = hero?.querySelector('.hero-category')?.textContent.toLowerCase();
        if (hero && heroCategory !== category) {
            hero.style.display = 'none';
        }
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ===== Lazy Load Images =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
