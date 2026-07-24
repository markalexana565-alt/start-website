/* ==========================================
   СУВЕНИРНАЯ ПРОДУКЦИЯ — КАЛЬКУЛЯТОР
   ========================================== */

const souvenirPricelist = {
    clothes: {
        dtf: {
            A7: { 1: 250, 10: 220, 50: 180, 100: 150 },
            A6: { 1: 300, 10: 270, 50: 220, 100: 190 },
            A5: { 1: 400, 10: 360, 50: 300, 100: 260 },
            A4: { 1: 500, 10: 450, 50: 380, 100: 330 },
            '29x29': { 1: 550, 10: 500, 50: 420, 100: 370 }
        },
        silk: {
            1: { 20: 180, 50: 140, 100: 110, 200: 90, 500: 70 },
            2: { 20: 280, 50: 220, 100: 170, 200: 140, 500: 110 },
            3: { 20: 380, 50: 300, 100: 230, 200: 190, 500: 150 },
            4: { 20: 480, 50: 380, 100: 300, 200: 250, 500: 200 },
            5: { 20: 580, 50: 460, 100: 370, 200: 310, 500: 250 },
            6: { 20: 680, 50: 540, 100: 440, 200: 370, 500: 300 }
        },
        shirt: 850,
        darkAddon: 1
    },
    caps: {
        trucker: { 1: 450, 10: 380, 50: 320 },
        velour: { 1: 550, 10: 470, 50: 400 },
        colors: ['Белый', 'Красный', 'Синий', 'Чёрный', 'Зелёный']
    },
    pens: {
        polo: { name: 'Polo', price: 22 },
        focus: { name: 'Focus', price: 45 },
        europa: { name: 'Europa', price: 30 },
        global: { name: 'Global', price: 25 },
        top: { name: 'TOP', price: 50 },
        kosko: { name: 'Kosko Soft Mirror', price: 100 },
        tek: { name: 'TEK', price: 45 },
        hilton: { name: 'Hilton', price: 75 },
        wood_pencil: { name: 'WOOD COLOUR', price: 19 },
        craft: { name: 'CRAFT', price: 30 },
        skay_case: { name: 'SKAY', price: 90 },
        uv_print: { 50: 44, 100: 33, 999999: 26 },
        colors: ['Белый', 'Красный', 'Синий', 'Чёрный', 'Зелёный', 'Жёлтый']
    },
    bags: {
        banana: {
            sizes: ['20×30', '30×40', '40×50', '50×60', '60×70'],
            colors: ['1+0', '1+1', '2+0', '2+2'],
            prices: {
                '20×30': { '1+0': { 100: 12, 200: 10, 300: 8, 500: 6, 1000: 4 }, '1+1': { 100: 18, 200: 15, 300: 12, 500: 9, 1000: 7 }, '2+0': { 100: 20, 200: 17, 300: 14, 500: 11, 1000: 8 }, '2+2': { 100: 28, 200: 24, 300: 20, 500: 16, 1000: 12 } },
                '30×40': { '1+0': { 100: 15, 200: 12, 300: 10, 500: 8, 1000: 5 }, '1+1': { 100: 22, 200: 18, 300: 15, 500: 12, 1000: 9 }, '2+0': { 100: 25, 200: 21, 300: 17, 500: 14, 1000: 10 }, '2+2': { 100: 35, 200: 30, 300: 25, 500: 20, 1000: 15 } },
                '40×50': { '1+0': { 100: 18, 200: 15, 300: 12, 500: 10, 1000: 7 }, '1+1': { 100: 28, 200: 23, 300: 19, 500: 15, 1000: 11 }, '2+0': { 100: 30, 200: 25, 300: 21, 500: 17, 1000: 12 }, '2+2': { 100: 42, 200: 35, 300: 29, 500: 23, 1000: 17 } },
                '50×60': { '1+0': { 100: 22, 200: 18, 300: 15, 500: 12, 1000: 9 }, '1+1': { 100: 33, 200: 28, 300: 23, 500: 18, 1000: 14 }, '2+0': { 100: 36, 200: 30, 300: 25, 500: 20, 1000: 15 }, '2+2': { 100: 50, 200: 42, 300: 35, 500: 28, 1000: 21 } },
                '60×70': { '1+0': { 100: 28, 200: 23, 300: 19, 500: 15, 1000: 11 }, '1+1': { 100: 42, 200: 35, 300: 29, 500: 23, 1000: 17 }, '2+0': { 100: 45, 200: 38, 300: 32, 500: 25, 1000: 19 }, '2+2': { 100: 63, 200: 53, 300: 44, 500: 35, 1000: 26 } }
            }
        },
        lanyards: {
            types: ['Белая 1+0', 'Белая 4+0', 'Белая 4+4', 'Синяя 10мм'],
            prices: {
                'Белая 1+0': { 30: 25, 50: 22, 100: 18, 150: 15 },
                'Белая 4+0': { 30: 45, 50: 38, 100: 30, 150: 25 },
                'Белая 4+4': { 30: 65, 50: 55, 100: 45, 150: 38 },
                'Синяя 10мм': { 30: 30, 50: 26, 100: 22, 150: 18 }
            }
        },
        cards: {
            base: { white: 15, gold: 25, silver: 25 },
            options: {
                magnetic: { name: 'Магнитная полоса', price: 4 },
                barcode: { name: 'Штрихкод', price: 1 },
                numbering: { name: 'Нумерация', price: 1 },
                emboss: { name: 'Эмбоссирование', price: 3 },
                foil: { name: 'Типирование фольгой', price: 3 }
            }
        }
    },
    mugs: {
        white: { 1: 350, 10: 280, 50: 220, 100: 180 },
        colored: { 1: 450, 10: 370, 50: 300, 100: 250 }
    },
    badges: {
        D25: { 20: 80, 50: 55, 100: 40, 200: 30, 500: 22, 1000: 18 },
        D37: { 20: 100, 50: 70, 100: 50, 200: 38, 500: 28, 1000: 22 },
        D44: { 20: 120, 50: 85, 100: 60, 200: 45, 500: 35, 1000: 28 },
        D56: { 20: 150, 50: 105, 100: 75, 200: 55, 500: 42, 1000: 35 }
    },
    stickers3d: {
        '20-25': { 50: 120, 100: 85, 200: 60, 300: 45, 500: 35 },
        '30-35': { 50: 180, 100: 130, 200: 90, 300: 70, 500: 55 },
        '50': { 50: 300, 100: 220, 200: 160, 300: 120, 500: 95 }
    }
};

