/* ============================================================
   ÇİÇEK OTOMOTİV — Main JavaScript (Redesign)
   ============================================================ */

const brandModels = {
    'Alfa Romeo':    ['Giulia','Giulietta','Stelvio','Tonale','156','159','Brera','Spider','Mito'],
    'Aston Martin':  ['DB11','DBS','DBX','Vantage'],
    'Audi':          ['A1','A3','A4','A5','A6','A7','A8','Q2','Q3','Q5','Q7','Q8','TT','R8','e-tron','RS3','RS4','RS6','S3','S4','S5'],
    'BMW':           ['1 Serisi','2 Serisi','3 Serisi','4 Serisi','5 Serisi','6 Serisi','7 Serisi','8 Serisi','X1','X2','X3','X4','X5','X6','X7','Z4','M2','M3','M4','M5','iX','i3','i4'],
    'Chevrolet':     ['Captiva','Cruze','Aveo','Malibu','Camaro','Corvette'],
    'Citroën':       ['C1','C3','C3 Aircross','C4','C4 X','C5 Aircross','C5 X','Berlingo','SpaceTourer','Jumper','Jumpy'],
    'Cupra':         ['Born','Formentor','Leon','Ateca'],
    'Dacia':         ['Sandero','Sandero Stepway','Logan','Duster','Jogger','Spring','Dokker'],
    'DS Automobiles':['DS 3','DS 4','DS 7','DS 9'],
    'Ferrari':       ['Roma','Portofino','F8','SF90','812','296 GTB'],
    'Fiat':          ['Panda','500','500X','500L','Tipo','Egea','Doblo','Ducato','Fiorino','Scudo'],
    'Ford':          ['Fiesta','Focus','Mondeo','Kuga','EcoSport','Puma','Mustang','Explorer','Ranger','Transit','Transit Connect','Tourneo'],
    'Honda':         ['Jazz','Civic','Accord','HR-V','CR-V','ZR-V','e','NSX'],
    'Hyundai':       ['i10','i20','i30','Elantra','Sonata','Tucson','Santa Fe','Kona','IONIQ','IONIQ 5','IONIQ 6','Nexo','ix35'],
    'Infiniti':      ['Q30','Q50','Q60','QX30','QX50','QX60'],
    'Jaguar':        ['E-Pace','F-Pace','I-Pace','F-Type','XE','XF','XJ'],
    'Jeep':          ['Renegade','Compass','Cherokee','Grand Cherokee','Wrangler','Gladiator','Avenger'],
    'Kia':           ['Picanto','Rio','Ceed','ProCeed','Stinger','Sportage','Sorento','Telluride','Niro','EV6','EV9'],
    'Lamborghini':   ['Huracan','Urus','Revuelto'],
    'Land Rover':    ['Defender','Discovery','Discovery Sport','Range Rover','Range Rover Sport','Range Rover Evoque','Range Rover Velar','Freelander'],
    'Lexus':         ['CT','UX','NX','RX','GX','LX','ES','IS','GS','LS','LC','RC'],
    'Maserati':      ['Ghibli','Quattroporte','Levante','Grecale','GranTurismo','MC20'],
    'Mazda':         ['Mazda2','Mazda3','Mazda6','CX-3','CX-30','CX-5','CX-60','MX-5','MX-30'],
    'Mercedes-Benz': ['A Serisi','B Serisi','C Serisi','E Serisi','S Serisi','CLA','CLE','CLS','GLA','GLB','GLC','GLE','GLS','EQA','EQB','EQC','EQE','EQS','AMG GT','Sprinter','Vito','Viano'],
    'Mini':          ['Hatch','Cabrio','Clubman','Countryman','Paceman','Coupe','Roadster','Cooper','Cooper S','John Cooper Works'],
    'Mitsubishi':    ['Space Star','Colt','Eclipse Cross','Outlander','L200','ASX','Pajero'],
    'Nissan':        ['Micra','Note','Juke','Qashqai','X-Trail','Leaf','Navara','NV200','NV400','Ariya','Townstar'],
    'Opel':          ['Corsa','Astra','Insignia','Mokka','Crossland','Grandland','Combo','Vivaro','Movano','Zafira'],
    'Peugeot':       ['108','208','308','508','2008','3008','5008','Partner','Expert','Boxer','e-208','e-2008'],
    'Porsche':       ['Cayenne','Macan','Panamera','911','Taycan','718 Cayman','718 Boxster','Cayenne E-Hybrid'],
    'Renault':       ['Twingo','Clio','Mégane','Talisman','Kadjar','Captur','Koleos','Zoe','Austral','Arkana','Trafic','Master'],
    'Rolls-Royce':   ['Phantom','Ghost','Wraith','Dawn','Cullinan','Spectre'],
    'Seat':          ['Ibiza','Leon','Ateca','Tarraco','Arona','Mii','Toledo'],
    'Skoda':         ['Fabia','Octavia','Superb','Karoq','Kodiaq','Kamiq','Scala','Enyaq','Enyaq Coupe'],
    'Subaru':        ['Impreza','Legacy','Forester','Outback','XV','BRZ','WRX'],
    'Suzuki':        ['Alto','Baleno','Swift','Vitara','S-Cross','Jimny','SX4','Ignis','Celerio'],
    'Tesla':         ['Model 3','Model Y','Model S','Model X','Cybertruck'],
    'Toyota':        ['Aygo','Aygo X','Yaris','Corolla','Camry','C-HR','RAV4','Land Cruiser','Land Cruiser Prado','Prius','Hilux','Proace','Proace City','bZ4X'],
    'Volkswagen':    ['Polo','Golf','Passat','Arteon','Tiguan','T-Roc','T-Cross','Touareg','ID.3','ID.4','ID.5','Caddy','Transporter','Crafter','Up!'],
    'Volvo':         ['S60','S90','V40','V60','V90','XC40','XC60','XC90','C40','EX30','EX90'],
    'Diğer':         []
};

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHamburger();
    initReveal();
    initStats();
    initDatePicker();
    initBrandModel();
    initYearSelect();
    initForm();
    initBackToTop();
    initSmoothNav();
    initScrollProgress();
    initCookieNotice();
    initFaq();
    initPromoBanner();
    initOpenStatus();
    initPhoneFormat();
    initGallery();
    initPlateSearch();
});

