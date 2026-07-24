/* ==========================================
   ПРАЙС-ЛИСТ — ФЛАГИ И ВИНДЕРЫ
   Все цены, размеры и тиражные скидки в одном месте.
   Измените значение здесь — обновится на странице.
   ========================================== */

const flagsPricelist = {

    winders: {
        title: 'Уличные флаги-виндеры (Парус, Перо)',
        image: 'images/pero parus flag.jpeg',
        alt: 'Уличные флаги-виндеры Парус и Перо',
        shapes: 'Формы полотна: Парус и Перо',
        items: [
            { label: 'Флаг 60×230 см', value: '3 100 ₽' },
            { label: 'Мачта 2,5 м', value: '3 400 ₽' },
            { label: 'Основание наливное (под воду/песок)', value: '2 500 ₽' },
            { label: 'Комплект «под ключ» (Флаг + Мачта + Основание)', value: '9 000 ₽', highlight: true }
        ],
        btnText: 'Заказать флаги',
        orderText: 'Заявка: Уличные флаги-виндеры (Парус, Перо)'
    },

    standard: {
        title: 'Стандартные и фасадные флаги',
        image: 'images/regular flag.jpeg',
        alt: 'Стандартные и фасадные флаги',
        printType: 'Тип печати: ОДНОСТОРОННЯЯ ПЕЧАТЬ',
        materials: 'Материалы: ГАБАРДИН, ПОЛИЭФИРНЫЙ ШЕЛК, АТЛАС',
        tiers: [
            { qty: 'до 5 шт', label: 'до 5 шт' },
            { qty: 'до 10 шт', label: 'до 10 шт' },
            { qty: 'от 10 шт', label: 'от 10 шт' }
        ],
        items: [
            {
                size: '150×100 см',
                prices: ['3 600 ₽', '3 350 ₽', '3 150 ₽']
            },
            {
                size: '135×90 см',
                prices: ['2 900 ₽', '2 700 ₽', '2 550 ₽']
            },
            {
                size: '90×60 см',
                prices: ['1 300 ₽', '1 200 ₽', '1 100 ₽']
            },
            {
                size: '18×12 см (на пластиковой палочке)',
                prices: ['300 ₽', '150 ₽', '100 ₽']
            }
        ],
        btnText: 'Заказать флаги',
        orderText: 'Заявка: Стандартные и фасадные флаги'
    },

    desktop: {
        title: 'Настольные флажки и подставки',
        image: 'images/table flag.jpeg',
        alt: 'Настольные флажки и подставки',
        tiers: [
            { qty: 'до 5 шт', label: 'до 5 шт' },
            { qty: 'до 10 шт', label: 'до 10 шт' },
            { qty: 'от 10 шт', label: 'от 10 шт' }
        ],
        items: [
            {
                name: 'Однорожковый флагшток',
                size: 'Размер флага 230×110 мм',
                prices: ['300 ₽', '250 ₽', '200 ₽']
            },
            {
                name: 'Двухрожковый флагшток',
                size: 'Размер флага 230×110 мм',
                prices: ['450 ₽', '400 ₽', '350 ₽']
            }
        ],
        btnText: 'Заказать флаги',
        orderText: 'Заявка: Настольные флажки и подставки'
    }
};


/* ==========================================
   РЕНДЕРИНГ СЕКЦИЙ
   ========================================== */

function renderWinders(cfg) {
    const el = document.getElementById('flagsWinders');
    if (!el) return;

    const rowsHtml = cfg.items.map(item =>
        `<div class="sv-flags__price-row${item.highlight ? ' sv-flags__price-row--highlight' : ''}">
            <span class="sv-flags__price-label">${item.label}</span>
            <span class="sv-flags__price-value">${item.value}</span>
        </div>`
    ).join('');

    el.innerHTML = `
        <div class="sv-flags__section">
            <div class="sv-flags__section-img">
                <img src="${cfg.image}" alt="${cfg.alt}">
            </div>
            <div class="sv-flags__section-body">
                <h3 class="sv-flags__section-title">${cfg.title}</h3>
                <p class="sv-flags__section-shapes">${cfg.shapes}</p>
                <div class="sv-flags__price-list">${rowsHtml}</div>
                <button class="btn btn--red btn--sm" data-order="${cfg.orderText}" data-modal>${cfg.btnText}</button>
            </div>
        </div>`;
}