let currentMainTab = 'clothes';
let currentSubTab = {};

function initCalculator() {
    renderMainTabs();
    renderCalculator();
}

function renderMainTabs() {
    const container = document.getElementById('sv-calc-tabs');
    if (!container) return;
    const tabs = [
        { id: 'clothes', name: 'Одежда и Текстиль' },
        { id: 'caps', name: 'Бейсболки и Кепки' },
        { id: 'pens', name: 'Промо-ручки' },
        { id: 'bags', name: 'Пакеты, Ленты и Карты' },
        { id: 'mugs', name: 'Кружки, Значки и 3D-наклейки' }
    ];
    container.innerHTML = tabs.map(t =>
        `<button class="sv-calc-tab ${t.id === currentMainTab ? 'sv-calc-tab--active' : ''}" data-tab="${t.id}">${t.name}</button>`
    ).join('');
    container.querySelectorAll('.sv-calc-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMainTab = btn.dataset.tab;
            renderMainTabs();
            renderCalculator();
        });
    });
}

function renderCalculator() {
    const container = document.getElementById('sv-calc-body');
    if (!container) return;
    switch (currentMainTab) {
        case 'clothes': renderClothes(container); break;
        case 'caps': renderCaps(container); break;
        case 'pens': renderPens(container); break;
        case 'bags': renderBags(container); break;
        case 'mugs': renderMugs(container); break;
    }
}

function switchPreview(imgEl, newSrc) {
    if (!imgEl) return;
    imgEl.classList.add('sv-calc-photo--fade');
    setTimeout(() => {
        imgEl.src = newSrc;
        imgEl.onload = () => imgEl.classList.remove('sv-calc-photo--fade');
    }, 150);
}

