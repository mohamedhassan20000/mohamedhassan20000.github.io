window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip]').forEach(item => new bootstrap.Tooltip(item));

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("تم إضافة المنتج إلى عربة الشراء")
    });
});

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    });
});


//حساب إجمالي سعر المنتج
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$";

        calculateTotalPrice();
    });
});

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice();
    });
});

function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value
            const totalPriceForProduct = pricePerUnite * quantity 

            totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct
        });
        document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
}

//نهاية إجمالي سعر المنتج


//اختيار المدينة

const ciyiesByCountry = {
    sa: [ 'الرياض','جدة','مكة المكرمة','المدينة المنورة','الدمام','الخبر',
        'الظهران','الطائف','تبوك','بريدة','خميس مشيط','أبها','حائل','نجران',
        'الجبيل','ينبع','القطيف','الأحساء','عرعر','سكاكا','جازان','القنفذة',
        'بيشة','الرس','عنيزة'],

    eg: ['القاهرة','الجيزة','الإسكندرية','بورسعيد','السويس','دمياط','المنصورة',
        'الزقازيق','طنطا','دمنهور','بنها','شبين الكوم','كفر الشيخ','الفيوم',
        'بني سويف','المنيا','أسيوط','سوهاج','قنا','الأقصر','أسوان','الإسماعيلية',
        'العريش','مرسى مطروح','الغردقة','شرم الشيخ','الطور','الخارجة' ],

    jo: ['عمان','الزرقاء','إربد','العقبة','السلط','المفرق','مأدبا','الكرك',
        'جرش','عجلون','الطفيلة','معان','الرمثا'],

    sy: ['دمشق','حلب','حمص','حماة','اللاذقية','طرطوس','دير الزور','الرقة','الحسكة',
        'إدلب','السويداء','درعا','القامشلي','تدمر','جبلة','بانياس'],

    kw: ['مدينة الكويت','حولي','السالمية','الفروانية','الجهراء','الأحمدي',
        'مبارك الكبير','الفحيحيل','خيطان','الرميثية','بيان','المنقف',
        'صباح السالم','العارضية'],

    tr: ['إسطنبول','أنقرة','إزمير','بورصة','أنطاليا','أضنة','قونية','غازي عنتاب',
        'قيصري','مرسين','ديار بكر','سامسون','شانلي أورفا','إسكي شهير','طرابزون',
        'أرضروم','ملاطية','وان','صقاريا','قوجه إيلي','موغلا','دنيزلي','مرمريس',
        'بودروم','ألانيا']
};

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value

        const cities = ciyiesByCountry[country]

        document.querySelectorAll('#payment-cities option').forEach(option => option.remove())

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر مدينة')
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value', '')
        firstOption.setAttribute('disabled', 'true')
        firstOption.setAttribute('selected', 'true')

        const city_options = document.getElementById('paymentcities')
        city_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document
        })
    })
})


// copyright
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear()
// enf of copyright
