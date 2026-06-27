/**
 * TUNAY KİTAP KULÜBÜ - MASTER CINEMATIC ENGINE WITH THEME TOGGLE 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Element Seçiciler
    const introScreen = document.getElementById('master-intro');
    const cosmicBg = document.getElementById('cosmic-bg');
    const siteWrapper = document.querySelector('.cosmic-wrapper');
    const dynamicNav = document.getElementById('dynamic-nav');
    const titleEl = document.getElementById('stagger-title');
    const leadEl = document.getElementById('stagger-lead');
    const ctaBtn = document.querySelector('.premium-cta-btn');
    const heroInner = document.getElementById('hero-interactive-content');
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');
    const nexus = document.getElementById('magnetic-nexus');

    // Metin Parçalama Algoritmaları
    if(titleEl) {
        const words = titleEl.innerText.split(' ');
        titleEl.innerHTML = words.map(word => `<span class="word-span">${word}</span>`).join(' ');
    }
    if(leadEl) {
        const chars = leadEl.innerText.split('');
        leadEl.innerHTML = chars.map(char => {
            if(char === ' ') return `<span class="char-span space"></span>`;
            return `<span class="char-span">${char}</span>`;
        }).join('');
    }

    // ==========================================================================
    // THEME SWITCH ENGINE (LIGHT / DARK SYSTEM)
    // ==========================================================================
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', function() {
            if (!this.checked) {
                // Checkbox unchecked ise -> Aydınlık Moda Geç
                document.body.classList.add('light-theme');
            } else {
                // Checkbox checked ise -> Karanlık Moda Geri Dön
                document.body.classList.remove('light-theme');
            }
        });
    }

    // ==========================================================================
    // SİNEMATİK INTRO TIMELINE ENGINE
    // ==========================================================================
    // 0.80s: İnce Çizgi Belirir
    setTimeout(() => { introScreen.classList.add('step-line-reveal'); }, 800);

    // 1.50s: Çizgi Tamamlanır, Logo %105 Pop-Up ile Gelir
    setTimeout(() => {
        introScreen.classList.remove('step-line-reveal');
        introScreen.classList.add('step-logo-fadein');
    }, 1500);

    // 2.50s: Logo Yukarı Akar, Arka Plan Canlanır
    setTimeout(() => {
        introScreen.classList.remove('step-logo-fadein');
        introScreen.classList.add('step-logo-exit');
        cosmicBg.classList.add('reveal-active');
        siteWrapper.classList.add('site-ready');
        dynamicNav.classList.add('visible');
    }, 2500);

    // Intro Temizliği
    setTimeout(() => { introScreen.style.display = 'none'; }, 3200);

    // 3.20s: Başlık Kelimeleri (0.2s Stagger)
    setTimeout(() => {
        document.querySelectorAll('.word-span').forEach((word, index) => {
            setTimeout(() => { word.classList.add('animate'); }, index * 200);
        });
        const badge = document.querySelector('.sub-badge');
        if(badge) badge.classList.add('active');
    }, 3200);

    // 4.00s: Alt Açıklama Harf Harf Blur-In
    setTimeout(() => {
        document.querySelectorAll('.char-span').forEach((char, index) => {
            setTimeout(() => { char.classList.add('animate'); }, index * 22);
        });
    }, 4000);

    // 4.80s: CTA Butonu Yükselişi
    setTimeout(() => { if(ctaBtn) ctaBtn.classList.add('active'); }, 4800);

    // 5.30s+: Mouse Duyarlı Mikro Esneme (Maksimum 10px)
    setTimeout(() => {
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 12;
                const y = (e.clientY / window.innerHeight - 0.5) * 12;
                cosmicBg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                if(heroInner) heroInner.style.transform = `translate3d(${x * 0.5}px, ${y * 0.5}px, 0)`;
            });
        }
    }, 5300);

    // ==========================================================================
    // PREMIUM SCROLL DYNAMICS & MAGNETIC NEXUS
    // ==========================================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled > 10) {
            if(heroInner) {
                heroInner.style.transform = `scale(0.93)`;
                heroInner.style.opacity = `${1 - scrolled / 450}`;
            }
            if(cosmicBg) cosmicBg.style.transform = `scale(0.97) translateZ(-40px)`;
        } else {
            if(heroInner) { heroInner.style.transform = `scale(1)`; heroInner.style.opacity = `1`; }
            if(cosmicBg) cosmicBg.style.transform = `scale(1)`;
        }

        // Kültür Kartları Sıralı Reveal Kümesi
        const cardsGrid = document.getElementById('stagger-card-grid');
        if(cardsGrid) {
            const rect = cardsGrid.getBoundingClientRect();
            if(rect.top < window.innerHeight * 0.88) {
                cardsGrid.querySelectorAll('.sleek-card').forEach((card, index) => {
                    setTimeout(() => { card.classList.add('revealed'); }, index * 120);
                });
            }
        }
    });

    // Bize Katıl (Nexus) 3D Esnetme Motoru
    if (nexus && window.innerWidth > 768) {
        nexus.addEventListener('mousemove', (e) => {
            const rect = nexus.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const moveX = (e.clientX - centerX) * 0.05;
            const moveY = (e.clientY - centerY) * 0.05;

            nexus.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY * 0.08}deg) rotateY(${moveX * 0.08}deg)`;
        });

        nexus.addEventListener('mouseleave', () => {
            nexus.style.transform = 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
        });
    }
});