function renderStandard(cfg) {
    const el = document.getElementById('flagsStandard');
    if (!el) return;

    const headerRow = `<div class="sv-flags__table-header">
        <span class="sv-flags__table-cell sv-flags__table-cell--size">Размер</span>
        ${cfg.tiers.map(t => `<span class="sv-flags__table-cell sv-flags__table-cell--tier">${t.label}</span>`).join('')}
    </div>`;

    const rowsHtml = cfg.items.map(item =>
        `<div class="sv-flags__table-row">
            <span class="sv-flags__table-cell sv-flags__table-cell--size">${item.size}</span>
            ${item.prices.map(p => `<span class="sv-flags__table-cell sv-flags__table-cell--price">${p}</span>`).join('')}
        </div>`
    ).join('');

    el.innerHTML = `
        <div class="sv-flags__section">
            <div class="sv-flags__section-img">
                <img src="${cfg.image}" alt="${cfg.alt}">
            </div>
            <div class="sv-flags__section-body">
                <h3 class="sv-flags__section-title">${cfg.title}</h3>
                <p class="sv-flags__section-meta">${cfg.printType}</p>
                <p class="sv-flags__section-meta">${cfg.materials}</p>
                <div class="sv-flags__table">${headerRow}${rowsHtml}</div>
                <button class="btn btn--red btn--sm" data-order="${cfg.orderText}" data-modal>${cfg.btnText}</button>
            </div>
        </div>`;
}

function renderDesktop(cfg) {
    const el = document.getElementById('flagsDesktop');
    if (!el) return;

    const headerRow = `<div class="sv-flags__table-header">
        <span class="sv-flags__table-cell sv-flags__table-cell--name">Тип</span>
        ${cfg.tiers.map(t => `<span class="sv-flags__table-cell sv-flags__table-cell--tier">${t.label}</span>`).join('')}
    </div>`;

    const rowsHtml = cfg.items.map(item =>
        `<div class="sv-flags__table-row">
            <span class="sv-flags__table-cell sv-flags__table-cell--name">
                <strong>${item.name}</strong>
                <span class="sv-flags__table-cell-sub">${item.size}</span>
            </span>
            ${item.prices.map(p => `<span class="sv-flags__table-cell sv-flags__table-cell--price">${p}</span>`).join('')}
        </div>`
    ).join('');

    el.innerHTML = `
        <div class="sv-flags__section">
            <div class="sv-flags__section-img">
                <img src="${cfg.image}" alt="${cfg.alt}">
            </div>
            <div class="sv-flags__section-body">
                <h3 class="sv-flags__section-title">${cfg.title}</h3>
                <div class="sv-flags__table">${headerRow}${rowsHtml}</div>
                <button class="btn btn--red btn--sm" data-order="${cfg.orderText}" data-modal>${cfg.btnText}</button>
            </div>
        </div>`;
}


/* ==========================================
   ИНИЦИАЛИЗАЦИЯ
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const fp = flagsPricelist;
    document.getElementById('flagsTitle').textContent = 'Печать флагов и виндеры';
    document.getElementById('flagsSubtitle').textContent = 'Яркие рекламные и корпоративные флаги для мероприятий, фасадов, автосалонов и офисов.';

    renderWinders(fp.winders);
    renderStandard(fp.standard);
    renderDesktop(fp.desktop);

    document.querySelectorAll('[data-order]').forEach(btn => {
        btn.addEventListener('click', () => {
            const textarea = document.getElementById('orderTextarea');
            if (textarea) {
                textarea.value = btn.dataset.order;
                textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