function renderClothes(el) {
    const photoMap = {
        dtf: 'images/suvenir/dtf.jpeg',
        silk: 'images/suvenir/Шелкография.jpeg'
    };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/dtf.jpeg" alt="Процесс нанесения" class="sv-calc-photo" id="clothPhoto">
                <div class="sv-calc-photo-label" id="clothPhotoLabel">ДТФ / Флекс-плёнка</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Параметры заказа</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Изделие</label>
                <div class="sv-calc-radio-group">
                    <label class="sv-calc-radio"><input type="radio" name="clothItem" value="ours" checked><span>Наша футболка (+${souvenirPricelist.clothes.shirt} ₽)</span></label>
                    <label class="sv-calc-radio"><input type="radio" name="clothItem" value="client"><span>Изделие заказчика (0 ₽)</span></label>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Цвет футболки</label>
                <div class="sv-calc-color-btns" id="clothColors"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Технология</label>
                <div class="sv-calc-radio-group">
                    <label class="sv-calc-radio"><input type="radio" name="clothTech" value="dtf" checked><span>ДТФ / Флекс-плёнка (от 1 шт)</span></label>
                    <label class="sv-calc-radio"><input type="radio" name="clothTech" value="silk"><span>Шелкография (от 20 шт)</span></label>
                </div>
                <p class="sv-calc-hint">* Полноцветная DTF-печать или контурная порезка флекс-плёнки (1 цвет) с термопереносом.</p>
            </div>
            <div id="clothDtfOptions" class="sv-calc-group">
                <label class="sv-calc-label">Размер нанесения</label>
                <div class="sv-calc-chips">
                    <button class="sv-calc-chip active" data-size="A7">A7</button>
                    <button class="sv-calc-chip" data-size="A6">A6</button>
                    <button class="sv-calc-chip" data-size="A5">A5</button>
                    <button class="sv-calc-chip" data-size="A4">A4</button>
                    <button class="sv-calc-chip" data-size="29x29">29×29</button>
                </div>
            </div>
            <div id="clothSilkOptions" class="sv-calc-group" style="display:none">
                <label class="sv-calc-label">Количество цветов</label>
                <div class="sv-calc-chips">
                    <button class="sv-calc-chip active" data-colors="1">1</button>
                    <button class="sv-calc-chip" data-colors="2">2</button>
                    <button class="sv-calc-chip" data-colors="3">3</button>
                    <button class="sv-calc-chip" data-colors="4">4</button>
                    <button class="sv-calc-chip" data-colors="5">5</button>
                    <button class="sv-calc-chip" data-colors="6">6</button>
                </div>
                <label class="sv-calc-checkbox" style="margin-top:12px">
                    <input type="checkbox" id="clothDark">
                    <span>Печать на темном текстиле (+1 цвет подложки)</span>
                </label>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <input type="number" id="clothQty" class="sv-calc-input" value="10" min="1" max="10000">
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="clothTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="clothPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('clothes')">Оформить заказ</button>
        </div>
    </div>`;
    let clothState = { item: 'ours', tech: 'dtf', size: 'A7', colors: 1, dark: false, qty: 10, clothColor: 'Белый' };
    const techLabels = { dtf: 'ДТФ / Флекс-плёнка', silk: 'Шелкография' };
    const clothColors = ['Белый', 'Красный', 'Синий', 'Чёрный', 'Зелёный'];
    const clothColorBtns = document.getElementById('clothColors');
    clothColorBtns.innerHTML = clothColors.map(c =>
        `<button class="sv-calc-color-btn ${c === clothState.clothColor ? 'active' : ''}" data-color="${c}" style="background:${colorToHex(c)}" title="${c}"></button>`
    ).join('');
    clothColorBtns.querySelectorAll('.sv-calc-color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            clothState.clothColor = btn.dataset.color;
            clothColorBtns.querySelectorAll('.sv-calc-color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcClothes();
        });
    });
    document.querySelectorAll('input[name="clothItem"]').forEach(r => r.addEventListener('change', e => { clothState.item = e.target.value; calcClothes(); }));
    document.querySelectorAll('input[name="clothTech"]').forEach(r => r.addEventListener('change', e => {
        clothState.tech = e.target.value;
        document.getElementById('clothDtfOptions').style.display = e.target.value === 'dtf' ? '' : 'none';
        document.getElementById('clothSilkOptions').style.display = e.target.value === 'silk' ? '' : 'none';
        switchPreview(document.getElementById('clothPhoto'), photoMap[e.target.value]);
        document.getElementById('clothPhotoLabel').textContent = techLabels[e.target.value];
        calcClothes();
    }));
    el.querySelectorAll('#clothDtfOptions .sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        el.querySelectorAll('#clothDtfOptions .sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        clothState.size = c.dataset.size;
        calcClothes();
    }));
    el.querySelectorAll('#clothSilkOptions .sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        el.querySelectorAll('#clothSilkOptions .sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        clothState.colors = parseInt(c.dataset.colors);
        calcClothes();
    }));
    document.getElementById('clothDark').addEventListener('change', e => { clothState.dark = e.target.checked; calcClothes(); });
    document.getElementById('clothQty').addEventListener('input', e => { clothState.qty = parseInt(e.target.value) || 1; calcClothes(); });
    function calcClothes() {
        let price = 0;
        const qty = clothState.qty;
        if (clothState.tech === 'dtf') {
            const table = souvenirPricelist.clothes.dtf[clothState.size];
            const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
            price = table[step] * qty;
        } else {
            const colors = clothState.dark ? clothState.colors + 1 : clothState.colors;
            const table = souvenirPricelist.clothes.silk[Math.min(colors, 6)];
            if (!table) return;
            const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
            price = table[step] * qty;
        }
        if (clothState.item === 'ours') price += souvenirPricelist.clothes.shirt * qty;
        document.getElementById('clothTotal').textContent = price.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('clothPerUnit').textContent = (price / qty).toFixed(2) + ' ₽/шт';
    }
    calcClothes();
}

function renderCaps(el) {
    const capPhotoMap = {
        trucker: 'images/suvenir/truker.jpeg',
        velour: 'images/suvenir/regular cap.jpeg'
    };
    const capModelLabels = { trucker: 'Trucker (с сеткой)', velour: 'Полувелюр (100% хлопок)' };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/truker.jpeg" alt="Бейсболка" class="sv-calc-photo" id="capPhoto">
                <div class="sv-calc-photo-label" id="capPhotoLabel">Trucker (с сеткой)</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Параметры заказа</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Модель</label>
                <div class="sv-calc-radio-group">
                    <label class="sv-calc-radio"><input type="radio" name="capModel" value="trucker" checked><span>Trucker (с сеткой)</span></label>
                    <label class="sv-calc-radio"><input type="radio" name="capModel" value="velour"><span>Полувелюр (100% хлопок)</span></label>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Цвет</label>
                <div class="sv-calc-color-btns" id="capColorBtns"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="capQtyChips">
                    <button class="sv-calc-chip active" data-qty="1">от 1 шт</button>
                    <button class="sv-calc-chip" data-qty="10">от 10 шт</button>
                    <button class="sv-calc-chip" data-qty="50">от 50 шт</button>
                </div>
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="capTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="capPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('caps')">Оформить заказ</button>
        </div>
    </div>`;
    let capState = { model: 'trucker', color: 'Белый', qty: 1 };
    const capColors = souvenirPricelist.caps.colors;
    const capColorBtns = document.getElementById('capColorBtns');
    capColorBtns.innerHTML = capColors.map(c =>
        `<button class="sv-calc-color-btn ${c === capState.color ? 'active' : ''}" data-color="${c}" style="background:${colorToHex(c)}" title="${c}"></button>`
    ).join('');
    capColorBtns.querySelectorAll('.sv-calc-color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            capState.color = btn.dataset.color;
            capColorBtns.querySelectorAll('.sv-calc-color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcCaps();
        });
    });
    document.querySelectorAll('input[name="capModel"]').forEach(r => r.addEventListener('change', e => {
        capState.model = e.target.value;
        switchPreview(document.getElementById('capPhoto'), capPhotoMap[e.target.value]);
        document.getElementById('capPhotoLabel').textContent = capModelLabels[e.target.value];
        calcCaps();
    }));
    document.querySelectorAll('#capQtyChips .sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.querySelectorAll('#capQtyChips .sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        capState.qty = parseInt(c.dataset.qty);
        calcCaps();
    }));
    function calcCaps() {
        const table = souvenirPricelist.caps[capState.model];
        const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => capState.qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
        let total = table[step] * capState.qty;
        document.getElementById('capTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('capPerUnit').textContent = (total / capState.qty).toFixed(2) + ' ₽/шт';
    }
    calcCaps();
}

