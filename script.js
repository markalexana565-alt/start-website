gsap.registerPlugin(ScrollTrigger);

// PRELOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('preloader--hidden');
        document.body.style.overflow = '';
        initAnimations();
    }, 800);
});

document.body.style.overflow = 'hidden';

function initAnimations() {
    // Hero animations
    gsap.from('.hero__title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
    gsap.from('.hero__subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero__buttons', { opacity: 0, y: 30, duration: 1, delay: 0.4, ease: 'power3.out' });
    gsap.from('.hero__clients', { opacity: 0, y: 30, duration: 1, delay: 0.6, ease: 'power3.out' });
    gsap.from('.hero__image', { opacity: 0, x: 50, duration: 1, delay: 0.3, ease: 'power3.out' });

    // Scroll animations
    document.querySelectorAll('[data-anim]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            opacity: 0, y: 40, duration: 0.8, ease: 'power3.out'
        });
    });

    // Why us cards animation
    const whyCards = document.querySelectorAll('.sf-why__card');
    if (whyCards.length) {
        gsap.from(whyCards, {
            scrollTrigger: { trigger: '.sf-why__grid', start: 'top 80%' },
            opacity: 0, y: 50, duration: 0.7, stagger: 0.15, ease: 'power3.out'
        });
    }

    // Counter animation
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() { el.textContent = Math.round(this.targets()[0].val); }
                });
            },
            once: true
        });
    });
}

// HEADER SCROLL
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileNav();
        }
    });
});

// BURGER / MOBILE NAV
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
    const isActive = mobileNav.classList.contains('mobile-nav--active');
    if (isActive) {
        closeMobileNav();
    } else {
        mobileNav.classList.add('mobile-nav--active');
        burger.classList.add('burger--active');
        document.body.classList.add('no-scroll');
    }
});

function closeMobileNav() {
    mobileNav.classList.remove('mobile-nav--active');
    burger.classList.remove('burger--active');
    document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// MOBILE NAV ACCORDION
document.querySelectorAll('.mobile-nav__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.closest('.mobile-nav__group');
        const wasOpen = group.classList.contains('mobile-nav__group--open');

        document.querySelectorAll('.mobile-nav__group').forEach(g => {
            g.classList.remove('mobile-nav__group--open');
        });

        if (!wasOpen) {
            group.classList.add('mobile-nav__group--open');
        }
    });
});

document.querySelectorAll('.mobile-nav__submenu-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// MEGA MENU — close on link click
document.querySelectorAll('.mega-menu__link').forEach(link => {
    link.addEventListener('click', () => {
        const item = link.closest('.nav__item');
        if (item) item.blur();
    });
});

// MODAL
const modal = document.getElementById('modal');
const modalTriggers = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        modal.classList.add('modal--active');
        document.body.classList.add('no-scroll');
        closeMobileNav();
    });
});

function closeModal() {
    modal.classList.remove('modal--active');
    document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// PRODUCTION TABS
const productionTabs = document.querySelectorAll('.production__tab');
const productionContents = document.querySelectorAll('.production__tab-content');
const productionImages = document.querySelectorAll('.production__image-item');

productionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const idx = tab.dataset.tab;
        const wasActive = tab.classList.contains('production__tab--active');

        productionTabs.forEach(t => t.classList.remove('production__tab--active'));
        productionContents.forEach(c => c.classList.remove('production__tab-content--active'));
        productionImages.forEach(img => img.classList.remove('production__image-item--active'));

        if (!wasActive) {
            tab.classList.add('production__tab--active');
            document.querySelector(`[data-content="${idx}"]`).classList.add('production__tab-content--active');
        }
        document.querySelector(`[data-img="${idx}"]`).classList.add('production__image-item--active');
    });
});

