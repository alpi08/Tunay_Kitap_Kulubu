/**
 * TUNAY KİTAP KULÜBÜ - PREMIUM MULTI-LANGUAGE GLASSMORPHISM ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Core Elements
    const introScreen = document.getElementById('master-intro');
    const siteWrapper = document.querySelector('.cosmic-wrapper');
    const dynamicNav = document.getElementById('dynamic-nav');
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');
    const nexus = document.getElementById('magnetic-nexus');
    const langSelect = document.getElementById('lang-select');
    const heroInner = document.getElementById('hero-interactive-content');

    // ==========================================================================
    // MULTI-LANGUAGE TRANSLATION MATRIX DROPDOWN COMPONENT DICTIONARY
    // ==========================================================================
    const translations = {
        tr: {
            "loader-cap": "AURA VE ENTELEKT",
            "nav-intro": "Giriş", "nav-culture": "Kültür", "nav-join": "Katıl",
            "hero-badge": "Fevzi Çakmak Anadolu Lisesi",
            "hero-title": "Tunay Kitap Kulübü",
            "hero-cta": "Evreni Keşfet",
            "cult-title": "Entelektüel Doku", "cult-sub": "Sadece saf bilgi, entelektüel derinlik ve estetik.",
            "c1-h": "Biz Kimiz?", "c1-p": "Edebiyatı sıradan bir eylem değil, derin bir analiz aracı olarak gören sorgulayıcı zihinlerin ortak sığınağıyız.",
            "c2-h": "Modern Analiz", "c2-p": "Klasik felsefeden distopyalara uzanan bir çizgide, popüler metinlerin gizli sembolizmlerini parçalıyoruz.",
            "c3-h": "Haftalık Oturumlar", "c3-p": "Her hafta mum ışığı, kahve kokusu ve ambient müzikler eşliğinde dünün ve bugünün sınırlarını zorluyoruz.",
            "c4-h": "Yazar Söyleşileri", "c4-p": "Dönemlik olarak edebiyat dünyasından isimleri ve akademisyenleri kulübümüzde misafir ediyoruz.",
            "c5-h": "Kritik Atölyeleri", "c5-p": "Bir eserin sadece olay örgüsüne değil; yazarın psikolojisine ve dönemin sosyolojisine odaklanıyoruz.",
            "c6-h": "Sosyal Köprüler", "c6-p": "Kütüphane geliştirme ve kitap ulaştırma projeleriyle bilginin gücünü lise dışına yayıyoruz.",
            "nexus-tag": "// TOPLULUĞA KATIL", "nexus-title": "Hikayemize <br>Dahil Ol",
            "nexus-desc": "Bu kapıdan girdiğinde sıradan fikirler dışarıda kalır. Bizimle yürümek ister misin?",
            "btn-write": "Bize Yaz", "btn-insta": "Instagram'da Gör",
            "signature": "Kurucu & Yönetici: <span>Tunay</span>"
        },
        en: {
            "loader-cap": "AURA & INTELLECT",
            "nav-intro": "Home", "nav-culture": "Culture", "nav-join": "Join",
            "hero-badge": "Fevzi Cakmak Anatolian High School",
            "hero-title": "Tunay Book Club",
            "hero-cta": "Explore Universe",
            "cult-title": "Intellectual Texture", "cult-sub": "Just pure knowledge, intellectual depth, and aesthetics.",
            "c1-h": "Who We Are", "c1-p": "We are the sanctuary of analytical minds who perceive literature not as a simple act, but a tool for deep analysis.",
            "c2-h": "Modern Analysis", "c2-p": "We deconstruct the hidden symbolism of popular texts, spanning from classical philosophy to dystopias.",
            "c3-h": "Weekly Sessions", "c3-p": "Every week, we challenge cognitive borders accompanied by candlelight, coffee aroma, and ambient soundscapes.",
            "c4-h": "Author Talks", "c4-p": "We periodically host prominent figures from the literary world and academics in our club.",
            "c5-h": "Critique Workshops", "c5-p": "We focus not just on the plot of a masterpiece, but on the author's psychology and the sociology of the era.",
            "c6-h": "Social Bridges", "c6-p": "We expand the power of knowledge beyond high school limits with library development and book delivery initiatives.",
            "nexus-tag": "// JOIN THE COMMUNITY", "nexus-title": "Step Into <br>Our Story",
            "nexus-desc": "When you cross this threshold, ordinary ideas stay behind. Do you want to journey with us?",
            "btn-write": "Write to Us", "btn-insta": "View on Instagram",
            "signature": "Founder & Manager: <span>Tunay</span>"
        },
        fr: {
            "loader-cap": "AURA ET INTELLECT",
            "nav-intro": "Accueil", "nav-culture": "Culture", "nav-join": "Rejoindre",
            "hero-badge": "Lycée Anatolien Fevzi Cakmak",
            "hero-title": "Club de Lecture Tunay",
            "hero-cta": "Découvrir l'Univers",
            "cult-title": "Texture Intellectuelle", "cult-sub": "Juste du savoir pur, une profondeur intellectuelle et une esthétique.",
            "c1-h": "Qui Sommes-Nous?", "c1-p": "Le refuge des esprits curieux qui voient la littérature comme un outil d'analyse profonde et non comme un simple acte.",
            "c2-h": "Analyse Moderne", "c2-p": "Nous décodons le symbolisme secret des textes populaires, de la philosophie classique aux dystopies.",
            "c3-h": "Sessions Hebdomadaires", "c3-p": "Chaque semaine, nous repoussons les limites de la pensée à la lueur des bougies et au son de musiques ambiantes.",
            "c4-h": "Rencontres Littéraires", "c4-p": "Nous accueillons périodiquement des écrivains et des universitaires de l'univers littéraire.",
            "c5-h": "Ateliers de Critique", "c5-p": "Nous analysons la psychologie de l'auteur et la sociologie de l'époque, bien au-delà de la simple intrigue.",
            "c6-h": "Ponts Sociaux", "c6-p": "Nous partageons le pouvoir du savoir au-delà du lycée via des projets de développement de bibliothèques.",
            "nexus-tag": "// REJOINDRE LA COMMUNAUTÉ", "nexus-title": "Entrez Dans <br>Notre Histoire",
            "nexus-desc": "Une fois cette porte franchie, les idées banales restent dehors. Voulez-vous marcher à nos côtés?",
            "btn-write": "Écrivez-nous", "btn-insta": "Voir sur Instagram",
            "signature": "Fondateur & Directeur: <span>Tunay</span>"
        },
        ru: {
            "loader-cap": "АУРА И ИНТЕЛЛЕКТ",
            "nav-intro": "Главная", "nav-culture": "Культура", "nav-join": "Вступить",
            "hero-badge": "Анатолийский Лицей Февзи Чакмак",
            "hero-title": "Книжный Клуб Тунай",
            "hero-cta": "Исследовать Вселенную",
            "cult-title": "Интеллектуальная Текстура", "cult-sub": "Только чистые знания, интеллектуальная глубина и эстетика.",
            "c1-h": "Кто Мы?", "c1-p": "Мы — убежище для аналитических умов, видящих в литературе не просто действие, а инструмент глубокого анализа.",
            "c2-h": "Современный Анализ", "c2-p": "Мы раскрываем скрытый символизм популярных текстов, от классической философии до антиутопий.",
            "c3-h": "Еженедельные Сессии", "c3-p": "Каждую неделю при свечах, аромате кофе и эмбиент-музыке мы раздвигаем ментальные границы.",
            "c4-h": "Встречи с Авторами", "c4-p": "Мы периодически принимаем в нашем клубе известных деятелей литературы и академиков.",
            "c5-h": "Критические Семинары", "c5-p": "Мы фокусируемся не только на сюжете произведения, но и на психологии автора и социологии эпохи.",
            "c6-h": "Social Bridges", "c6-p": "Мы распространяем силу знаний за пределы лицея через проекты развития библиотек.",
            "nexus-tag": "// ПРИСОЕДИНЯЙТЕСЬ К НАМ", "nexus-title": "Станьте Частью <br>Нашей Истории",
            "nexus-desc": "Когда вы переступаете этот порог, обыденные мысли остаются позади. Хотите пойти с нами?",
            "btn-write": "Напишите Нам", "btn-insta": "Мы в Instagram",
            "signature": "Основатель и Руководитель: <span>Tunay</span>"
        },
        de: {
            "loader-cap": "AURA & INTELLEKT",
            "nav-intro": "Start", "nav-culture": "Kultur", "nav-join": "Beitreten",
            "hero-badge": "Anatolisches Gymnasium Fevzi Cakmak",
            "hero-title": "Tunay Buchclub",
            "hero-cta": "Universum entdecken",
            "cult-title": "Intellektuelle Textur", "cult-sub": "Nur pures Wissen, intellektuelle Tiefe und Ästhetik.",
            "c1-h": "Wer Wir Sind", "c1-p": "Wir sind die Zuflucht hinterfragender Geister, die Literatur nicht als banalen Akt, sondern als tiefes Analysewerkzeug verstehen.",
            "c2-h": "Moderne Analyse", "c2-p": "Wir dekonstruieren den geheimen Symbolismus populärer Texte von klassischer Philosophie bis hin zu Dystopien.",
            "c3-h": "Wöchentliche Sitzungen", "c3-p": "Jede Woche fordern wir bei Kerzenschein, Kaffeeduft und Ambient-Musik intellektuelle Grenzen heraus.",
            "c4-h": "Autorengespräche", "c4-p": "Wir heißen regelmäßig Namen aus der Literaturwelt und Akademiker als Gäste in unserem Club willkommen.",
            "c5-h": "Kritik-Workshops", "c5-p": "Wir konzentrieren uns nicht nur auf die Handlung; uns interessieren die Psychologie des Autors und die Soziologie der Epoche.",
            "c6-h": "Soziale Brücken", "c6-p": "Mit Bibliotheksentwicklungs- und Buchlieferungsprojekten tragen wir die Kraft des Wissens über die Schule hinaus.",
            "nexus-tag": "// DER GEMEINSCHAFT BEITRETEN", "nexus-title": "Werde Teil <br>Unserer Geschichte",
            "nexus-desc": "Wenn du diese Tür betrittst, bleiben gewöhnliche Ideen draußen. Möchtest du mit uns gehen?",
            "btn-write": "Schreib Uns", "btn-insta": "Auf Instagram ansehen",
            "signature": "Gründer & Manager: <span>Tunay</span>"
        },
        zh: {
            "loader-cap": "灵气与理智",
            "nav-intro": "首页", "nav-culture": "文化氛围", "nav-join": "加入我们",
            "hero-badge": "费夫齐·恰克马克安纳托利亚高级中学",
            "hero-title": "Tunay 读书俱乐部",
            "hero-cta": "探索宇宙",
            "cult-title": "学识肌理", "cult-sub": "唯有纯粹的学识、思想深度与极致美学表达。",
            "c1-h": "我们是谁？", "c1-p": "我们是思辨心灵的共同庇护所，在这里，文学绝非消遣，而是洞察深层的工具。",
            "c2-h": "现代文本解构", "c2-p": "从古典哲学到反乌托邦，我们致力于撕开流行文本背后的隐秘符号边界。",
            "c3-h": "每周沙龙", "c3-p": "每周在烛光、咖啡香气与氛围音乐的伴随下，我们共同刺破既定的思维边界。",
            "c4-h": "作家面对面", "c4-p": "我们定期邀请文学界知名人士及学者做客俱乐部进行深度对话。",
            "c5-h": "文本批判工作坊", "c5-p": "我们不仅关注故事情节，更聚焦于作者隐秘的心理图景与时代社会学底色。",
            "c6-h": "社会知识桥梁", "c6-p": "通过图书馆捐建与送书项目，我们将知识的能量辐射至校园之外。",
            "nexus-tag": "// 加入社区", "nexus-title": "融入<br>我们的故事",
            "nexus-desc": "踏入这扇门，平庸的想法将不复存在。你愿意与我们并肩前行吗？",
            "btn-write": "联系我们", "btn-insta": "关注 Instagram",
            "signature": "创始人 & 主管: <span>Tunay</span>"
        }
    };

    // ==========================================================================
    // METİN ANİMASYON PARÇALAYICI ENGINE
    // ==========================================================================
    function parseAndAnimateText() {
        const titleEl = document.getElementById('stagger-title');
        if(titleEl) {
            const words = titleEl.innerText.split(' ');
            titleEl.innerHTML = words.map(word => `<span class="word-span">${word}</span>`).join(' ');
        }

        const line1 = document.querySelector('.lead-line.line-1');
        const line2 = document.querySelector('.lead-line.line-2');
        if(line1 && line2) {
            const splitLine = (el) => {
                const chars = el.innerText.split('');
                el.innerHTML = chars.map(char => {
                    if(char === ' ') return `<span class="char-span space"></span>`;
                    return `<span class="char-span">${char}</span>`;
                }).join('');
            };
            splitLine(line1);
            splitLine(line2);
        }
    }

    // Dil Değişim Yönetimi
    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'nexus-title') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.innerText = translations[lang][key];
                }
            }
        });

        // Ünvan imzasını dile göre bas
        const sigTarget = document.getElementById('signature-target');
        if(sigTarget && translations[lang]['signature']) {
            sigTarget.innerHTML = translations[lang]['signature'];
        }

        parseAndAnimateText();

        if (siteWrapper.classList.contains('site-ready')) {
            document.querySelectorAll('.word-span').forEach(w => w.classList.add('animate'));
            document.querySelectorAll('.char-span').forEach(c => c.classList.add('animate'));
        }
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    parseAndAnimateText();

    // Tema Kontrolü (Light / Dark)
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
    // CINEMATIC LOADING TIMELINE
    // ==========================================================================
    setTimeout(() => { introScreen.classList.add('step-line-reveal'); }, 600);

    setTimeout(() => {
        introScreen.classList.remove('step-line-reveal');
        introScreen.classList.add('step-logo-fadein');
    }, 1300);

    setTimeout(() => {
        introScreen.classList.remove('step-logo-fadein');
        introScreen.classList.add('step-logo-exit');
        siteWrapper.classList.add('site-ready');
        dynamicNav.classList.add('visible');
    }, 2500);

    setTimeout(() => { introScreen.style.display = 'none'; }, 3300);

    // Giriş Animasyonu Tetikleyicileri
    setTimeout(() => {
        document.querySelectorAll('.word-span').forEach((word, index) => {
            setTimeout(() => { word.classList.add('animate'); }, index * 180);
        });
        const badge = document.querySelector('.sub-badge');
        if(badge) badge.classList.add('active');
    }, 3300);

    setTimeout(() => {
        document.querySelectorAll('.char-span').forEach((char, index) => {
            setTimeout(() => { char.classList.add('animate'); }, index * 15);
        });
    }, 4100);

    setTimeout(() => {
        const cta = document.querySelector('.premium-cta-btn');
        if(cta) cta.classList.add('active');
    }, 4800);

    // ==========================================================================
    // INTERACTIVE SCROLL & PARALLAX ENGINE
    // ==========================================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled > 10) {
            if(heroInner) {
                heroInner.style.transform = `scale(0.95)`;
                heroInner.style.opacity = `${1 - scrolled / 500}`;
            }
        } else {
            if(heroInner) { heroInner.style.transform = `scale(1)`; heroInner.style.opacity = `1`; }
        }

        const cardsGrid = document.getElementById('stagger-card-grid');
        if(cardsGrid) {
            const rect = cardsGrid.getBoundingClientRect();
            if(rect.top < window.innerHeight * 0.9) {
                cardsGrid.querySelectorAll('.sleek-card').forEach((card, index) => {
                    setTimeout(() => { card.classList.add('revealed'); }, index * 100);
                });
            }
        }
    });

    // Bize Katıl Kartı Parallaxe Uyumu
    if (nexus && window.innerWidth > 768) {
        nexus.addEventListener('mousemove', (e) => {
            const rect = nexus.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const moveX = (e.clientX - centerX) * 0.03;
            const moveY = (e.clientY - centerY) * 0.03;

            nexus.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY * 0.05}deg) rotateY(${moveX * 0.05}deg)`;
        });

        nexus.addEventListener('mouseleave', () => {
            nexus.style.transform = 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
        });
    }
});