function renderPens(el) {
    const penPhotoMap = {
        polo: 'images/suvenir/polo.jpeg',
        focus: 'images/suvenir/focus.jpeg',
        europa: 'images/suvenir/europa.jpeg',
        global: 'images/suvenir/global.jpeg',
        top: 'images/suvenir/top top.jpeg',
        kosko: 'images/suvenir/Kosko Soft Mirror.jpeg',
        tek: 'images/suvenir/tek.jpeg',
        hilton: 'images/suvenir/hilton.jpeg',
        wood_pencil: 'images/suvenir/pencil.jpeg',
        craft: 'images/suvenir/01.jpg',
        skay_case: 'images/suvenir/Skay.jpeg'
    };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/polo.jpeg" alt="Ручка" class="sv-calc-photo" id="penPhoto">
                <div class="sv-calc-photo-label" id="penPhotoLabel">Polo</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Параметры заказа</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Модель ручки</label>
                <div class="sv-calc-pen-grid" id="penModels"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Цвет корпуса</label>
                <div class="sv-calc-color-btns" id="penColors"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <input type="number" id="penQty" class="sv-calc-input" value="50" min="1" max="100000">
            </div>
            <label class="sv-calc-checkbox">
                <input type="checkbox" id="penUV">
                <span>УФ-печать логотипа</span>
            </label>
            <p class="sv-calc-hint" id="penUVHint" style="display:none">* Стоимость УФ-печати: до 50 шт — 44 ₽, до 100 шт — 33 ₽, от 100 шт — 26 ₽ за штуку.</p>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="penTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="penPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('pens')">Оформить заказ</button>
        </div>
    </div>`;
    let penState = { model: 'polo', color: 'Белый', qty: 50, uv: false };
    const penModels = document.getElementById('penModels');
    penModels.innerHTML = Object.entries(souvenirPricelist.pens).filter(([k]) => !['colors', 'uv_print'].includes(k)).map(([k, v]) =>
        `<div class="sv-calc-pen-card ${k === penState.model ? 'active' : ''}" data-model="${k}">
            <span class="sv-calc-pen-name">${v.name}</span>
            <span class="sv-calc-pen-price">${v.price} ₽</span>
        </div>`
    ).join('');
    penModels.querySelectorAll('.sv-calc-pen-card').forEach(card => {
        card.addEventListener('click', () => {
            penState.model = card.dataset.model;
            penModels.querySelectorAll('.sv-calc-pen-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            switchPreview(document.getElementById('penPhoto'), penPhotoMap[card.dataset.model]);
            document.getElementById('penPhotoLabel').textContent = souvenirPricelist.pens[card.dataset.model].name;
            calcPens();
        });
    });
    const penColors = document.getElementById('penColors');
    penColors.innerHTML = souvenirPricelist.pens.colors.map(c =>
        `<button class="sv-calc-color-btn ${c === penState.color ? 'active' : ''}" data-color="${c}" style="background:${colorToHex(c)}" title="${c}"></button>`
    ).join('');
    penColors.querySelectorAll('.sv-calc-color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            penState.color = btn.dataset.color;
            penColors.querySelectorAll('.sv-calc-color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcPens();
        });
    });
    document.getElementById('penQty').addEventListener('input', e => { penState.qty = parseInt(e.target.value) || 1; calcPens(); });
    document.getElementById('penUV').addEventListener('change', e => {
        penState.uv = e.target.checked;
        document.getElementById('penUVHint').style.display = e.target.checked ? '' : 'none';
        calcPens();
    });
    function calcPens() {
        const unit = souvenirPricelist.pens[penState.model].price;
        let uvCost = 0;
        if (penState.uv) {
            const uvTable = souvenirPricelist.pens.uv_print;
            if (penState.qty <= 50) uvCost = uvTable[50];
            else if (penState.qty <= 100) uvCost = uvTable[100];
            else uvCost = uvTable[999999];
        }
        const totalUnit = unit + uvCost;
        let total = totalUnit * penState.qty;
        document.getElementById('penTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('penPerUnit').textContent = totalUnit.toFixed(2) + ' ₽/шт';
    }
    calcPens();
}

function renderBags(el) {
    if (!currentSubTab.bags) currentSubTab.bags = 'banana';
    el.innerHTML = `
    <div class="sv-calc-subtabs" id="bagsSubtabs">
        <button class="sv-calc-subtab ${currentSubTab.bags === 'banana' ? 'active' : ''}" data-sub="banana">Пакеты</button>
        <button class="sv-calc-subtab ${currentSubTab.bags === 'lanyards' ? 'active' : ''}" data-sub="lanyards">Ленты для бейджей</button>
        <button class="sv-calc-subtab ${currentSubTab.bags === 'cards' ? 'active' : ''}" data-sub="cards">Пластиковые карты</button>
    </div>
    <div id="bagsSubContent"></div>`;
    el.querySelectorAll('.sv-calc-subtab').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubTab.bags = btn.dataset.sub;
            el.querySelectorAll('.sv-calc-subtab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBagsContent();
        });
    });
    renderBagsContent();
}

function renderBagsContent() {
    const container = document.getElementById('bagsSubContent');
    if (!container) return;
    if (currentSubTab.bags === 'banana') renderBanana(container);
    else if (currentSubTab.bags === 'lanyards') renderLanyards(container);
    else renderCards(container);
}

function renderBanana(el) {
    const pr = souvenirPricelist.bags.banana;
    let bananaState = { size: '30×40', color: '1+0', qty: 200 };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/paket.jpeg" alt="Пакеты" class="sv-calc-photo">
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Пакеты</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Размер</label>
                <div class="sv-calc-chips" id="bananaSizeChips"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Цветность печати</label>
                <div class="sv-calc-chips" id="bananaColorChips"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="bananaQtyChips"></div>
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="bananaTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="bananaPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('banana')">Оформить заказ</button>
        </div>
    </div>`;
    document.getElementById('bananaSizeChips').innerHTML = pr.sizes.map(s => `<button class="sv-calc-chip ${s === bananaState.size ? 'active' : ''}" data-val="${s}">${s}</button>`).join('');
    document.getElementById('bananaColorChips').innerHTML = pr.colors.map(c => `<button class="sv-calc-chip ${c === bananaState.color ? 'active' : ''}" data-val="${c}">${c}</button>`).join('');
    document.getElementById('bananaQtyChips').innerHTML = Object.keys(pr.prices['30×40']['1+0']).map(q => `<button class="sv-calc-chip ${parseInt(q) === bananaState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
    const bindChips = (id, key) => {
        document.getElementById(id).querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
            document.getElementById(id).querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            bananaState[key] = key === 'qty' ? parseInt(c.dataset.val) : c.dataset.val;
            calcBanana();
        }));
    };
    bindChips('bananaSizeChips', 'size');
    bindChips('bananaColorChips', 'color');
    bindChips('bananaQtyChips', 'qty');
    function calcBanana() {
        const unit = pr.prices[bananaState.size]?.[bananaState.color]?.[bananaState.qty] || 0;
        let total = unit * bananaState.qty;
        document.getElementById('bananaTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('bananaPerUnit').textContent = unit.toFixed(2) + ' ₽/шт';
    }
    calcBanana();
}

function renderLanyards(el) {
    const pr = souvenirPricelist.bags.lanyards;
    const lanyardPhotoMap = {
        'Белая 1+0': 'images/suvenir/Lenta 1.jpeg',
        'Белая 4+0': 'images/suvenir/lenta 2.jpeg',
        'Белая 4+4': 'images/suvenir/lenta 3.jpeg',
        'Синяя 10мм': 'images/suvenir/lenta 4.jpeg'
    };
    const lanyardDescMap = {
        'Белая 1+0': 'БЕЛАЯ ЛЕНТА 1+0, БЕЛЫЙ ФОН\nПолиэстер 20 мм\nклипса или карабин\nс цветным лого\nс одной стороны',
        'Белая 4+0': 'БЕЛАЯ ЛЕНТА 4+0, ЦВЕТНОЙ ФОН С ОДНОЙ СТОРОНЫ\nПолиэстер 20 мм\nклипса или карабин\nс цветным лого\nс одной стороны',
        'Белая 4+4': 'БЕЛАЯ ЛЕНТА 4+4, ЦВЕТНОЙ ФОН С ДВУХ СТОРОН\nПолиэстер 20 мм\nклипса или карабин\nс цветным лого\nс одной стороны',
        'Синяя 10мм': 'СИНЯЯ ЛЕНТА 10ММ\nодносторонняя\nбез лого\nклипса'
    };
    let lanyardState = { type: 'Белая 1+0', qty: 50 };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/Lenta 1.jpeg" alt="Лента для бейджа" class="sv-calc-photo" id="lanyardPhoto">
                <div class="sv-calc-photo-desc" id="lanyardDesc">БЕЛАЯ ЛЕНТА 1+0, БЕЛЫЙ ФОН<br>Полиэстер 20 мм<br>клипса или карабин<br>с цветным лого<br>с одной стороны</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Ленты для бейджей</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тип ленты / печать</label>
                <div class="sv-calc-chips" id="lanyardTypeChips"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="lanyardQtyChips"></div>
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="lanyardTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="lanyardPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('lanyards')">Оформить заказ</button>
        </div>
    </div>`;
    document.getElementById('lanyardTypeChips').innerHTML = pr.types.map(t => `<button class="sv-calc-chip ${t === lanyardState.type ? 'active' : ''}" data-val="${t}">${t}</button>`).join('');
    document.getElementById('lanyardQtyChips').innerHTML = Object.keys(pr.prices['Белая 1+0']).map(q => `<button class="sv-calc-chip ${parseInt(q) === lanyardState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
    const bindLanyardChips = (id, key) => {
        document.getElementById(id).querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
            document.getElementById(id).querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            lanyardState[key] = key === 'qty' ? parseInt(c.dataset.val) : c.dataset.val;
            if (key === 'type') {
                switchPreview(document.getElementById('lanyardPhoto'), lanyardPhotoMap[c.dataset.val]);
                document.getElementById('lanyardDesc').innerHTML = lanyardDescMap[c.dataset.val].replace(/\n/g, '<br>');
            }
            calcLanyard();
        }));
    };
    bindLanyardChips('lanyardTypeChips', 'type');
    bindLanyardChips('lanyardQtyChips', 'qty');
    function calcLanyard() {
        const unit = pr.prices[lanyardState.type]?.[lanyardState.qty] || 0;
        let total = unit * lanyardState.qty;
        document.getElementById('lanyardTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('lanyardPerUnit').textContent = unit.toFixed(2) + ' ₽/шт';
    }
    calcLanyard();
}

function renderCards(el) {
    const pr = souvenirPricelist.bags.cards;
    const cardPhotoMap = {
        white: 'images/suvenir/White.jpeg',
        gold: 'images/suvenir/gold.jpeg',
        silver: 'images/suvenir/silver.jpeg'
    };
    const cardBaseLabels = { white: 'Белый пластик', gold: 'Золото', silver: 'Серебро' };
    let cardState = { base: 'white', options: {}, qty: 100 };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/White.jpeg" alt="Пластиковая карта" class="sv-calc-photo" id="cardPhoto">
                <div class="sv-calc-photo-label" id="cardPhotoLabel">Белый пластик</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Пластиковые карты</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Основа</label>
                <div class="sv-calc-chips" id="cardBaseChips">
                    <button class="sv-calc-chip active" data-val="white">Белый пластик</button>
                    <button class="sv-calc-chip" data-val="gold">Золото</button>
                    <button class="sv-calc-chip" data-val="silver">Серебро</button>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Персонализация</label>
                <div id="cardOptions"></div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <input type="number" id="cardQty" class="sv-calc-input" value="100" min="1" max="100000">
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="cardTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="cardPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('cards')">Оформить заказ</button>
        </div>
    </div>`;
    const cardOptions = document.getElementById('cardOptions');
    cardOptions.innerHTML = Object.entries(pr.options).map(([k, v]) =>
        `<label class="sv-calc-checkbox"><input type="checkbox" data-opt="${k}"><span>${v.name} (+${v.price} ₽)</span></label>`
    ).join('');
    document.getElementById('cardBaseChips').querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.getElementById('cardBaseChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        cardState.base = c.dataset.val;
        switchPreview(document.getElementById('cardPhoto'), cardPhotoMap[c.dataset.val]);
        document.getElementById('cardPhotoLabel').textContent = cardBaseLabels[c.dataset.val];
        calcCards();
    }));
    cardOptions.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener('change', () => {
        cardState.options[cb.dataset.opt] = cb.checked;
        calcCards();
    }));
    document.getElementById('cardQty').addEventListener('input', e => { cardState.qty = parseInt(e.target.value) || 1; calcCards(); });
    function calcCards() {
        let unit = pr.base[cardState.base];
        Object.entries(cardState.options).forEach(([k, v]) => { if (v) unit += pr.options[k].price; });
        let total = unit * cardState.qty;
        document.getElementById('cardTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('cardPerUnit').textContent = unit.toFixed(2) + ' ₽/шт';
    }
    calcCards();
}

