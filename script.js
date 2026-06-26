/**
 * TUNAY KİTAP KULÜBÜ - INTELLECTUAL INTERACTION ENGINE 2026
 * Pure Performance, Luxury Micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INTRO ENGINE (GARANTİLİ VE KUSURSUZ KALDIRMA)
    const initPreloader = () => {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        // Sayfa tamamen yüklendiğinde perdeyi kaldır
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('unveil');
            }, 1800); 
        });

        // Fail-safe (Herhangi bir yükleme takılması durumunda maksimum 3 saniye sonra zorla aç)
        setTimeout(() => {
            preloader.classList.add('unveil');
        }, 3000);
    };
    initPreloader();


    // 2. BENTO CARDS MOUSE TRACKING GLOW EFFECT
    const initBentoGlow = () => {
        const cards = document.querySelectorAll('.bento-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    };
    initBentoGlow();


    // 3. MAGNETIC LOGO ARTIFACT ENGINE (HERO)
    const initMagneticArtifact = () => {
        const artifact = document.getElementById('magnetic-item');
        if (!artifact) return;

        artifact.addEventListener('mousemove', (e) => {
            const rect = artifact.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Mouse ile merkez arasındaki mesafe ve esneme katsayısı
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Yumuşak lüks kayma (Max 25px)
            artifact.style.transform = `translate(${deltaX * 0.15}px, ${deltaY * 0.15}px)`;
        });

        artifact.addEventListener('mouseleave', () => {
            artifact.style.transform = 'translate(0px, 0px)';
        });
    };
    initMagneticArtifact();


    // 4. NEXUS CARD CARD TRACKING GLOW (İLETİŞİM)
    const initNexusSpotlight = () => {
        const nexusCard = document.getElementById('nexus-card');
        if (!nexusCard) return;

        nexusCard.addEventListener('mousemove', (e) => {
            const rect = nexusCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            nexusCard.style.setProperty('--nexus-x', `${x}px`);
            nexusCard.style.setProperty('--nexus-y', `${y}px`);
        });
    };
    initNexusSpotlight();


    // 5. INTUITIVE INTERSECTION SCROLL REVEAL
    const initScrollReveal = () => {
        const triggers = document.querySelectorAll('.scroll-trigger');
        const routes = document.querySelectorAll('.route-link');
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        triggers.forEach(trigger => revealObserver.observe(trigger));

        // Active Route Highlighting during Scroll
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    routes.forEach(route => {
                        route.classList.remove('active');
                        if (route.getAttribute('href') === `#${currentId}`) {
                            route.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => sectionObserver.observe(section));
    };
    initScrollReveal();


    // 6. THEME SWAP SWITCHER
    const initThemeSystem = () => {
        const toggle = document.getElementById('toggle');
        if (!toggle) return;

        toggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.replace('dark-theme', 'light-theme');
            } else {
                document.body.classList.replace('light-theme', 'dark-theme');
            }
        });
    };
    initThemeSystem();

});