/* anim class renamed to new html */

/* ───── NAVBAR SCROLL ───── */
function initNavbar() {
    const header = document.getElementById('header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
}

/* ───── HAMBURGER ───── */
function initHamburger() {
    const btn = document.getElementById('burger');
    const nav = document.getElementById('navMenu');
    btn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btn.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            btn.classList.remove('open');
        });
    });
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('open');
            btn.classList.remove('open');
        }
    });
}

/* ───── REVEAL ON SCROLL ───── */
function initReveal() {
    const els = document.querySelectorAll('.anim-up, .anim-right');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    els.forEach(el => io.observe(el));
}

/* ───── STATS COUNTER ───── */
function initStats() {
    const nums = document.querySelectorAll('.stat-n, .hsc-num');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { animateNum(e.target); io.unobserve(e.target); }
        });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
}
function animateNum(el) {
    const target = parseInt(el.dataset.target, 10);
    const dur = 1600;
    const inc = target / (dur / 16);
    let cur = 0;
    const t = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.textContent = Math.floor(cur).toLocaleString('tr-TR');
        if (cur >= target) clearInterval(t);
    }, 16);
}

/* ───── DATE PICKER ───── */
function initDatePicker() {
    const d = document.getElementById('aptDate');
    if (!d) return;
    const pad = n => String(n).padStart(2, '0');
    const fmt = dt => `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`;
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
    d.min = fmt(tomorrow);
    const max = new Date(); max.setDate(max.getDate() + 90);
    d.max = fmt(max);
    d.addEventListener('change', () => {
        const chosen = new Date(d.value + 'T00:00:00');
        if (chosen.getDay() === 0) {
            setFieldError(d, 'Pazar günleri kapalıyız, lütfen farklı bir gün seçiniz.');
            d.value = '';
        } else {
            clearFieldError(d);
        }
    });
}

