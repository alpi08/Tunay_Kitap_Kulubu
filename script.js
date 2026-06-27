/**
 * TUNAY KİTAP KULÜBÜ - PERMANENT PURPLE ENGINE 2026
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INTRO ENGINE
    const initIntro = () => {
        const intro = document.getElementById('intro-screen');
        if (!intro) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                intro.classList.add('vanish');
            }, 1400);
        });

        setTimeout(() => {
            intro.classList.add('vanish');
        }, 2500);
    };
    initIntro();

    // 2. MOUSE-TRACKING FLUID ORBS
    const initFluidUniverse = () => {
        const orbs = document.querySelectorAll('.liquid-orb');
        if (window.innerWidth < 768) return;
        
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 40;
            const y = (e.clientY / window.innerHeight) * 40;

            orbs.forEach((orb, index) => {
                const factor = (index + 1) * 0.5;
                orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    };
    initFluidUniverse();

    // 3. MAGNETIC NEXUS INTERACTION
    const initMagneticNexus = () => {
        const nexus = document.getElementById('magnetic-nexus');
        if (!nexus || window.innerWidth < 768) return;

        nexus.addEventListener('mousemove', (e) => {
            const rect = nexus.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const moveX = (e.clientX - centerX) * 0.08;
            const moveY = (e.clientY - centerY) * 0.08;

            nexus.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        nexus.addEventListener('mouseleave', () => {
            nexus.style.transform = 'translate(0px, 0px)';
        });
    };
    initMagneticNexus();

    // 4. INTELLIGENT SCROLL REVEAL & ROUTE ACTIVE
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
        }, { threshold: 0.1 });

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
        }, { threshold: 0.4 });

        sections.forEach(sec => sectionObserver.observe(sec));
    };
    initScrollSystem();

});