// FAQ ACCORDION
document.querySelectorAll('.faq__item').forEach(item => {
    const answer = item.querySelector('.faq__answer');
    const icon = item.querySelector('.faq__icon');
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('faq__item--active');
        
        // Close all others
        document.querySelectorAll('.faq__item').forEach(i => {
            if (i.classList.contains('faq__item--active') && i !== item) {
                gsap.to(i.querySelector('.faq__answer'), { height: 0, duration: 0.5, ease: 'power3.in', onComplete: () => {
                    i.classList.remove('faq__item--active');
                }});
                gsap.to(i.querySelector('.faq__icon'), { rotation: 0, duration: 0.3 });
            }
        });
        
        // Toggle current
        if (isActive) {
            gsap.to(answer, { height: 0, duration: 0.5, ease: 'power3.in', onComplete: () => {
                item.classList.remove('faq__item--active');
            }});
            gsap.to(icon, { rotation: 0, duration: 0.3 });
        } else {
            item.classList.add('faq__item--active');
            answer.style.height = 'auto';
            const h = answer.scrollHeight;
            answer.style.height = '0px';
            gsap.to(answer, { height: h, duration: 0.4, ease: 'power2.out' });
            gsap.to(icon, { rotation: 180, duration: 0.3 });
        }
    });
});

// PORTFOLIO FILTER
const portfolioFilters = document.querySelectorAll('.portfolio__filter');
const portfolioItems = document.querySelectorAll('.portfolio__item');

portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        portfolioFilters.forEach(f => f.classList.remove('portfolio__filter--active'));
        filter.classList.add('portfolio__filter--active');
        const category = filter.dataset.filter;
        portfolioItems.forEach(item => {
            const show = category === 'all' || item.dataset.category === category;
            item.style.display = show ? '' : 'none';
            if (show) {
                gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
            }
        });
    });
});

// PHONE MASK
document.querySelectorAll('.phone-mask').forEach(input => {
    input.addEventListener('input', function(e) {
        let val = this.value.replace(/\D/g, '');
        if (val.length > 0) {
            if (val[0] === '7' || val[0] === '8') val = val.substring(1);
            let formatted = '+7';
            if (val.length > 0) formatted += ' (' + val.substring(0, 3);
            if (val.length >= 3) formatted += ') ' + val.substring(3, 6);
            if (val.length >= 6) formatted += '-' + val.substring(6, 8);
            if (val.length >= 8) formatted += '-' + val.substring(8, 10);
            this.value = formatted;
        }
    });
    input.addEventListener('focus', function() {
        if (!this.value) this.value = '+7 (';
    });
    input.addEventListener('blur', function() {
        if (this.value === '+7 (' || this.value === '+7') this.value = '';
    });
});

// FILE UPLOAD
function setupFileUpload(areaId, inputId, nameId) {
    const area = document.getElementById(areaId);
    const input = document.getElementById(inputId);
    const nameEl = document.getElementById(nameId);
    if (!area || !input) return;

    area.addEventListener('click', () => input.click());

    area.addEventListener('dragover', (e) => {
        e.preventDefault();
        area.classList.add('dragover');
    });

    area.addEventListener('dragleave', () => {
        area.classList.remove('dragover');
    });

    area.addEventListener('drop', (e) => {
        e.preventDefault();
        area.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            input.files = e.dataTransfer.files;
            if (nameEl) nameEl.textContent = e.dataTransfer.files[0].name;
        }
    });

    input.addEventListener('change', () => {
        if (input.files.length && nameEl) {
            nameEl.textContent = input.files[0].name;
        }
    });
}

setupFileUpload('fileArea2', 'fileInput2', 'fileName2');

// FORM SUBMISSION
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('toast--visible');
    setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Отправка...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Отправлено!';
            btn.style.background = '#28a745';
            showToast();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
                closeModal();
                document.querySelectorAll('.contact-form__file-name').forEach(el => el.textContent = '');
            }, 1500);
        }, 1000);
    });
});

