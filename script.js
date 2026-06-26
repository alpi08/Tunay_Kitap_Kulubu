/**
 * TUNAY KİTAP KULÜBÜ - PREMIUM CORE JAVASCRIPT SYSTEM
 * 2026 Engine - Pure Vanilla Web Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. ADVANCED INTRO CURTAIN ENGINE (HARF HARF TAM SENKRONİZASYON)
    // ==========================================================================
    const runIntroEngine = () => {
        const mainTitle = document.getElementById('intro-main-title');
        const subTitle = document.getElementById('intro-sub-title');
        const curtain = document.getElementById('intro-curtain');
        const progress = document.querySelector('.intro-progress');

        if (!mainTitle || !subTitle) return;

        // Metinleri Harflere Bölme Fonksiyonu (Netlik Garantili)
        const parseToSpans = (element) => {
            const text = element.textContent;
            element.textContent = '';
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.className = 'intro-char';
                span.innerHTML = char === ' ' ? '&nbsp;' : char;
                span.style.transitionDelay = `${index * 50}ms`;
                element.appendChild(span);
            });
        };

        parseToSpans(mainTitle);
        parseToSpans(subTitle);

        // Animasyon Sekansı Başlatma
        setTimeout(() => {
            if(progress) progress.style.width = '100%';
            
            const chars = document.querySelectorAll('.intro-char');
            chars.forEach(char => char.classList.add('active'));
        }, 200);

        // Perdeyi Kapatma Zamanlaması (Animasyonlar bitince pürüzsüz kalkar)
        setTimeout(() => {
            curtain.classList.add('loaded');
        }, 3200);
    };
    runIntroEngine();


    // ==========================================================================
    // 2. KOZMİK PARTİKÜL SİSTEMİ (DYNAMIC BACKGROUND CANVAS)
    // ==========================================================================
    const initCosmicCanvas = () => {
        const canvas = document.getElementById('cosmic-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 10;
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            draw() {
                const isDark = document.body.classList.contains('dark-theme');
                ctx.fillStyle = isDark ? `rgba(167, 139, 250, ${this.alpha})` : `rgba(67, 56, 202, ${this.alpha * 0.4})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Süzülme Hareketi
                this.baseY -= 0.15;
                if (this.baseY < 0) {
                    this.baseY = canvas.height;
                    this.x = Math.random() * canvas.width;
                    this.baseX = this.x;
                }

                // Fare Etkileşimi (Magnet Efekti)
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.hypot(dx, dy);
                    
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = (dx / distance) * force * this.density * 0.4;
                        let directionY = (dy / distance) * force * this.density * 0.4;
                        this.x += directionX;
                        this.y += directionY;
                        return;
                    }
                }
                
                // Eski Yerine Yavaşça Dönme
                this.x += (this.baseX - this.x) * 0.05;
                this.y += (this.baseY - this.y) * 0.05;
            }
        }

        const setupParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        setupParticles();

        const animateCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateCanvas);
        };
        animateCanvas();
    };
    initCosmicCanvas();


    // ==========================================================================
    // 3. INTERACTIVE 3D TILT ENGINE (HERO COMPONENT)
    // ==========================================================================
    const init3DTilt = () => {
        const tiltCard = document.getElementById('interactive-3d-card');
        if (!tiltCard) return;

        tiltCard.addEventListener('mousemove', (e) => {
            const rect = tiltCard.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            
            // Merkez noktasından sapma hesabı
            const x = e.clientX - rect.left - (w / 2);
            const y = e.clientY - rect.top - (h / 2);
            
            // Dönüş Dereceleri Limiti (Max 15 derece)
            const rotateX = -(y / (h / 2)) * 15;
            const rotateY = (x / (w / 2)) * 15;

            tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        tiltCard.addEventListener('mouseleave', () => {
            tiltCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    };
    init3DTilt();


    // ==========================================================================
    // 4. MOUSE-TRACKING SPOTLIGHT SHIMMER (CONTACT CARD)
    // ==========================================================================
    const initSpotlightCard = () => {
        const spotlightCard = document.getElementById('spotlight-card');
        if (!spotlightCard) return;

        spotlightCard.addEventListener('mousemove', (e) => {
            const rect = spotlightCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            spotlightCard.style.setProperty('--m-x', `${x}px`);
            spotlightCard.style.setProperty('--m-y', `${y}px`);
        });
    };
    initSpotlightCard();


    // ==========================================================================
    // 5. INTUITIVE THEME BLEND SWITCHER
    // ==========================================================================
    const initThemeEngine = () => {
        const toggleInput = document.getElementById('toggle');
        if (!toggleInput) return;

        toggleInput.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.replace('dark-theme', 'light-theme');
            } else {
                document.body.classList.replace('light-theme', 'dark-theme');
            }
        });
    };
    initThemeEngine();


    // ==========================================================================
    // 6. INTERSECTION OBSERVER & ACTIVE NAVBAR LINKS
    // ==========================================================================
    const initScrollObserver = () => {
        const revealElements = document.querySelectorAll('.reveal-fade');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbar = document.querySelector('.navbar');

        // Navbar Küçülme Efekti
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Aşağı Kaydırınca Açılan Elementler
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        revealElements.forEach(el => elementObserver.observe(el));

        // Aktif Sayfa Bölümünü Yakalama
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.4 });

        document.querySelectorAll('section').forEach(section => sectionObserver.observe(section));
    };
    initScrollObserver();

});
