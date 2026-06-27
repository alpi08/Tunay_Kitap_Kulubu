/**
 * TUNAY KİTAP KULÜBÜ - MASTER CINEMATIC TIMELINE ENGINE 2026
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

    // Metin Ayrıştırma Hazırlıkları
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
    // MULTI-STAGE SİNEMATİK TIMELINE ENGINE
    // ==========================================================================

    // STAGE 1 [0.00s - 0.80s]: Tamamen siyah ekran, grain aktif.
    // Bekleme durumu...

    // STAGE 2 [0.80s - 1.50s]: İnce beyaz çizgi soldan sağa doluyor.
    setTimeout(() => {
        introScreen.classList.add('step-line-reveal');
    }, 800);

    // STAGE 3 [1.50s - 2.50s]: Çizgi biter, logo blur kırarak belirir, %105 mikro büyüme yapar.
    setTimeout(() => {
        introScreen.classList.remove('step-line-reveal');
        introScreen.classList.add('step-logo-fadein');
    }, 1500);

    // STAGE 4 [2.50s - 3.20s]: Logo yukarı küçülerek akar, arka plan netleşmeye başlar.
    setTimeout(() => {
        introScreen.classList.remove('step-logo-fadein');
        introScreen.classList.add('step-logo-exit');
        cosmicBg.classList.add('reveal-active');
        siteWrapper.classList.add('site-ready');
        dynamicNav.classList.add('visible');
    }, 2500);

    // Giriş perdesini DOM'dan tamamen temizleme (Performans ve tıklama engeli kaldırma)
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 3200);

    // STAGE 5 [3.20s - 4.00s]: Başlık kelimeleri 0.2s ara ile aşağıdan yukarı akar.
    setTimeout(() => {
        const wordSpans = document.querySelectorAll('.word-span');
        wordSpans.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('animate');
            }, index * 200); // Tam 0.2 saniye aralık (stagger)
        });
        
        // FCOLOMBATI Rozeti de başlıkla gelsin
        const badge = document.querySelector('.sub-badge');
        if(badge) badge.classList.add('active');
    }, 3200);

    // STAGE 6 [4.00s - 4.80s]: Alt açıklama yazısı harf harf blur efektiyle belirir.
    setTimeout(() => {
        const charSpans = document.querySelectorAll('.char-span');
        charSpans.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add('animate');
            }, index * 25); // Toplam süreye yayılmış akıcı harf gelişi
        });
    }, 4000);

    // STAGE 7 [4.80s - 5.30s]: CTA Butonu alttan yumuşakça yükselir.
    setTimeout(() => {
        if(ctaBtn) ctaBtn.classList.add('active');
    }, 4800);

    // STAGE 8 [5.30s+]: Fare duyarlı mikro ambiyans hareketi (Maksimum 8px)
    setTimeout(() => {
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 12; // 5-10px arası tepki
                const y = (e.clientY / window.innerHeight - 0.5) * 12;
                
                // Arka plan orb'ları ve ana kahraman alanı hafifçe esner
                cosmicBg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                if(heroInner) heroInner.style.transform = `translate3d(${x * 0.5}px, ${y * 0.5}px, 0)`;
            });
        }
    }, 5300);

    // ==========================================================================
    // PREMIUM SCROLL DYNAMICS (İLK SCROLL REAKSİYONU)
    // ==========================================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled > 10) {
            // İlk scroll yapıldığı an:
            // 1. Hero alanı küçülerek uzaklaşır
            if(heroInner) {
                heroInner.style.transform = `scale(0.92)`;
                heroInner.style.opacity = `${1 - scrolled / 400}`;
            }
            // 2. Arka plan hafif zoom out (genişleme) hissi verir
            if(cosmicBg) {
                cosmicBg.style.transform = `scale(0.96) translateZ(-50px)`;
            }
        } else {
            // Başa dönüldüğünde eski haline gelir
            if(heroInner) {
                heroInner.style.transform = `scale(1)`;
                heroInner.style.opacity = `1`;
            }
            if(cosmicBg) {
                cosmicBg.style.transform = `scale(1)`;
            }
        }

        // İkinci Section Kartlarının Sırayla (Stagger) Gelmesi
        const cardsGrid = document.getElementById('stagger-card-grid');
        if(cardsGrid) {
            const rect = cardsGrid.getBoundingClientRect();
            if(rect.top < window.innerHeight * 0.85) {
                const cards = cardsGrid.querySelectorAll('.sleek-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('revealed');
                    }, index * 150); // Kartlar sırayla fırlar
                });
            }
        }
    });
});
