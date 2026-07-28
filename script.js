// === ГЛОБАЛЬНЫЙ ОБЪЕКТ ЦЕН (под WordPress/ACF) ===
const pricingData = {
    extras: {
        fold: 0.15,      // Фальцовка (сгиб) за 1 шт.
        big: 0.75,       // Биговка (канавка) за 1 шт.
        cut: 75,         // Дополнительный рез за каждые 500 шт.
        perf: 0.3,       // Перфорация за 1 шт.
        hole: 450,       // Отверстие 5 мм за 1000 шт.
        corners: 390     // Закругление углов за 1000 шт.
    },
    products: {
        business_cards: {
            title: 'Визитки (90x50 мм / 85x55 мм)',
            image: 'images/products/business-card.png',
            papers: ['Мелованная 300г'],
            prices: { 100: 650, 200: 1000, 300: 1300, 500: 1500, 1000: 1800, 2000: 3200 }
        },
        kubariki: {
            title: 'Кубарики (90x90 мм)',
            image: 'images/products/kubariki.png',
            papers: ['Офсетная 80г'],
            prices: { 100: 1200, 500: 3500, 1000: 5800 }
        },
        calendars: {
            title: 'Календарики (100x70 мм)',
            image: 'images/products/calendar.png',
            papers: ['Мелованная 300г + Ламинация'],
            calendar: {
                none:    { 1000: 1752, 2000: 3467, 3000: 5213, 4000: 6930, 5000: 8657, 10000: 17304 },
                lam_1_0: { 1000: 2087, 2000: 4166, 3000: 6222, 4000: 8303, 5000: 10346, 10000: 20684 },
                lam_1_1: { 1000: 2916, 2000: 5805, 3000: 8699, 4000: 11609, 5000: 14456, 10000: 28907 }
            }
        },
        euro_flayer: {
            title: 'Еврофлаер (210x99 мм)',
            image: 'images/products/euro.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г', 'Мелованная 300г'],
            prices: { 500: 2100, 1000: 2800, 2000: 4900, 5000: 9500 }
        },
        euro_booklet: {
            title: 'Евробуклет (297x210 мм, 2 сгиба)',
            image: 'images/products/euro-booklet.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г'],
            prices: { 500: 4200, 1000: 5900, 2000: 10500, 5000: 21000 }
        },
        a7: {
            title: 'Листовки A7 (105x74 мм)',
            image: 'images/products/a7.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 300г'],
            prices: { 1000: 1900, 2000: 3100, 5000: 5800 }
        },
        a6: {
            title: 'Листовки A6 (148x105 мм)',
            image: 'images/products/a6.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г', 'Мелованная 300г'],
            prices: { 500: 1800, 1000: 2600, 2000: 4400, 5000: 8900 }
        },
        a5: {
            title: 'Листовки A5 (210x148 мм)',
            image: 'images/products/a5.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г', 'Мелованная 300г'],
            prices: { 500: 2900, 1000: 4300, 2000: 7600, 5000: 16200 }
        },
        a4: {
            title: 'Листовки / Плакаты A4 (297x210 мм)',
            image: 'images/products/a4.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г', 'Мелованная 300г'],
            prices: { 500: 4900, 1000: 7200, 2000: 13100, 5000: 29500 }
        },
        a3: {
            title: 'Плакаты A3 (420x297 мм)',
            image: 'images/products/a3.png',
            papers: ['Мелованная 115г', 'Мелованная 130г', 'Мелованная 170г'],
            prices: { 250: 4800, 500: 7900, 1000: 12500 }
        },
        placemat: {
            title: 'Плейсметы (396x288 мм)',
            image: 'images/products/placemat.png',
            papers: ['Офсетная 80г', 'Крафт 70г'],
            prices: { 1000: 5200, 2000: 8900, 5000: 18500 }
        },
        henger: {
            title: 'Хенгеры (88x201 мм)',
            image: 'images/products/henger.png',
            papers: ['Мелованная 300г'],
            prices: { 1000: 4100, 2000: 6900, 5000: 14200 }
        }
    },
    // Маппинг data-value кнопок формы → ключи products
    productMap: {
        '90x50': 'business_cards',
        '85x55': 'business_cards',
        '70x100': 'calendars',
        flyer: 'euro_flayer',
        dva: 'euro_flayer',
        booklet: 'euro_booklet',
        a7: 'a7',
        a6: 'a6',
        a5: 'a5',
        a4: 'a4',
        a3: 'a3'
    },
    // Коэффициенты для особых форматов (Два евро = 4× еврофлаер)
    productMult: {
        'dva': 4.0
    },
    paperMult: { '115': 0.92, '130': 1, '170': 1.15, '300': 1.4 },
    lamMult: { none: 1, gloss10: 1.05, gloss11: 1.08, soft11: 1.12 },
    lamNames: { none: 'Без ламинации', gloss10: 'Глянец (1+0)', gloss11: 'Глянец (1+1)', soft11: 'Soft-Touch (1+1)' },
    // Маппинг ламинации → ключ calendar
    lamToCalendar: { none: 'none', gloss10: 'lam_1_0', gloss11: 'lam_1_1', soft11: 'lam_1_1' }
};

