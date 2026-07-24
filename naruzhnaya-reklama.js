/* ==========================================
   ПРАЙС-ЛИСТ — НАРУЖНАЯ РЕКЛАМА
   Все цены, размеры и описания в одном месте.
   Измените значение здесь — обновится на странице.
   ========================================== */

const outdoorPricelist = {

    shenders: {
        title: 'Штендеры и спотыкачи',
        subtitle: 'Бюджетный способ привлечь прохожих прямо с тротуара',
        items: [
            {
                id: 't-shender',
                name: 'Т-образный штендер',
                image: 'images/T-obrazny.jpg',
                alt: 'Т-образный штендер',
                size: 'Поле 600 × 900 мм',
                accent: false,
                prices: [
                    { label: 'Односторонний (композит + Oracal)', value: '5 700 ₽', alt: false },
                    { label: 'Двусторонний', value: '6 900 ₽', alt: false },
                    { label: 'На баннере', value: 'от 3 900 ₽', alt: true }
                ],
                desc: null,
                btnText: 'Рассчитать'
            },
            {
                id: 'aroch-shender',
                name: 'Арочный штендер',
                image: 'images/arochny.jpg',
                alt: 'Арочный штендер',
                size: 'Поле 600 × 1200 мм',
                accent: false,
                prices: [
                    { label: 'Односторонний', value: '8 250 ₽', alt: false },
                    { label: 'Двусторонний', value: '12 650 ₽', alt: false }
                ],
                desc: null,
                btnText: 'Рассчитать'
            },
            {
                id: 'figurn-shender',
                name: 'Фигурный штендер',
                image: 'images/figurny.jpg',
                alt: 'Фигурный штендер',
                size: 'Индивидуальный просчет',
                accent: true,
                prices: [],
                desc: 'Привлекает на 70% больше внимания. Изготавливаем любую форму под ваш бизнес.',
                btnText: 'Заказать расчёт'
            }
        ]
    },

    acrylic: {
        title: 'Изделия из акрила',
        subtitle: 'Прозрачность, чистые линии и премиальный блеск для вашего интерьера',
        items: [
            {
                id: 'menu-holders',
                name: 'Настольные холдеры и менюхолдеры',
                image: 'images/menu holder.jpeg',
                alt: 'Настольные холдеры и менюхолдеры из акрила',
                prices: [
                    { size: 'A6', value: 'от 300 ₽' },
                    { size: 'A5', value: 'от 450 ₽' },
                    { size: 'A4', value: 'от 600 ₽' }
                ],
                desc: null,
                btnText: 'Рассчитать'
            },
            {
                id: 'wardrobe-numbers',
                name: 'Акриловые гардеробные номерки',
                image: 'images/nomerok.jpeg',
                alt: 'Акриловые гардеробные номерки',
                prices: [],
                desc: 'Любая форма, толщина акрила и цвет под фирменный стиль.',
                btnText: 'Заказать'
            },
            {
                id: 'acrylic-signs',
                name: 'Акриловые офисные и фасадные таблички',
                image: 'images/akril tablichki.jpeg',
                alt: 'Акриловые офисные и фасадные таблички',
                prices: [],
                desc: 'Премиальные таблички на дверь, ресепшн и навигация с дистанционным крепежом.',
                btnText: 'Рассчитать'
            }
        ]
    }
};


/* ==========================================
   РЕНДЕРИНГ СЕКЦИЙ ИЗ КОНФИГА
   ========================================== */

function renderShenders(cfg) {
    const grid = document.getElementById('shendersGrid');
    if (!grid) return;

    grid.innerHTML = cfg.items.map(item => {
        const pricesHtml = item.prices.length
            ? `<div class="nr-shenders__card-prices">${item.prices.map(p =>
                `<div class="nr-shenders__price-row${p.alt ? ' nr-shenders__price-row--alt' : ''}">
                    <span class="nr-shenders__price-label">${p.label}</span>
                    <span class="nr-shenders__price-value">${p.value}</span>
                </div>`
            ).join('')}</div>`
            : '';

        const descHtml = item.desc
            ? `<p class="nr-shenders__card-desc">${item.desc}</p>`
            : '';

        return `
            <div class="nr-shenders__card${item.accent ? ' nr-shenders__card--accent' : ''}">
                <div class="nr-shenders__card-img">
                    <img src="${item.image}" alt="${item.alt}">
                </div>
                <div class="nr-shenders__card-body">
                    <h3 class="nr-shenders__card-title">${item.name}</h3>
                    <span class="nr-shenders__card-size${item.accent ? ' nr-shenders__card-size--accent' : ''}">${item.size}</span>
                    ${pricesHtml}
                    ${descHtml}
                    <button class="btn btn--red btn--sm" data-modal>${item.btnText}</button>
                </div>
            </div>`;
    }).join('');
}

function renderAcrylic(cfg) {
    const grid = document.getElementById('acrylicGrid');
    if (!grid) return;

    grid.innerHTML = cfg.items.map(item => {
        const pricesHtml = item.prices.length
            ? `<div class="nr-acrylic__card-prices">${item.prices.map(p =>
                `<span class="nr-acrylic__price">${p.size} <strong>${p.value}</strong></span>`
            ).join('')}</div>`
            : '';

        const descHtml = item.desc
            ? `<p class="nr-acrylic__card-desc">${item.desc}</p>`
            : '';

        return `
            <div class="nr-acrylic__card">
                <div class="nr-acrylic__card-img">
                    <img src="${item.image}" alt="${item.alt}">
                </div>
                <div class="nr-acrylic__card-body">
                    <h3 class="nr-acrylic__card-title">${item.name}</h3>
                    ${pricesHtml}
                    ${descHtml}
                    <button class="btn btn--outline btn--sm" data-modal>${item.btnText}</button>
                </div>
            </div>`;
    }).join('');
}


/* ==========================================
   ИНИЦИАЛИЗАЦИЯ
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const sh = outdoorPricelist.shenders;
    document.getElementById('shendersTitle').textContent = sh.title;
    document.getElementById('shendersSubtitle').textContent = sh.subtitle;
    renderShenders(sh);

    const ac = outdoorPricelist.acrylic;
    document.getElementById('acrylicTitle').textContent = ac.title;
    document.getElementById('acrylicSubtitle').textContent = ac.subtitle;
    renderAcrylic(ac);
});