function renderMugs(el) {
    if (!currentSubTab.mugs) currentSubTab.mugs = 'mugs';
    el.innerHTML = `
    <div class="sv-calc-subtabs" id="mugsSubtabs">
        <button class="sv-calc-subtab ${currentSubTab.mugs === 'mugs' ? 'active' : ''}" data-sub="mugs">Кружки</button>
        <button class="sv-calc-subtab ${currentSubTab.mugs === 'badges' ? 'active' : ''}" data-sub="badges">Закатные значки</button>
        <button class="sv-calc-subtab ${currentSubTab.mugs === 'stickers' ? 'active' : ''}" data-sub="stickers">3D-наклейки</button>
    </div>
    <div id="mugsSubContent"></div>`;
    el.querySelectorAll('.sv-calc-subtab').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubTab.mugs = btn.dataset.sub;
            el.querySelectorAll('.sv-calc-subtab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMugsContent();
        });
    });
    renderMugsContent();
}

function renderMugsContent() {
    const container = document.getElementById('mugsSubContent');
    if (!container) return;
    if (currentSubTab.mugs === 'mugs') renderMugsCalc(container);
    else if (currentSubTab.mugs === 'badges') renderBadges(container);
    else renderStickers(container);
}

function renderMugsCalc(el) {
    const mugPhotoMap = {
        white: 'images/suvenir/mug white.jpeg',
        colored: 'images/suvenir/Mug color.jpeg'
    };
    const mugDescMap = {
        white: 'Высота: 64-69мм\nДиаметр: 81 мм\nОбъем: 330 мл\nЦена с учетом печати',
        colored: 'Высота: 64-69мм\nДиаметр: 81 мм\nОбъем: 330 мл\nЦена с учетом печати'
    };
    let mugState = { type: 'white', qty: 10 };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/mug white.jpeg" alt="Кружка" class="sv-calc-photo" id="mugPhoto">
                <div class="sv-calc-photo-desc" id="mugDesc">Высота: 64-69мм<br>Диаметр: 81 мм<br>Объем: 330 мл<br>Цена с учетом печати</div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Кружки</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тип кружки</label>
                <div class="sv-calc-radio-group">
                    <label class="sv-calc-radio"><input type="radio" name="mugType" value="white" checked><span>Кружка белая</span></label>
                    <label class="sv-calc-radio"><input type="radio" name="mugType" value="colored"><span>Кружка цветная внутри и ручка</span></label>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="mugQtyChips">
                    <button class="sv-calc-chip" data-qty="1">от 1 шт</button>
                    <button class="sv-calc-chip active" data-qty="10">от 10 шт</button>
                    <button class="sv-calc-chip" data-qty="50">от 50 шт</button>
                    <button class="sv-calc-chip" data-qty="100">от 100 шт</button>
                </div>
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="mugTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="mugPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('mugs')">Оформить заказ</button>
        </div>
    </div>`;
    document.querySelectorAll('input[name="mugType"]').forEach(r => r.addEventListener('change', e => {
        mugState.type = e.target.value;
        switchPreview(document.getElementById('mugPhoto'), mugPhotoMap[e.target.value]);
        document.getElementById('mugDesc').innerHTML = mugDescMap[e.target.value].replace(/\n/g, '<br>');
        calcMug();
    }));
    document.querySelectorAll('#mugQtyChips .sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.querySelectorAll('#mugQtyChips .sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        mugState.qty = parseInt(c.dataset.qty);
        calcMug();
    }));
    function calcMug() {
        const table = souvenirPricelist.mugs[mugState.type];
        const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => mugState.qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
        let total = table[step] * mugState.qty;
        document.getElementById('mugTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('mugPerUnit').textContent = (table[step]).toFixed(2) + ' ₽/шт';
    }
    calcMug();
}

function renderBadges(el) {
    let badgeState = { size: 'D37', qty: 50, names: false };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/znachok.jpeg" alt="Закатные значки" class="sv-calc-photo">
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Закатные значки</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Размер</label>
                <div class="sv-calc-chips" id="badgeSizeChips">
                    <button class="sv-calc-chip" data-val="D25">D-25 мм</button>
                    <button class="sv-calc-chip active" data-val="D37">D-37 мм</button>
                    <button class="sv-calc-chip" data-val="D44">D-44 мм</button>
                    <button class="sv-calc-chip" data-val="D56">D-56 мм</button>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="badgeQtyChips"></div>
            </div>
            <label class="sv-calc-checkbox">
                <input type="checkbox" id="badgeNames">
                <span>Именные значки</span>
            </label>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="badgeTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="badgePerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('badges')">Оформить заказ</button>
        </div>
    </div>`;
    const qtySteps = Object.keys(souvenirPricelist.badges.D37);
    document.getElementById('badgeQtyChips').innerHTML = qtySteps.map(q => `<button class="sv-calc-chip ${parseInt(q) === badgeState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
    document.getElementById('badgeSizeChips').querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.getElementById('badgeSizeChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        badgeState.size = c.dataset.val;
        const newSteps = Object.keys(souvenirPricelist.badges[badgeState.size]);
        document.getElementById('badgeQtyChips').innerHTML = newSteps.map(q => `<button class="sv-calc-chip ${parseInt(q) === badgeState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
        document.getElementById('badgeQtyChips').querySelectorAll('.sv-calc-chip').forEach(ch => ch.addEventListener('click', () => {
            document.getElementById('badgeQtyChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
            ch.classList.add('active');
            badgeState.qty = parseInt(ch.dataset.val);
            calcBadge();
        }));
        calcBadge();
    }));
    document.getElementById('badgeQtyChips').querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.getElementById('badgeQtyChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        badgeState.qty = parseInt(c.dataset.val);
        calcBadge();
    }));
    document.getElementById('badgeNames').addEventListener('change', e => { badgeState.names = e.target.checked; calcBadge(); });
    function calcBadge() {
        const table = souvenirPricelist.badges[badgeState.size];
        const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => badgeState.qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
        let total = table[step] * badgeState.qty;
        if (badgeState.names) total += badgeState.qty * 5;
        document.getElementById('badgeTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('badgePerUnit').textContent = (total / badgeState.qty).toFixed(2) + ' ₽/шт';
    }
    calcBadge();
}