/* ───── BRAND → MODEL DYNAMIC SELECT ───── */
function initBrandModel() {
    const brandSel = document.getElementById('carBrand');
    const modelSel = document.getElementById('carModel');
    if (!brandSel || !modelSel) return;

    brandSel.addEventListener('change', () => {
        const brand = brandSel.value;
        const models = brandModels[brand] || [];
        modelSel.innerHTML = '';
        if (models.length === 0) {
            modelSel.innerHTML = '<option value="" disabled selected>Model giriniz</option>';
            modelSel.disabled = true;
            // Switch to text input
            const textInput = document.createElement('input');
            textInput.type = 'text';
            textInput.id = 'carModel';
            textInput.name = 'carModel';
            textInput.placeholder = 'Araç modelini yazınız…';
            textInput.required = true;
            modelSel.replaceWith(textInput);
            return;
        }
        // Ensure we have a select (in case it was replaced with input)
        if (modelSel.tagName !== 'SELECT') {
            const newSel = document.createElement('select');
            newSel.id = 'carModel';
            newSel.name = 'carModel';
            newSel.required = true;
            modelSel.replaceWith(newSel);
        }
        const sel = document.getElementById('carModel');
        sel.disabled = false;
        sel.innerHTML = '<option value="" disabled selected>Model seçiniz</option>';
        models.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m; opt.textContent = m;
            sel.appendChild(opt);
        });
        const other = document.createElement('option');
        other.value = 'Diğer'; other.textContent = 'Diğer';
        sel.appendChild(other);
        clearFieldError(sel);
    });
}

/* ───── YEAR SELECT ───── */
function initYearSelect() {
    const sel = document.getElementById('carYear');
    if (!sel) return;
    const cur = new Date().getFullYear();
    for (let y = cur; y >= 1990; y--) {
        const opt = document.createElement('option');
        opt.value = y; opt.textContent = y;
        sel.appendChild(opt);
    }
}

/* ───── WIZARD FORM ───── */
let _currentStep = 1;

function initForm() {
    const form = document.getElementById('aptForm');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeModal');
    if (!form) return;

    // Time slot selection
    document.querySelectorAll('.time-slot').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.time-slot').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('aptTime').value = btn.dataset.time;
            document.getElementById('timeErr')?.style.setProperty('display', 'none');
        });
    });

    // Step navigation – Next
    document.querySelectorAll('.step-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = parseInt(btn.dataset.next);
            if (validateStep(_currentStep)) goToStep(next);
        });
    });

    // Step navigation – Back
    document.querySelectorAll('.step-back').forEach(btn => {
        btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.back)));
    });

    // Submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (validateStep(4)) openModal(form, modal);
    });

    closeBtn.addEventListener('click', () => {
        closeModal(modal); form.reset(); resetModelSelect();
        document.querySelectorAll('.time-slot').forEach(b => b.classList.remove('selected'));
        goToStep(1);
    });
    modal.addEventListener('click', e => { if (e.target === modal) { closeModal(modal); goToStep(1); }});
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(modal); });
}

