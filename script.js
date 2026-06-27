/**
 * TUNAY KİTAP KULÜBÜ - PARALLAX INTRO DESIGN ENGINE 2026
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. TIMED PARALLAX INTRO CLOSING
    const initIntro = () => {
        const intro = document.getElementById('intro-screen');
        if (!intro) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                intro.classList.add('vanish');
            }, 2600); // Harflerin jenerik akışı bittikten hemen sonra yumuşak kapanış
        });

        // Fallback (Yükleme uzarsa kullanıcıyı kitlemesin)
        setTimeout(() => {
            intro.classList.add('vanish');
        }, 3900);
    };
    initIntro();


    // 2. MOUSE-INTERACTIVE INTRO & BACKGROUND PARALLAX
    // Kullanıcı henüz intro ekranındayken fareyi oynatırsa katmanlar mikro tepkiler verir
    const initIntroParallaxMouse = () => {
        const intro = document.getElementById('intro-screen');
        if (!intro || window.innerWidth < 768) return;

        const bgLayer = intro.querySelector('.layer-bg');
        const midLayer = intro.querySelector('.layer-mid');
        const fgLayer = intro.querySelector('.layer-fg');

        intro.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            // Her katman farklı derinlikte (hızda) hareket eder
            if (bgLayer) bgLayer.style.transform = `translate3d(${x * 15}px, ${y * 15}px, -200px) scale(0.95)`;
            if (midLayer) midLayer.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 50px) rotate(15deg) scale(1.05)`;
            if (fgLayer) fgLayer.style.transform = `translate3d(${x * 45}px, ${y * 45}px, 100px)`;
        });
    };
    initIntroParallaxMouse();


    // 3. MAIN SITE AURORA ORBS MOTOR
    const initFluidUniverse = () => {
        const orbs = document.querySelectorAll('.liquid-orb');
        if (window.innerWidth < 768) return;
        
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 50;
            const y = (e.clientY / window.innerHeight) * 50;

            orbs.forEach((orb, index) => {
                const factor = (index + 1) * 0.6;
                orb.style.marginLeft = `${x * factor}px`;
                orb.style.marginTop = `${y * factor}px`;
            });
        });
    };
    initFluidUniverse();


    // 4. MAGNETIC NEXUS 3D MATRIX EFFECT
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


    // 5. INTELLIGENT INTERSECTION OBSERVER SYSTEM
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
