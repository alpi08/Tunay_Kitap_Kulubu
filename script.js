/**
 * TUNAY KİTAP KULÜBÜ - PERMANENT PURPLE DESIGN ENGINE 2026
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. TIMED MOTION INTRO ENGINE
    const initIntro = () => {
        const intro = document.getElementById('intro-screen');
        if (!intro) return;

        // Sayfa tamamen yüklendiğinde, hareket grafiğinin bitmesini bekleyip yumuşakça kapatır
        window.addEventListener('load', () => {
            setTimeout(() => {
                intro.classList.add('vanish');
            }, 2300); // Sinematik harf animasyonunun tamamlanma süresi optimize edildi
        });

        // Garanti Fallback (Yükleme uzarsa kullanıcıyı bekletmemek için)
        setTimeout(() => {
            intro.classList.add('vanish');
        }, 3800);
    };
    initIntro();


    // 2. MOUSE-TRACKING AURORA ORBS
    const initFluidUniverse = () => {
        const orbs = document.querySelectorAll('.liquid-orb');
        if (window.innerWidth < 768) return;
        
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 50;
            const y = (e.clientY / window.innerHeight) * 50;

            orbs.forEach((orb, index) => {
                const factor = (index + 1) * 0.6;
                // Mevcut css animasyonunu bozmadan ek traslation katmanı ekler
                orb.style.marginLeft = `${x * factor}px`;
                orb.style.marginTop = `${y * factor}px`;
            });
        });
    };
    initFluidUniverse();


    // 3. MAGNETIC NEXUS GRAPHIC INTERACTION
    const initMagneticNexus = () => {
        const nexus = document.getElementById('magnetic-nexus');
        if (!nexus || window.innerWidth < 768) return;

        nexus.addEventListener('mousemove', (e) => {
            const rect = nexus.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const moveX = (e.clientX - centerX) * 0.06;
            const moveY = (e.clientY - centerY) * 0.06;

            nexus.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY * 0.1}deg) rotateY(${moveX * 0.1}deg)`;
        });

        nexus.addEventListener('mouseleave', () => {
            nexus.style.transform = 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
        });
    };
    initMagneticNexus();


    // 4. SCROLL REVEAL & ROUTE ACTIVE SYSTEM
    const initScrollSystem = () => {
        const reveals = document.querySelectorAll('.scroll-reveal');
        const links = document.querySelectorAll('.link-item');
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.08 });

        reveals.forEach(el => observer.observe(el));

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.35 });

        sections.forEach(sec => sectionObserver.observe(sec));
    };
    initScrollSystem();

});