// ==========================================
// КАЛЬКУЛЯТОР ПОЛИГРАФИИ
// ==========================================
(function() {
    const P = pricingData;
    const hintEl = document.querySelector('.pg-calc__hint');
    const listQtyGroup = document.querySelector('[data-field="listQty"]');

    const HINT_TEXTS = {
        offset: 'Сборные тиражи — печать нескольких заказов на одном листе. Самая низкая цена от 1000 шт., срок 3–5 дней.',
        digital: 'Цифровая печать — оперативное изготовление от 1 дня. Идеально для малых тиражей до 300 шт.'
    };

    // Утилиты
    function fmt(n) { return n.toLocaleString('ru-RU'); }

    function perFmt(total, qty) {
        const val = total / qty;
        return val < 10 ? val.toFixed(2) : Math.round(val);
    }

    function getActivePill(field) {
        const el = document.querySelector(`[data-field="${field}"] .pg-calc__pill--active`);
        return el ? el.dataset.value : null;
    }

    function getSelectVal(field) {
        const el = document.querySelector(`[data-field="${field}"]`);
        return el ? el.value : '130';
    }

    function getChecked(field) {
        const el = document.querySelector(`[data-field="${field}"]`);
        return el ? el.checked : false;
    }

    function isCheckboxChecked(option) {
        const el = document.querySelector(`[data-option="${option}"]`);
        return el ? el.checked : false;
    }

    // Получить продукт по ключу формы
    function getProduct(formatKey) {
        const productKey = P.productMap[formatKey];
        if (!productKey) return null;
        return P.products[productKey] || null;
    }

    // Получить таблицу цен для продукта (обычную или calendar[lamKey])
    function getPriceTable(formatKey, lamKey) {
        const prod = getProduct(formatKey);
        if (!prod) return null;
        if (prod.calendar) {
            const calKey = P.lamToCalendar[lamKey] || 'lam_1_0';
            return prod.calendar[calKey] || null;
        }
        return prod.prices || null;
    }

    // Ближайший доступный тираж для продукта
    function nearestQty(formatKey, qty, lamKey) {
        const table = getPriceTable(formatKey, lamKey);
        if (!table) return qty;
        const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
        if (table[qty] !== undefined) return qty;
        let best = keys[0];
        for (const k of keys) {
            if (Math.abs(k - qty) < Math.abs(best - qty)) best = k;
        }
        return best;
    }

    // Базовая цена продукта по ближайшему тиражу
    function getBasePrice(formatKey, qty, lamKey) {
        const table = getPriceTable(formatKey, lamKey);
        if (!table) return null;
        if (table[qty] !== undefined) return table[qty];
        const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
        let best = keys[0];
        for (const k of keys) {
            if (Math.abs(k - qty) < Math.abs(best - qty)) best = k;
        }
        return table[best];
    }

    // Список доступных тиражей для продукта
    function getAvailableQty(formatKey, lamKey) {
        const table = getPriceTable(formatKey, lamKey);
        if (!table) return [];
        return Object.keys(table).map(Number).sort((a, b) => a - b);
    }

    // ==========================================
    // 1. ГЛАВНЫЕ ТАБЫ: Офсет / Цифра
    // ==========================================
    document.querySelectorAll('#pgTopTabs .pg-calc__tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            document.querySelectorAll('#pgTopTabs .pg-calc__tab').forEach(t => t.classList.remove('pg-calc__tab--active'));
            this.classList.add('pg-calc__tab--active');
            document.querySelectorAll('.pg-calc__content').forEach(c => c.classList.remove('pg-calc__content--active'));
            const content = document.querySelector(`[data-content="${tabName}"]`);
            if (content) content.classList.add('pg-calc__content--active');
            if (hintEl) hintEl.textContent = HINT_TEXTS[tabName] || '';
        });
    });

    // ==========================================
    // 2. САБ-ТАБЫ: Визитки / Листовки
    // ==========================================
    function switchSubTab(subtab) {
        document.querySelectorAll('.pg-calc__sub-tabs .pg-calc__tab').forEach(t => t.classList.remove('pg-calc__tab--active'));
        document.querySelectorAll('.pg-calc__sub-content').forEach(c => c.classList.remove('pg-calc__sub-content--active'));
        const activeTab = document.querySelector(`.pg-calc__sub-tabs .pg-calc__tab[data-subtab="${subtab}"]`);
        if (activeTab) activeTab.classList.add('pg-calc__tab--active');
        const activeContent = document.querySelector(`[data-subcontent="${subtab}"]`);
        if (activeContent) activeContent.classList.add('pg-calc__sub-content--active');
        calculatePrice();
    }

    document.querySelectorAll('.pg-calc__sub-tabs .pg-calc__tab').forEach(tab => {
        tab.addEventListener('click', function() { switchSubTab(this.dataset.subtab); });
    });

    // ==========================================
    // 3. ПИЛЛЫ: клик по любой кнопке-пиллу
    // ==========================================
    document.querySelectorAll('.pg-calc__pills').forEach(group => {
        group.addEventListener('click', function(e) {
            const pill = e.target.closest('.pg-calc__pill');
            if (!pill || pill.disabled) return;
            group.querySelectorAll('.pg-calc__pill').forEach(p => p.classList.remove('pg-calc__pill--active'));
            pill.classList.add('pg-calc__pill--active');
            onFieldChange(group.dataset.field);
        });
    });

    // ==========================================
    // 4. СЕЛЕКТЫ: изменение бумаги
    // ==========================================
    document.querySelectorAll('.pg-calc__select').forEach(sel => {
        sel.addEventListener('change', function() { onFieldChange(this.dataset.field); });
    });

    // ==========================================
    // 5. ЧЕКБОКСЫ: доп. обработка, срочность, нет макета
    // ==========================================
    document.querySelectorAll('.pg-calc__checks input[type="checkbox"]').forEach(ch => {
        ch.addEventListener('change', function() {
            if (this.dataset.field === 'noDesign') {
                const d = document.getElementById('visDesign'), u = document.getElementById('visUpload');
                if (d) d.style.display = this.checked ? 'block' : 'none';
                if (u) u.style.display = this.checked ? 'none' : 'flex';
            }
            if (this.dataset.field === 'noDesignList') {
                const d = document.getElementById('listDesign'), u = document.getElementById('listUpload');
                if (d) d.style.display = this.checked ? 'block' : 'none';
                if (u) u.style.display = this.checked ? 'none' : 'flex';
            }
            calculatePrice();
        });
    });

    // ==========================================
    // 5b. ПРОИЗВОЛЬНЫЙ ТИРАЖ: округление, скидка, расчёт
    // ==========================================
    document.querySelectorAll('.pg-calc__input-custom').forEach(input => {
        // При потере фокуса — округлить до ближайшей тысячи вверх
        input.addEventListener('blur', function() {
            let val = parseInt(this.value);
            if (!isNaN(val) && val > 0) {
                const rounded = Math.ceil(val / 1000) * 1000;
                if (rounded < 1000) this.value = 1000;
                else this.value = rounded;
            }
            updateDiscountNote();
            calculatePrice();
        });

        // При вводе Enter — тоже округлить
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });

        // При изменении значения (стрелки, ручной ввод) — пересчёт
        input.addEventListener('input', function() {
            updateDiscountNote();
            calculatePrice();
        });
    });

    // Получить актуальный тираж: кастомный инпут или активный пилл
    function getActualQty(field, customField) {
        const customInput = document.querySelector(`[data-field="${customField}"]`);
        if (customInput && customInput.value) {
            const val = parseInt(customInput.value);
            if (!isNaN(val) && val >= 1000) return val;
        }
        return parseInt(getActivePill(field)) || 0;
    }

    // Показать/скрыть блок скидки
    function updateDiscountNote() {
        const visCustom = document.querySelector('[data-field="visQtyCustom"]');
        const listCustom = document.querySelector('[data-field="listQtyCustom"]');
        const visQty = visCustom && visCustom.value ? parseInt(visCustom.value) : parseInt(getActivePill('visQty')) || 0;
        const listQty = listCustom && listCustom.value ? parseInt(listCustom.value) : parseInt(getActivePill('listQty')) || 0;

        document.querySelectorAll('.pg-calc__discount-note').forEach(note => {
            const isVis = note.closest('[data-subcontent="vis"]');
            const qty = isVis ? visQty : listQty;
            note.style.display = (qty >= 10000) ? 'block' : 'none';
        });
    }

    // ==========================================
    // 6. ПРЕВЬЮ-КАРТИНКА (из products[key].image)
    // ==========================================
    function updatePreview(type, formatKey) {
        const imgId = type === 'vis' ? 'visPreviewImg' : 'listPreviewImg';
        const img = document.getElementById(imgId);
        if (!img) return;
        const prod = getProduct(formatKey);
        const src = prod ? prod.image : null;
        if (src) {
            img.src = src;
            img.onerror = function() { this.src = 'images/polygraphy.png'; };
        }
    }

    // ==========================================
    // 7. ПЕРЕСТРОЕНИЕ КНОПОК ТИРАЖЕЙ (листовки)
    // ==========================================
    function rebuildListQtyButtons(formatKey) {
        if (!listQtyGroup) return;
        const available = getAvailableQty(formatKey);
        const current = parseInt(getActivePill('listQty')) || 0;
        listQtyGroup.innerHTML = available.map(q => {
            const label = q.toLocaleString('ru-RU');
            const isActive = q === current || (!available.includes(current) && q === available[0]);
            return `<button class="pg-calc__pill${isActive ? ' pg-calc__pill--active' : ''}" data-value="${q}">${label}</button>`;
        }).join('');
        listQtyGroup.querySelectorAll('.pg-calc__pill').forEach(pill => {
            pill.addEventListener('click', function() {
                listQtyGroup.querySelectorAll('.pg-calc__pill').forEach(p => p.classList.remove('pg-calc__pill--active'));
                this.classList.add('pg-calc__pill--active');
                calculatePrice();
            });
        });
        if (!available.includes(current) && available.length > 0) {
            const first = listQtyGroup.querySelector('.pg-calc__pill');
            if (first) first.classList.add('pg-calc__pill--active');
        }
    }

    // ==========================================
    // 8. ОСНОВНАЯ ФУНКЦИЯ РАСЧЁТА
    // ==========================================
    function calculatePrice() {
        const visContent = document.querySelector('[data-subcontent="vis"]');
        const isVisActive = visContent && visContent.classList.contains('pg-calc__sub-content--active');
        if (isVisActive) {
            calcVisits();
        } else {
            calcFlyers();
        }
    }

    // --- Расчёт визиток ---
    function calcVisits() {
        const size = getActivePill('visSize');
        const qty = getActualQty('visQty', 'visQtyCustom');
        const paper = getSelectVal('visPaper');
        const lam = getActivePill('visLam');

        if (!size || !qty) { setVisResult('— ₽', '— ₽/шт', 'Срок: —'); return; }

        const prod = getProduct(size);
        const isCalendar = prod && !!prod.calendar;

        let total;
        if (isCalendar) {
            // Календарики: точная цена из calendar[lamKey], без множителей
            const basePrice = getBasePrice(size, qty, lam);
            if (basePrice === null) { setVisResult('— ₽', '— ₽/шт', 'Срок: —'); return; }
            total = basePrice;
        } else {
            // Для произвольного тиража: пропорционально цене за 1000 шт
            const pricePer1k = getBasePrice(size, 1000);
            if (pricePer1k === null) { setVisResult('— ₽', '— ₽/шт', 'Срок: —'); return; }
            const paperMult = P.paperMult[paper] || 1;
            const lamMult = P.lamMult[lam] || 1;
            total = Math.round(pricePer1k * (qty / 1000) * paperMult * lamMult);
        }

        const isOffset = qty >= 1000;
        if (isOffset) {
            if (isCheckboxChecked('round')) total += Math.round((qty / 1000) * P.extras.corners);
            if (isCheckboxChecked('hole')) total += Math.round((qty / 1000) * P.extras.hole);
        }
        updateExtrasState(qty);

        const per = perFmt(total, qty);
        const delivery = isOffset ? '5–7 рабочих дней (Офсетный тираж)' : '1–2 рабочих дня (Оперативная цифра)';
        setVisResult(fmt(total) + ' ₽', per + ' ₽/шт', 'Срок изготовления: ' + delivery);
    }

    function setVisResult(price, per, delivery) {
        const pe = document.getElementById('visPrice'), pe2 = document.getElementById('visPer'), de = document.getElementById('visDelivery');
        if (pe) pe.textContent = price;
        if (pe2) pe2.textContent = per;
        if (de) de.textContent = delivery;
    }

    function updateExtrasState(qty) {
        const isSmall = !qty || qty < 1000;
        document.querySelectorAll('[data-option="round"], [data-option="hole"]').forEach(ch => {
            ch.disabled = isSmall;
            if (isSmall) ch.checked = false;
        });
    }

    // --- Расчёт листовок/буклетов ---
    function calcFlyers() {
        const format = getActivePill('listFormat');
        const qty = getActualQty('listQty', 'listQtyCustom');
        const paper = getSelectVal('listPaper');
        const express = getChecked('listExpress');

        if (!format || !qty) { setListResult('— ₽', '— ₽/шт', 'Срок: —'); return; }

        // Для произвольного тиража: пропорционально цене за 1000 шт
        const pricePer1k = getBasePrice(format, 1000);
        if (pricePer1k === null) { setListResult('— ₽', '— ₽/шт', 'Срок: —'); return; }

        const prodMult = P.productMult[format] || 1;
        const paperMult = P.paperMult[paper] || 1;
        let total = Math.round(pricePer1k * (qty / 1000) * prodMult * paperMult);

        // Послепечатная обработка
        const E = P.extras;
        // Буклет: 2 сгиба
        const foldCount = format === 'booklet' ? 2 : 1;
        if (isCheckboxChecked('listFaltsovka')) total += Math.round(qty * E.fold * foldCount);
        if (isCheckboxChecked('listBigovka')) total += Math.round(qty * E.big);
        if (isCheckboxChecked('listRez')) total += Math.round(Math.ceil(qty / 500) * E.cut);
        if (isCheckboxChecked('listPerforatsiya')) total += Math.round(qty * E.perf);
        if (isCheckboxChecked('listHole')) total += Math.round((qty / 1000) * E.hole);
        if (isCheckboxChecked('listRound')) total += Math.round((qty / 1000) * E.corners);

        if (express) total = Math.round(total * 1.15);

        const per = perFmt(total, qty);
        let delivery;
        if (express) delivery = '3–4 рабочих дня (Экспресс-офсет)';
        else if (qty >= 500) delivery = '5–7 рабочих дней (Офсетный тираж)';
        else delivery = '1–2 рабочих дня (Оперативная цифра)';

        setListResult(fmt(total) + ' ₽', per + ' ₽/шт', 'Срок изготовления: ' + delivery);
    }

    function setListResult(price, per, delivery) {
        const pe = document.getElementById('listPrice'), pe2 = document.getElementById('listPer'), de = document.getElementById('listDelivery');
        if (pe) pe.textContent = price;
        if (pe2) pe2.textContent = per;
        if (de) de.textContent = delivery;
    }

    // ==========================================
    // 9. ОБРАБОТЧИК ИЗМЕНЕНИЯ ПОЛЯ
    // ==========================================
    function onFieldChange(field) {
        if (field === 'visSize') {
            handleCalendaric();
            updatePreview('vis', getActivePill('visSize'));
        }
        if (field === 'visQty') {
            updateExtrasState(parseInt(getActivePill('visQty')) || 0);
        }
        if (field === 'listFormat') {
            updatePreview('list', getActivePill('listFormat'));
            handleBooklet();
            const fmt = getActivePill('listFormat');
            if (fmt === 'a3') {
                handleA3();
            } else {
                rebuildListQtyButtons(fmt);
            }
        }
        calculatePrice();
    }

    // ==========================================
    // 10. СПЕЦОБРАБОТКА КАЛЕНДАРИКА (70×100)
    // ==========================================
    function handleCalendaric() {
        const size = getActivePill('visSize');
        const isCal = size === '70x100';
        const lamGroup = document.querySelector('[data-field="visLam"]');
        const qtyGroup = document.querySelector('[data-field="visQty"]');
        const paperSelect = document.querySelector('[data-field="visPaper"]');
        const printGroup = document.querySelector('[data-field="visPrint"]');

        if (isCal) {
            // Фиксируем бумагу на 300
            if (paperSelect) {
                paperSelect.value = '300';
                paperSelect.disabled = true;
            }
            // Фиксируем красочность на 4+4
            if (printGroup) {
                printGroup.querySelectorAll('.pg-calc__pill').forEach(p => {
                    const d = p.dataset.value !== '4+4';
                    p.disabled = d;
                    p.classList.toggle('pg-calc__pill--disabled', d);
                    if (p.dataset.value === '4+4') p.classList.add('pg-calc__pill--active');
                    else p.classList.remove('pg-calc__pill--active');
                });
            }
            // Фиксируем ламинацию на gloss10
            if (lamGroup) {
                lamGroup.querySelectorAll('.pg-calc__pill').forEach(p => {
                    const d = p.dataset.value !== 'gloss10';
                    p.disabled = d;
                    p.classList.toggle('pg-calc__pill--disabled', d);
                    if (p.dataset.value === 'gloss10') p.classList.add('pg-calc__pill--active');
                    else p.classList.remove('pg-calc__pill--active');
                });
            }
            // Перерисовываем тиражи: [1000, 2000, 3000, 4000, 5000, 10000]
            if (qtyGroup) {
                const calQtys = [1000, 2000, 3000, 4000, 5000, 10000];
                const current = parseInt(getActivePill('visQty')) || 0;
                qtyGroup.innerHTML = calQtys.map(q => {
                    const label = q.toLocaleString('ru-RU');
                    const isActive = q === current || (!calQtys.includes(current) && q === calQtys[0]);
                    return `<button class="pg-calc__pill${isActive ? ' pg-calc__pill--active' : ''}" data-value="${q}">${label}</button>`;
                }).join('');
                qtyGroup.querySelectorAll('.pg-calc__pill').forEach(pill => {
                    pill.addEventListener('click', function() {
                        qtyGroup.querySelectorAll('.pg-calc__pill').forEach(p => p.classList.remove('pg-calc__pill--active'));
                        this.classList.add('pg-calc__pill--active');
                        calculatePrice();
                    });
                });
                if (!calQtys.includes(current) && calQtys.length > 0) {
                    const first = qtyGroup.querySelector('.pg-calc__pill');
                    if (first) first.classList.add('pg-calc__pill--active');
                }
            }
        } else {
            // Восстанавливаем всё
            if (paperSelect) paperSelect.disabled = false;
            if (printGroup) {
                printGroup.querySelectorAll('.pg-calc__pill').forEach(p => { p.disabled = false; p.classList.remove('pg-calc__pill--disabled'); });
            }
            if (lamGroup) {
                lamGroup.querySelectorAll('.pg-calc__pill').forEach(p => { p.disabled = false; p.classList.remove('pg-calc__pill--disabled'); });
            }
            // Восстанавливаем стандартные тиражи визиток
            if (qtyGroup) {
                const visQtys = [1000, 2000, 3000, 5000, 10000];
                const current = parseInt(getActivePill('visQty')) || 0;
                qtyGroup.innerHTML = visQtys.map(q => {
                    const label = q.toLocaleString('ru-RU');
                    const isActive = q === current || (!visQtys.includes(current) && q === visQtys[0]);
                    return `<button class="pg-calc__pill${isActive ? ' pg-calc__pill--active' : ''}" data-value="${q}">${label}</button>`;
                }).join('');
                qtyGroup.querySelectorAll('.pg-calc__pill').forEach(pill => {
                    pill.addEventListener('click', function() {
                        qtyGroup.querySelectorAll('.pg-calc__pill').forEach(p => p.classList.remove('pg-calc__pill--active'));
                        this.classList.add('pg-calc__pill--active');
                        calculatePrice();
                    });
                });
                if (!visQtys.includes(current) && visQtys.length > 0) {
                    const first = qtyGroup.querySelector('.pg-calc__pill');
                    if (first) first.classList.add('pg-calc__pill--active');
                }
            }
        }
    }

    // ==========================================
    // 10b. СПЕЦОБРАБОТКА БУКЛЕТА
    // ==========================================
    function handleBooklet() {
        const format = getActivePill('listFormat');
        const isBooklet = format === 'booklet';
        const paperSelect = document.querySelector('[data-field="listPaper"]');
        const faltsovkaCh = document.querySelector('[data-option="listFaltsovka"]');

        if (isBooklet) {
            // Авто-фальцовка: включаем и блокируем
            if (faltsovkaCh) {
                faltsovkaCh.checked = true;
                faltsovkaCh.disabled = true;
            }
            // Ограничиваем бумагу: только 115, 130, 170 (без 300)
            if (paperSelect) {
                const allowed = ['115', '130', '170'];
                Array.from(paperSelect.options).forEach(opt => {
                    opt.hidden = !allowed.includes(opt.value);
                });
                if (!allowed.includes(paperSelect.value)) {
                    paperSelect.value = '130';
                }
            }
        } else {
            // Восстанавливаем
            if (faltsovkaCh) {
                faltsovkaCh.checked = false;
                faltsovkaCh.disabled = false;
            }
            if (paperSelect) {
                Array.from(paperSelect.options).forEach(opt => { opt.hidden = false; });
            }
        }
    }

    // ==========================================
    // 10c. СПЕЦОБРАБОТКА A3
    // ==========================================
    function handleA3() {
        const format = getActivePill('listFormat');
        const isA3 = format === 'a3';
        if (!isA3) return;
        // Перерисовываем тиражи: [500, 1000, 2000, 3000, 5000]
        if (!listQtyGroup) return;
        const a3Qtys = [500, 1000, 2000, 3000, 5000];
        const current = parseInt(getActivePill('listQty')) || 0;
        listQtyGroup.innerHTML = a3Qtys.map(q => {
            const label = q.toLocaleString('ru-RU');
            const isActive = q === current || (!a3Qtys.includes(current) && q === a3Qtys[0]);
            return `<button class="pg-calc__pill${isActive ? ' pg-calc__pill--active' : ''}" data-value="${q}">${label}</button>`;
        }).join('');
        listQtyGroup.querySelectorAll('.pg-calc__pill').forEach(pill => {
            pill.addEventListener('click', function() {
                listQtyGroup.querySelectorAll('.pg-calc__pill').forEach(p => p.classList.remove('pg-calc__pill--active'));
                this.classList.add('pg-calc__pill--active');
                calculatePrice();
            });
        });
        if (!a3Qtys.includes(current) && a3Qtys.length > 0) {
            const first = listQtyGroup.querySelector('.pg-calc__pill');
            if (first) first.classList.add('pg-calc__pill--active');
        }
    }

    // ==========================================
    // 11. ЗАГРУЗКА ФАЙЛА
    // ==========================================
    document.querySelectorAll('.pg-calc__upload').forEach(area => {
        area.addEventListener('click', function() {
            const input = this.querySelector('.pg-calc__file-input');
            if (input) input.click();
        });
    });

    // ==========================================
    // 12. КНОПКА "ОФОРМИТЬ ЗАКАЗ"
    // ==========================================
    document.querySelectorAll('.pg-calc__order').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.order;
            let text = 'Заказ из калькулятора:\n\n';
            if (type === 'vis') {
                const size = getActivePill('visSize');
                const qty = getActivePill('visQty');
                const paper = getSelectVal('visPaper');
                const lam = getActivePill('visLam');
                const noDesign = getChecked('noDesign');
                const isOffset = parseInt(qty) >= 1000;
                const prod = getProduct(size);
                const title = prod ? prod.title : size;
                const extrasArr = [];
                if (isOffset) {
                    if (isCheckboxChecked('round')) extrasArr.push('Скругление углов');
                    if (isCheckboxChecked('hole')) extrasArr.push('Отверстие 5 мм');
                }
                text += `• Изделие: ${title}\n• Бумага: ${paper} г/м²\n• Печать: ${isOffset ? 'Офсетная' : 'Цифровая'}\n• Покрытие: ${P.lamNames[lam] || lam}\n• Тираж: ${qty} шт.\n• Стоимость: ${document.getElementById('visPrice')?.textContent || '—'}\n• ${document.getElementById('visDelivery')?.textContent || ''}`;
                if (extrasArr.length) text += `\n• Допы: ${extrasArr.join(', ')}`;
                if (noDesign) text += '\n• Требуется разработка макета: Да';
            } else {
                const fmt = getActivePill('listFormat');
                const qty = getActivePill('listQty');
                const paper = getSelectVal('listPaper');
                const noDesign = getChecked('noDesignList');
                const express = getChecked('listExpress');
                const isOffset = parseInt(qty) >= 500;
                const prod = getProduct(fmt);
                const title = prod ? prod.title : fmt;
                text += `• Изделие: ${title}\n• Бумага: ${paper} г/м²\n• Печать: ${isOffset ? 'Офсетная' : 'Цифровая'}\n• Тираж: ${qty} шт.\n• Стоимость: ${document.getElementById('listPrice')?.textContent || '—'}\n• ${document.getElementById('listDelivery')?.textContent || ''}`;
                if (express) text += '\n• Срочность: Да (+15%)';
                if (noDesign) text += '\n• Требуется разработка макета: Да';
            }
            const orderText = document.getElementById('calcOrderText');
            const orderForm = document.getElementById('calcOrderForm');
            if (orderText) orderText.value = text;
            if (orderForm) { orderForm.style.display = 'flex'; orderForm.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        });
    });

    // ==========================================
    // 13. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
    // ==========================================
    function initCalculator() {
        const initListFormat = getActivePill('listFormat') || 'flyer';
        rebuildListQtyButtons(initListFormat);
        handleCalendaric();
        updateExtrasState(parseInt(getActivePill('visQty')) || 0);
        calculatePrice();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalculator);
    } else {
        initCalculator();
    }
})();

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