// SCROLL TO TOP
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('scroll-top--visible', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// MATERIALS TABS
const materialsData = [
    {
        image: 'images/regenerate_in_8k_quality_202607161952.jpeg',
        text: 'Светорассеивающий пластик. Идеален для лицевой части световых букв, дает яркое и равномерное свечение'
    },
    {
        image: 'images/Regenerate_in_8k_quality_202607161951.jpeg',
        text: 'Легкий и жесткий вспененный материал. Основной материал для боковых и задних частей световых букв, а также для изготовления несветовых вывесок, стендов и табличек.'
    },
    {
        image: 'images/Aluminum_composite_panels_stacked_202607161603.jpeg',
        text: 'Высокопрочная многослойная панель с алюминиевыми слоями. Применяется для облицовки фасадов, изготовления каркасов световых коробов и стел. Придает конструкции премиальный вид и долговечность'
    }
];

const matTabs = document.querySelectorAll('.nr-materials__tab');
const matImage = document.getElementById('matImage');
const matText = document.getElementById('matText');

if (matTabs.length && matImage && matText) {
    matImage.style.backgroundImage = `url('${materialsData[0].image}')`;
    
    matTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const idx = parseInt(tab.dataset.mat);
            
            matTabs.forEach(t => t.classList.remove('nr-materials__tab--active'));
            tab.classList.add('nr-materials__tab--active');
            
            gsap.to(matImage, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    matImage.style.backgroundImage = `url('${materialsData[idx].image}')`;
                    gsap.to(matImage, { opacity: 1, duration: 0.3 });
                }
            });
            
            gsap.to(matText, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    matText.textContent = materialsData[idx].text;
                    gsap.to(matText, { opacity: 1, duration: 0.3 });
                }
            });
        });
    });
}

// CALCULATOR RADIO ACTIVE STATE
document.querySelectorAll('.nr-calc__check input[type="radio"], .nr-calc__toggle-item input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const name = radio.getAttribute('name');
        document.querySelectorAll(`.nr-calc__check input[name="${name}"], .nr-calc__toggle-item input[name="${name}"]`).forEach(r => {
            r.closest('label').classList.remove('nr-calc__check--active', 'nr-calc__toggle-item--active');
        });
        if (radio.checked) {
            radio.closest('label').classList.add(radio.closest('.nr-calc__check') ? 'nr-calc__check--active' : 'nr-calc__toggle-item--active');
        }
    });
    if (radio.checked) {
        radio.closest('label').classList.add(radio.closest('.nr-calc__check') ? 'nr-calc__check--active' : 'nr-calc__toggle-item--active');
    }
});

// WRAPPING CARDS ACCORDION
document.querySelectorAll('[data-wrap]').forEach(card => {
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('nr-wrap__card--active');
        
        document.querySelectorAll('[data-wrap]').forEach(c => {
            c.classList.remove('nr-wrap__card--active');
        });
        
        if (!isActive) {
            card.classList.add('nr-wrap__card--active');
        }
    });
});

// FILE UPLOAD
function setupCalcFileUpload(inputId, fileNameId) {
    const input = document.getElementById(inputId);
    const fileName = document.getElementById(fileNameId);
    
    if (input && fileName) {
        input.addEventListener('change', () => {
            if (input.files.length > 0) {
                fileName.textContent = input.files[0].name;
                fileName.classList.add('nr-calc__upload-filename--visible');
            } else {
                fileName.textContent = '';
                fileName.classList.remove('nr-calc__upload-filename--visible');
            }
        });
    }
}

setupCalcFileUpload('calcFileInput', 'calcFileName');
setupCalcFileUpload('wrapFileInput', 'wrapFileName');

// HERO DAY/NIGHT TOGGLE
(function() {
    const hero = document.querySelector('.hero');
    const toggleBtns = document.querySelectorAll('.hero__toggle-btn');

    // Preload night image
    const nightImg = new Image();
    nightImg.src = 'images/hero image night.jpeg';

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const time = btn.dataset.time;
            toggleBtns.forEach(b => b.classList.remove('hero__toggle-btn--active'));
            btn.classList.add('hero__toggle-btn--active');
            hero.classList.toggle('is-night', time === 'night');
        });
    });
})();