function renderStickers(el) {
    let stickerState = { size: '30-35', qty: 100 };
    el.innerHTML = `
    <div class="sv-calc-layout">
        <div class="sv-calc-visual">
            <div class="sv-calc-mockup">
                <img src="images/suvenir/3d sticker.jpeg" alt="3D-наклейки" class="sv-calc-photo">
                <div class="sv-calc-photo-desc">
                    Прямоугольник, овал, круглый, квадратный<br>
                    Максимальный размер стороны: 70 мм<br>
                    Минимальный размер стороны: 20 мм<br>
                    Минимальный радиус скругления: 1,5 мм<br>
                    Нельзя делать в макете острые углы
                </div>
            </div>
        </div>
        <div class="sv-calc-params">
            <h3 class="sv-calc-params-title">Объемные 3D-наклейки</h3>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Размер</label>
                <div class="sv-calc-chips" id="stickerSizeChips">
                    <button class="sv-calc-chip" data-val="20-25">20-25 мм</button>
                    <button class="sv-calc-chip active" data-val="30-35">30-35 мм</button>
                    <button class="sv-calc-chip" data-val="50">50 мм</button>
                </div>
            </div>
            <div class="sv-calc-group">
                <label class="sv-calc-label">Тираж</label>
                <div class="sv-calc-chips" id="stickerQtyChips"></div>
            </div>
            <div class="sv-calc-result">
                <div class="sv-calc-total"><span>Итого:</span> <strong id="stickerTotal">0 ₽</strong></div>
                <div class="sv-calc-perunit"><span>За 1 шт:</span> <strong id="stickerPerUnit">0 ₽/шт</strong></div>
            </div>
            <button class="btn btn--red btn--lg sv-calc-order" onclick="orderFromCalc('stickers')">Оформить заказ</button>
        </div>
    </div>`;
    const stickerQtySteps = Object.keys(souvenirPricelist.stickers3d['30-35']);
    document.getElementById('stickerQtyChips').innerHTML = stickerQtySteps.map(q => `<button class="sv-calc-chip ${parseInt(q) === stickerState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
    document.getElementById('stickerSizeChips').querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.getElementById('stickerSizeChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        stickerState.size = c.dataset.val;
        const newSteps = Object.keys(souvenirPricelist.stickers3d[stickerState.size]);
        document.getElementById('stickerQtyChips').innerHTML = newSteps.map(q => `<button class="sv-calc-chip ${parseInt(q) === stickerState.qty ? 'active' : ''}" data-val="${q}">${q} шт</button>`).join('');
        document.getElementById('stickerQtyChips').querySelectorAll('.sv-calc-chip').forEach(ch => ch.addEventListener('click', () => {
            document.getElementById('stickerQtyChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
            ch.classList.add('active');
            stickerState.qty = parseInt(ch.dataset.val);
            calcSticker();
        }));
        calcSticker();
    }));
    document.getElementById('stickerQtyChips').querySelectorAll('.sv-calc-chip').forEach(c => c.addEventListener('click', () => {
        document.getElementById('stickerQtyChips').querySelectorAll('.sv-calc-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        stickerState.qty = parseInt(c.dataset.val);
        calcSticker();
    }));
    function calcSticker() {
        const table = souvenirPricelist.stickers3d[stickerState.size];
        const step = Object.keys(table).map(Number).sort((a, b) => a - b).find(s => stickerState.qty >= s) || Object.keys(table).map(Number).sort((a, b) => b - a)[0];
        let total = table[step] * stickerState.qty;
        document.getElementById('stickerTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('stickerPerUnit').textContent = (total / stickerState.qty).toFixed(2) + ' ₽/шт';
    }
    calcSticker();
}

function orderFromCalc(type) {
    const orderArea = document.getElementById('orderTextarea');
    if (!orderArea) return;
    let text = `[Заявка — ${type}]\n`;
    text += `Дата: ${new Date().toLocaleDateString('ru-RU')}\n\n`;
    const params = document.querySelectorAll('.sv-calc-params .sv-calc-group');
    params.forEach(g => {
        const label = g.querySelector('.sv-calc-label');
        const active = g.querySelector('.sv-calc-chip.active, .sv-calc-radio input:checked, .sv-calc-color-btn.active, .sv-calc-pen-card.active');
        if (label && active) {
            const val = active.dataset?.val || active.dataset?.color || active.textContent?.trim() || '';
            text += `${label.textContent}: ${val}\n`;
        }
    });
    const total = document.querySelector('.sv-calc-total strong');
    const perunit = document.querySelector('.sv-calc-perunit strong');
    if (total) text += `\nИтого: ${total.textContent}\n`;
    if (perunit) text += `За 1 шт: ${perunit.textContent}\n`;
    const checkboxes = document.querySelectorAll('.sv-calc-checkbox input:checked');
    checkboxes.forEach(cb => {
        const label = cb.parentElement.querySelector('span');
        if (label) text += `\n${label.textContent}`;
    });
    orderArea.value = text;
    orderArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function colorToHex(color) {
    const map = { 'Белый': '#fff', 'Красный': '#e53935', 'Синий': '#1e88e5', 'Чёрный': '#212121', 'Зелёный': '#43a047', 'Жёлтый': '#fdd835' };
    return map[color] || '#ccc';
}

document.addEventListener('DOMContentLoaded', initCalculator);