function goToStep(n) {
    const steps = document.querySelectorAll('.form-step');
    const wpSteps = document.querySelectorAll('.wp-step');
    const wpLines = document.querySelectorAll('.wp-line');

    steps.forEach(s => s.classList.remove('active'));
    document.getElementById('step' + n)?.classList.add('active');

    wpSteps.forEach((s, i) => {
        s.classList.remove('active', 'done');
        if (i + 1 < n) s.classList.add('done');
        if (i + 1 === n) s.classList.add('active');
    });
    wpLines.forEach((l, i) => {
        l.classList.toggle('done', i + 1 < n);
    });

    if (n === 4) updateStepSummary();
    _currentStep = n;
    document.getElementById('randevu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateStepSummary() {
    const form = document.getElementById('aptForm');
    const g = id => { const el = form?.querySelector('#'+id); return el ? el.value : ''; };
    const gl = id => { const el = form?.querySelector('#'+id); if (!el) return ''; return el.tagName === 'SELECT' ? (el.options[el.selectedIndex]?.text || el.value) : el.value; };
    const checked = form?.querySelector('input[name="serviceType"]:checked');
    const svc = checked ? checked.value : '';

    const s = document.getElementById('stepSummary');
    if (!s) return;
    s.innerHTML = `
        <div class="ss-row"><span class="ss-lbl">Hizmet</span><span class="ss-val">${svc || '—'}</span></div>
        <div class="ss-row"><span class="ss-lbl">Araç</span><span class="ss-val">${gl('carBrand')} ${gl('carModel')}</span></div>
        <div class="ss-row"><span class="ss-lbl">Tarih</span><span class="ss-val">${fmtDate(g('aptDate'))}</span></div>
        <div class="ss-row"><span class="ss-lbl">Saat</span><span class="ss-val">${g('aptTime') || '—'}</span></div>
        ${g('carPlate') ? `<div class="ss-row"><span class="ss-lbl">Plaka</span><span class="ss-val">${g('carPlate').toUpperCase()}</span></div>` : ''}
    `;
}

function validateStep(step) {
    if (step === 1) {
        const checked = document.querySelector('input[name="serviceType"]:checked');
        const err = document.getElementById('serviceErr');
        if (!checked) { if (err) err.style.display = 'block'; return false; }
        if (err) err.style.display = 'none';
        return true;
    }
    if (step === 2) {
        let ok = true;
        ['carBrand','carModel'].forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.value.trim()) { setFieldError(el, null); ok = false; }
            else if (el) clearFieldError(el);
        });
        return ok;
    }
    if (step === 3) {
        const date = document.getElementById('aptDate');
        const time = document.getElementById('aptTime');
        const timeErr = document.getElementById('timeErr');
        let ok = true;
        if (date && !date.value) { setFieldError(date, null); ok = false; } else if (date) clearFieldError(date);
        if (!time?.value) { if (timeErr) timeErr.style.display = 'block'; ok = false; }
        return ok;
    }
    if (step === 4) {
        let ok = true;
        ['fullName','phone','kvkk'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const empty = el.type === 'checkbox' ? !el.checked : !el.value.trim();
            if (empty) { setFieldError(el, null); ok = false; }
            else clearFieldError(el);
        });
        const ph = document.getElementById('phone');
        if (ph && ph.value.trim() && ph.value.replace(/\D/g,'').length < 10) {
            setFieldError(ph, 'Geçerli telefon giriniz.'); ok = false;
        }
        return ok;
    }
    return true;
}

function setFieldError(field, msg) {
    const fg = field.closest('.fg');
    if (fg) {
        fg.classList.add('has-error');
        if (msg) { const ferr = fg.querySelector('.ferr'); if (ferr) ferr.textContent = msg; }
    }
    field.classList.add('error');
}
function clearFieldError(field) {
    const fg = field.closest('.fg');
    if (fg) fg.classList.remove('has-error');
    field.classList.remove('error');
}

