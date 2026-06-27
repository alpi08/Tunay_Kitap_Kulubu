/**
 * TUNAY KİTAP KULÜBÜ - LIGHTWEIGHT PREMIUM ANIMATION ENGINE (TURKISH ONLY)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const introScreen = document.getElementById('master-intro');
    const siteWrapper = document.querySelector('.cosmic-wrapper');
    const dynamicNav = document.getElementById('dynamic-nav');
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');
    const nexus = document.getElementById('magnetic-nexus');
    const heroInner = document.getElementById('hero-interactive-content');

    // ==========================================================================
    // STAGGER ENJEKTÖRÜ (Doğrudan Türkçe HTML Metnini Parçalayan Temiz Sistem)
    // ==========================================================================
    function parseAndAnimateText() {
        // Kelime Kelime Bölme Motoru (Ana Başlık İçin)
        const titleEl = document.getElementById('stagger-title');
        if (titleEl) {
            const words = titleEl.innerText.split(' ');
            titleEl.innerHTML = words.map((word, wIdx) => {
                return `<span class="word-span" style="transition-delay: ${wIdx * 140}ms">${word}</span>`;
            }).join(' ');
        }

        // Harf Harf Bölme Motoru (Alt Açıklama Satırları İçin)
        const line1 = document.querySelector('.lead-line.line-1');
        const line2 = document.querySelector('.lead-line.line-2');
        let globalCharIndex = 0; 

        const splitLine = (el) => {
            if (!el) return;
            const chars = el.innerText.split('');
            el.innerHTML = chars.map(char => {
                globalCharIndex++;
                const delay = globalCharIndex * 12; 
                if (char === ' ') return `<span class="char-span space"></span>`;
                return `<span class="char-span" style="transition-delay: ${delay}ms">${char}</span>`;
            }).join('');
        };

        splitLine(line1);
        splitLine(line2);
    }

    // Metinleri animasyona hazır hale getirelim
    parseAndAnimateText();

    // Tema Kontrolü (Açık / Koyu Düğmesi Mekaniği)
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', function() {
            if (!this.checked) {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });
    }

    // ==========================================================================
    // CINEMATIC TIMELINE TRIGGER
    // ==========================================================================
    setTimeout(() => { introScreen.classList.add('step-line-reveal'); }, 500);

    setTimeout(() => {
        introScreen.classList.remove('step-line-reveal');
        introScreen.classList.add('step-logo-fadein');
    }, 1200);

    setTimeout(() => {
        introScreen.classList.remove('step-logo-fadein');
        introScreen.classList.add('step-logo-exit');
        siteWrapper.classList.add('site-ready');
        dynamicNav.classList.add('visible');
    }, 2500);

    setTimeout(() => { introScreen.style.display = 'none'; }, 3300);

    // Ana Ekran Animasyonlarının Sırayla Patlama Zamanlaması
    setTimeout(() => {
        const badge = document.querySelector('.sub-badge');
        if (badge) badge.classList.add('active');

        // Kelimeler sırayla gelsin
        document.querySelectorAll('.word-span').forEach(word => word.classList.add('animate'));
    }, 3200);

    setTimeout(() => {
        // Harfler sırayla aksın
        document.querySelectorAll('.char-span').forEach(char => char.classList.add('animate'));
    }, 3800);

    setTimeout(() => {
        // CTA Butonları ve Diğer Tuşlar Aktifleşsin
        document.querySelectorAll('.premium-cta-btn').forEach(cta => cta.classList.add('active'));
    }, 4600);

    // ==========================================================================
    // INTERACTIVE PARALLAX & CARD REVEAL
    // ==========================================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled > 5) {
            if (heroInner) {
                heroInner.style.transform = `scale(0.96) translateY(${scrolled * 0.1}px)`;
                heroInner.style.opacity = `${1 - scrolled / 500}`;
            }
        } else {
            if (heroInner) { heroInner.style.transform = `scale(1) translateY(0px)`; heroInner.style.opacity = `1`; }
        }

        // Kültür kartlarının sırayla yukarı fırlayarak belirmesi
        const cardsGrid = document.getElementById('stagger-card-grid');
        if (cardsGrid) {
            const rect = cardsGrid.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88) {
                cardsGrid.querySelectorAll('.sleek-card').forEach((card, index) => {
                    setTimeout(() => { card.classList.add('revealed'); }, index * 90);
                });
            }
        }
    });

    // Bize Katıl Kartı Parallax Efekti
    if (nexus && window.innerWidth > 768) {
        nexus.addEventListener('mousemove', (e) => {
            const rect = nexus.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const moveX = (e.clientX - centerX) * 0.025;
            const moveY = (e.clientY - centerY) * 0.025;

            nexus.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY * 0.04}deg) rotateY(${moveX * 0.04}deg)`;
        });

        nexus.addEventListener('mouseleave', () => {
            nexus.style.transform = 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
        });
    }
});