function openModal(form, modal) {
    const g  = id => { const el = form.querySelector('#'+id); return el ? el.value : ''; };
    const gl = id => { const el = form.querySelector('#'+id); if (!el) return ''; return el.tagName === 'SELECT' ? (el.options[el.selectedIndex]?.text || el.value) : el.value; };
    const checkedSvc = form.querySelector('input[name="serviceType"]:checked');
    const svcVal = checkedSvc ? checkedSvc.value : '';

    const plateVal = g('carPlate');
    const info = document.getElementById('modalInfo');
    if (info) {
        info.innerHTML = [
            row('Ad Soyad', g('fullName')),
            row('Telefon', g('phone')),
            row('Araç', `${gl('carBrand')} ${gl('carModel')} ${g('carYear') ? '('+g('carYear')+')' : ''}`),
            plateVal ? row('Plaka', plateVal.toUpperCase()) : '',
            row('Hizmet', svcVal),
            row('Tarih / Saat', `${fmtDate(g('aptDate'))} — ${g('aptTime')}`),
        ].filter(Boolean).join('');
    }

    const aptRecord = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), name: g('fullName'), phone: g('phone'), brand: gl('carBrand'), model: gl('carModel'), year: g('carYear'), plate: plateVal, service: svcVal, date: g('aptDate'), time: g('aptTime'), email: g('email'), description: g('description'), savedAt: new Date().toISOString() };
    saveAppointment(aptRecord);
    _printData = aptRecord;

    // WhatsApp butonu
    const waBtn = document.getElementById('modalWaBtn');
    if (waBtn) {
        const msg = `Merhaba, randevu talebim:\nAd: ${aptRecord.name}\nAraç: ${aptRecord.brand} ${aptRecord.model}\nHizmet: ${aptRecord.service}\nTarih: ${aptRecord.date} ${aptRecord.time}\nTelefon: ${aptRecord.phone}`;
        waBtn.href = `https://wa.me/902125491763?text=${encodeURIComponent(msg)}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}
function row(label, val) {
    return `<div class="mrow"><strong>${label}</strong><span>${val || '—'}</span></div>`;
}
function fmtDate(s) {
    if (!s) return '';
    const [y, m, d] = s.split('-');
    const months = ['','Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    return `${parseInt(d)} ${months[parseInt(m)]} ${y}`;
}
function saveAppointment(data) {
    try {
        const list = JSON.parse(localStorage.getItem('cicekOtoApts') || '[]');
        list.push(data);
        localStorage.setItem('cicekOtoApts', JSON.stringify(list));
    } catch(_) {}
}
function resetModelSelect() {
    const existing = document.getElementById('carModel');
    if (existing && existing.tagName === 'INPUT') {
        const sel = document.createElement('select');
        sel.id = 'carModel'; sel.name = 'carModel'; sel.required = true; sel.disabled = true;
        sel.innerHTML = '<option value="" disabled selected>Önce marka seçiniz</option>';
        existing.replaceWith(sel);
    } else if (existing) {
        existing.innerHTML = '<option value="" disabled selected>Önce marka seçiniz</option>';
        existing.disabled = true;
    }
}

/* ───── BACK TO TOP ───── */
function initBackToTop() {
    const btn = document.getElementById('goTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ───── ACTIVE NAV ON SCROLL ───── */
function initSmoothNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => io.observe(s));
}

/* ───── SCROLL PROGRESS ───── */
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (window.scrollY / total * 100) + '%';
    }, { passive: true });
}

/* ───── COOKIE NOTICE ───── */
function initCookieNotice() {
    if (localStorage.getItem('cookieOk')) return;
    const notice = document.getElementById('cookieNotice');
    if (!notice) return;
    setTimeout(() => notice.classList.add('show'), 1200);
    document.getElementById('cookieOk').addEventListener('click', () => {
        notice.classList.remove('show');
        localStorage.setItem('cookieOk', '1');
    });
}

/* ───── SSS ACCORDION ───── */
function initFaq() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

/* ───── PROMO BANNER ───── */
function initPromoBanner() {
    if (localStorage.getItem('promoDismissed')) {
        document.getElementById('promoBanner')?.classList.add('hidden');
        return;
    }
    document.getElementById('promoDismiss')?.addEventListener('click', () => {
        document.getElementById('promoBanner').classList.add('hidden');
        localStorage.setItem('promoDismissed', '1');
    });
}

/* ───── OPEN/CLOSED STATUS ───── */
function initOpenStatus() {
    const el = document.getElementById('tbStatus');
    if (!el) return;
    const now = new Date();
    const day = now.getDay(); // 0=sun, 6=sat
    const h = now.getHours() * 60 + now.getMinutes();
    const open = day >= 1 && day <= 6 && h >= 9*60 && h < 19*60;
    if (open) {
        el.textContent = '● Şu an açık';
        el.className = 'tb-status open';
    } else {
        const nextOpen = day === 0 ? 'Pazartesi 09:00' : day === 6 && h >= 19*60 ? 'Pazartesi 09:00' : '09:00';
        el.textContent = '● Kapalı · ' + nextOpen + "'da açılıyor";
        el.className = 'tb-status closed';
    }
}

/* ───── PHONE FORMAT ───── */
function initPhoneFormat() {
    const input = document.getElementById('phone');
    if (!input) return;
    input.addEventListener('input', () => {
        let v = input.value.replace(/\D/g, '').slice(0, 11);
        if (v.length <= 4) input.value = v;
        else if (v.length <= 7) input.value = v.slice(0,4) + ' ' + v.slice(4);
        else if (v.length <= 9) input.value = v.slice(0,4) + ' ' + v.slice(4,7) + ' ' + v.slice(7);
        else input.value = v.slice(0,4) + ' ' + v.slice(4,7) + ' ' + v.slice(7,9) + ' ' + v.slice(9);
    });
}

/* ───── HİZMET DETAY MODAL ───── */
const svcData = {
    periodik: {
        icon: 'fas fa-oil-can',
        title: 'Periyodik Bakım',
        label: 'Bakım & Servis',
        desc: 'Aracınızın uzun ömürlü ve güvenli kalması için fabrika reçetesine uygun periyodik bakım hizmeti sunuyoruz. Belirlenen kilometre aralıklarında tüm kontroller eksiksiz yapılır.',
        items: ['Motor yağı ve filtre değişimi','Hava, yakıt ve kabinfiltresi kontrolü','Fren ve debriyaj sistemi muayenesi','Tüm sıvı seviyeleri kontrolü ve tamamlama','Lastik basıncı ve yüzey kontrolü','Akü ve şarj sistemi testi','Arıza kodu taraması (OBD)'],
        sure: '2–4 saat',
        garanti: '1 yıl / 20.000 km'
    },
    motor: {
        icon: 'fas fa-cog',
        title: 'Motor Tamiri',
        label: 'Motor & Revizyon',
        desc: 'Timing hasarından komple motor revizyonuna kadar tüm motor işlemlerini sertifikalı teknisyenlerimizle gerçekleştiriyoruz. Orijinal veya OEM parça garantisi.',
        items: ['Timing kayışı / zinciri değişimi','Silindir kapağı contası onarımı','Komple motor revizyonu','Turbo onarım ve değişimi','Enjektör temizliği ve kalibrasyonu','Motor yıkama ve temizleme'],
        sure: '1–3 gün',
        garanti: '2 yıl / 40.000 km'
    },
    dsg: {
        icon: 'fas fa-gears',
        title: 'DSG Şanzıman',
        label: 'Uzman Servis',
        desc: 'VW Grup DSG ve çift kavramalı şanzıman sistemlerinde İstanbul\'un en deneyimli servisi. 15 yıllık DSG uzmanlığımızla aracınızı güvenle emanet edebilirsiniz.',
        items: ['DSG 6 ve 7 vitesli sistemler','Kavrama seti değişimi (kuru/ıslak)','Şanzıman yağı ve filtre değişimi','Vites kutusu arıza tespiti','Mechatronik ünitesi onarımı','DSG adaptasyon ve yazılım güncelleme'],
        sure: '1–2 gün',
        garanti: '2 yıl / 40.000 km'
    },
    fren: {
        icon: 'fas fa-circle-dot',
        title: 'Fren Sistemi',
        label: 'Fren & Güvenlik',
        desc: 'Güvenliğinizin birinci sıradaki parçası olan fren sistemini sadece OEM kalitede yedek parçayla onarıyoruz.',
        items: ['Balata ve disk değişimi','Kaliper onarım ve revizyonu','ABS ve ESP sistem kontrolü','Fren hidrolik hattı servisi','El freni ayarı ve onarımı','Fren sıvısı değişimi'],
        sure: '2–4 saat',
        garanti: '1 yıl / 20.000 km'
    },
    klima: {
        icon: 'fas fa-snowflake',
        title: 'Klima Bakımı',
        label: 'İklimlendirme',
        desc: 'Klimanızın soğutma performansını ve kabin havasını en üst düzeyde tutmak için kapsamlı klima bakım ve onarım hizmeti.',
        items: ['Gaz dolumu (R134a / R1234yf)','Kompresör onarım ve değişimi','Kondenser ve evaporatör temizliği','Kabin filtresi değişimi','Kaçak tespiti ve onarımı','Sistem performans testi'],
        sure: '2–5 saat',
        garanti: '1 yıl'
    },
    elektrik: {
        icon: 'fas fa-bolt',
        title: 'Elektrik & Elektronik',
        label: 'Elektronik Servis',
        desc: 'Modern araçların karmaşık elektrik ve elektronik sistemlerinde güncel teşhis ekipmanlarıyla doğru arıza tespiti ve onarım.',
        items: ['OBD arıza kodu okuma ve sıfırlama','ECU / BCM programlama','Kablo devre tespiti','Akü, alternatör ve marş onarımı','Aydınlatma ve sinyal sistemleri','Araç içi komfort elektroniği'],
        sure: '1–2 gün',
        garanti: '1 yıl'
    },
    suspansiyon: {
        icon: 'fas fa-car-on',
        title: 'Amortisör & Süspansiyon',
        label: 'Sürüş Konforu',
        desc: 'Sürüş güvenliği ve konforunuzu doğrudan etkileyen süspansiyon sisteminde kapsamlı onarım ve revizyon hizmeti.',
        items: ['Amortisör değişimi ve testi','Rotil, rot kolu onarımı','Salıncak ve burç değişimi','Rot balans ayarı','Direksiyon kutusu servisi','4 lastik balans kontrolü'],
        sure: '1–3 saat',
        garanti: '1 yıl / 20.000 km'
    },
    pdr: {
        icon: 'fas fa-hammer',
        title: 'Boyasız Göçük (PDR)',
        label: 'Özel Teknik',
        desc: 'Dolu hasarı, park kazaları ve küçük ezikleri boyaya dokunmadan düzelten PDR (Paintless Dent Repair) teknolojisi.',
        items: ['Dolu hasarı onarımı','Park kazası ezik düzeltme','Kapı kenarı çukuru onarımı','Yüzey bozulması olmadan orijinal boya korunur','Sigorta hasar raporu desteği','Aracın değeri ve garantisi korunur'],
        sure: '1–4 saat',
        garanti: 'Ömür boyu garanti'
    },
    kaporta: {
        icon: 'fas fa-paint-roller',
        title: 'Kaporta & Boya',
        label: 'Karoseri',
        desc: 'Kaza sonrası kaporta düzeltmeden profesyonel araç boyama ve spot boya işlemlerine kadar tam karoseri servisi.',
        items: ['Hasar tespiti ve kaporta düzeltme','Spot boya (renk uyumu garantili)','Tam araç yeniden boyama','Plastik tampon onarım ve boyama','Antipas ve gövde koruma','Cam değişimi ve yapıştırma'],
        sure: '1–5 gün',
        garanti: '2 yıl'
    }
};

function openSvcModal(key) {
    const d = svcData[key];
    if (!d) return;
    document.getElementById('svcModalContent').innerHTML = `
        <div class="svc-modal-header">
            <div class="svc-modal-icon"><i class="${d.icon}"></i></div>
            <div>
                <div class="sec-label">${d.label}</div>
                <h3>${d.title}</h3>
            </div>
        </div>
        <p class="svc-modal-desc">${d.desc}</p>
        <ul class="svc-modal-list">${d.items.map(i=>`<li><i class="fas fa-check"></i><span>${i}</span></li>`).join('')}</ul>
        <div class="svc-modal-meta">
            <div class="svc-meta-item"><div class="sml">Süre</div><div class="val">${d.sure}</div></div>
            <div class="svc-meta-item"><div class="sml">Garanti</div><div class="val">${d.garanti}</div></div>
            <div class="svc-meta-item"><div class="sml">Parça</div><div class="val">OEM / Orijinal</div></div>
        </div>
    `;
    document.getElementById('svcModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeSvcModal() {
    document.getElementById('svcModal').classList.remove('open');
    document.body.style.overflow = '';
}
document.getElementById('svcModal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('svcModal')) closeSvcModal();
});

/* ───── YAZDIRMA ───── */
let _printData = null;
function printAppointment() {
    if (!_printData) return;
    const d = _printData;
    const printDiv = document.createElement('div');
    printDiv.className = 'print-area';
    printDiv.innerHTML = `
        <div class="print-logo">ÇİÇEK OTOMOTİV — Randevu Belgesi</div>
        <h2>Randevu Özeti</h2>
        <p>Aşağıdaki bilgilerle randevu talebiniz alınmıştır.</p>
        <table>
            <tr><td>Ad Soyad</td><td>${d.name}</td></tr>
            <tr><td>Telefon</td><td>${d.phone}</td></tr>
            ${d.email ? `<tr><td>E-posta</td><td>${d.email}</td></tr>` : ''}
            <tr><td>Araç</td><td>${d.brand} ${d.model}${d.year ? ' (' + d.year + ')' : ''}</td></tr>
            ${d.plate ? `<tr><td>Plaka</td><td>${d.plate.toUpperCase()}</td></tr>` : ''}
            <tr><td>Hizmet</td><td>${d.service}</td></tr>
            <tr><td>Tarih / Saat</td><td>${d.date} — ${d.time}</td></tr>
        </table>
        <div class="print-footer">
            Çiçek Otomotiv · 0212 549 17 63 · Bağcılar-Güngören Sanayi Sitesi, Başakşehir / İstanbul<br>
            Bu belge ${new Date().toLocaleString('tr-TR')} tarihinde oluşturulmuştur.
        </div>
    `;
    document.body.appendChild(printDiv);
    window.print();
    document.body.removeChild(printDiv);
}

/* ───── GALERİ FİLTRE ───── */
function initGallery() {
    const btns = document.querySelectorAll('.gf-btn');
    const items = document.querySelectorAll('.gallery-item');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.cat;
            items.forEach(item => {
                const show = cat === 'all' || item.dataset.cat === cat;
                item.style.display = show ? '' : 'none';
                if (show) item.classList.add('in');
            });
        });
    });
}

/* ───── PLAKA SORGULAMA ───── */
function initPlateSearch() {
    const btn = document.getElementById('plateSearchBtn');
    const input = document.getElementById('plateQuery');
    if (!btn || !input) return;

    input.addEventListener('input', () => {
        let v = input.value.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
        input.value = v;
    });

    btn.addEventListener('click', searchByPlate);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') searchByPlate(); });
}

function searchByPlate() {
    const input = document.getElementById('plateQuery');
    const results = document.getElementById('plateResults');
    const q = input.value.trim().toUpperCase().replace(/\s/g, '');
    if (!q) { results.innerHTML = '<div class="pr-empty"><i class="fas fa-circle-info"></i> Plaka giriniz.</div>'; return; }

    try {
        const apts = JSON.parse(localStorage.getItem('cicekOtoApts') || '[]');
        const found = apts.filter(a => a.plate && a.plate.toUpperCase().replace(/\s/g, '') === q);

        if (!found.length) {
            results.innerHTML = `<div class="pr-empty"><i class="fas fa-circle-xmark"></i> <strong>${input.value.trim().toUpperCase()}</strong> plakası için kayıt bulunamadı.<br><small>Daha fazla bilgi için bizi arayabilirsiniz.</small></div>`;
            return;
        }

        results.innerHTML = `
            <div class="pr-header"><i class="fas fa-check-circle"></i> ${found.length} servis kaydı bulundu</div>
            ${found.sort((a,b) => b.savedAt?.localeCompare(a.savedAt||'')||0).map(a => `
            <div class="pr-card">
                <div class="prc-top">
                    <span class="prc-svc">${a.service || '—'}</span>
                    <span class="prc-date">${fmtDate(a.date)} ${a.time || ''}</span>
                </div>
                <div class="prc-bot">
                    <span><i class="fas fa-car"></i> ${a.brand || ''} ${a.model || ''} ${a.year ? '('+a.year+')' : ''}</span>
                </div>
            </div>`).join('')}
        `;
    } catch {
        results.innerHTML = '<div class="pr-empty">Sorgulama sırasında bir hata oluştu.</div>';
    }
}
