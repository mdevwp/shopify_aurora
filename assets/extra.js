
$(document).ready(function(){
    console.log('test');

  function wishlist_count(){
      var count = $('.intrada-wishlist--count').not('.top').text();
      $('.top.intrada-wishlist--count').text(count); 
  }
 setTimeout(wishlist_count,2000);

  $('.intrada-wishlist-block-btn').click(function(){
    setTimeout(wishlist_count,2000);
    console.log( 'test' );
  });

});

$(window).on('scroll resize', function () {
  
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 20) {
        $('.intrada-wishlist--trigger-icon').addClass('scrolled');
      
    }else{
        $('.intrada-wishlist--trigger-icon').removeClass('scrolled');
    }

    if (currentScroll > 200) {
        //$('.product-form__mobile-sticky-button').addClass('is-visible');
    }else{
        //$('.product-form__mobile-sticky-button').removeClass('is-visible');
    }


    if ($(window).width() > 991) {
        
        var $product__info = $('.product__info-wrapper');

        if (currentScroll > 550) {
            $product__info.addClass('fixed');
        } else {
           
            $product__info.removeClass('fixed');
        }
    }

});


/******************/


document.addEventListener("DOMContentLoaded", function () {
  const targetCount = document.querySelector('.wishlist-count');

  function updateCountIfAvailable() {
    const source = document.querySelector('.intrada-wishlist--count');
    if (source && targetCount) {
      const count = source.textContent.trim();
      targetCount.textContent = count;
    }
  }

  updateCountIfAvailable();

  const observer = new MutationObserver(() => {
    updateCountIfAvailable();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});


function togglePagination() {

    //document.querySelectorAll('.art_dir').forEach(el => el.style.display = 'block');
  
    if (window.location.search.includes('?filter')) {
        document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = '');
    }
}

setTimeout(togglePagination, 500);

setTimeout(function(){
  
  document.addEventListener('click', function(event) {
     if (event.target.matches('shape-swatch, .checkbox__span')) {
       setTimeout(function(){
         if(window.location.href.includes('?filter')){
           document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = 'none');
         }
       }, 500)     
      } 
  });
},1000);

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".content-menu");
    const button = document.querySelector(".menu-button");

    if (menu && button) {
        button.addEventListener("click", function () {
            menu.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {

            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.classList.remove("active");
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const priceEl = document.querySelector('.product-price');
    const btnsContainer = document.querySelector('.product-form__btns');

    if (priceEl && btnsContainer) {
      const priceClone = priceEl.cloneNode(true);
      priceClone.classList.add('mobile');
      btnsContainer.insertBefore(priceClone, btnsContainer.firstChild);
    }
});

  document.addEventListener('DOMContentLoaded', () => {
    // 1) Прячем попап за пределы экрана через CSS
    const style = document.createElement('style');
    style.textContent = `
      [data-intrada-wishlist-add-item-popup] {
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // 2) Ловим любой клик по кнопке добавления в вишлист
    document.addEventListener('click', event => {
      const btn = event.target.closest('button[data-intrada-wishlist-button]');
      if (!btn) return;

      // Ждём, пока плагин действительно «откроет» попап (aria-expanded сменится на "true")
      // таймаут лучше сделать чуть больше нитрокода, но не слишком большой
      setTimeout(() => {
        const popup = document.querySelector('[data-intrada-wishlist-add-item-popup]');
        if (!popup) return;
        if (popup.getAttribute('aria-expanded') !== 'true') return;

        // 3) Автоклик на первый <li> (ваш «Favorit»)
        const firstListItem = popup.querySelector('.intrada-wishlist--add-item-popup-lists ul li');
        if (firstListItem) firstListItem.click();

        // 4) Разблокируем и жмём «Add to List»
        const addBtn = popup.querySelector('button[type="submit"]');
        if (addBtn) {
          addBtn.disabled = false;
          addBtn.click();
        }
      }, 200);
    });
  });

(function(){
    var m = location.pathname.match(/\/collections\/([^\/?#]+)/);
    if (!m) return;
    var handle = m[1];

    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a[href*="/products/"]');
      if (!a) return;
      try { sessionStorage.setItem('originCollectionHandle', handle); } catch(e){}
    }, true);
})();

  (function () {
  "use strict";

  const rules = [
    {
      selector: '.intrada-wishlist--popup-buttons .intrada-wishlist-block-btn.intrada-wishlist-block-btn--outline',
      text: 'Schließen'
    },
    {
      selector: 'p.intrada-wishlist--empty',
      text: 'Deine Wunschliste ist leer'
    },
    
    {
      selector: '.intrada-wishlist--floating-button .intrada-wishlist--button--when-added',
      text: 'Deine Favoriten'
    },
    {
      selector: '.intrada-wishlist--floating-button .intrada-wishlist--button--when-not-added',
      text: 'Zur Wunschliste hinzufügen'
    },
    {
      // Кнопка "Удалить всё" в попапе (первый элемент)
      selector: '.intrada-wishlist--popup-actions li:first-child button span',
      text: 'Alles entfernen'
    },
    {
      // Кнопка "Поделиться" (последний элемент)
      selector: '.intrada-wishlist--popup-actions li:last-child button span',
      text: 'Teilen'
    }
  ];

  function setTextSmart(el, text) {
    // если уже заменяли/совпадает — выходим
    if (el.dataset.i18nDone === '1') return;
    const current = (el.textContent || '').trim();
    if (current === text) { el.dataset.i18nDone = '1'; return; }

    // Если целевой элемент — button, стараемся не сломать иконки
    let target = el;
    const isButton = el.tagName === 'BUTTON';
    if (isButton) {
      // ищем подходящий контейнер текста внутри кнопки
      target = el.querySelector('span, .text, .label') || el;
    }

    target.textContent = text;

    // ARIA/tooltip — полезно для доступности и некоторых тем
    const btn = isButton ? el : el.closest('button');
    if (btn) {
      btn.setAttribute('aria-label', text);
      btn.setAttribute('title', text);
    }

    el.dataset.i18nDone = '1';
  }

  function applyAll(root = document) {
    rules.forEach(({ selector, text }) => {
      root.querySelectorAll(selector).forEach((el) => setTextSmart(el, text));
    });
  }

  applyAll();

  document.addEventListener('DOMContentLoaded', () => applyAll());

  const obs = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'childList') {
        m.addedNodes.forEach((n) => {
          if (n && n.nodeType === 1) applyAll(n);
        });
      } else if (m.type === 'attributes' && m.target && m.target.nodeType === 1) {
        applyAll(m.target);
      }
    }
  });

  obs.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true
  });
})();

//Оновлення варіації
(function () { const notify = () => window.dispatchEvent(new Event('shopify:url-changed')); ['pushState','replaceState'].forEach((m) => { const orig = history[m]; history[m] = function () { const r = orig.apply(this, arguments); notify(); return r; }; }); window.addEventListener('popstate', notify); })();

(function () {
  const productJsonEl = document.querySelector('[type="application/json"][data-product]');
  if (!productJsonEl) return;
  const product = JSON.parse(productJsonEl.textContent);
  const form = document.querySelector('form[action^="/cart/add"]');

  function findVariantById(id){ id=String(id); return product.variants.find(v=>String(v.id)===id)||null; }

  function syncFormToVariant(variant){
    if (!variant || !form) return;
    (variant.options||[]).forEach((val, i) => {
      const optName = `options[${product.options[i]}]`;
      const radio = form.querySelector(`input[type="radio"][name="${CSS.escape(optName)}"][value="${CSS.escape(val)}"]`);
      if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change',{bubbles:true})); return; }
      const select = form.querySelector(`select[name="${CSS.escape(optName)}"]`);
      if (select) { select.value = val; select.dispatchEvent(new Event('change',{bubbles:true})); }
    });

    document.querySelector('variant-selects')?.dispatchEvent(new Event('change', {bubbles:true}));
  }

  function updateGallery(variant){
    if (!variant || !variant.featured_media) return;
    const id = String(variant.featured_media.id);
    const btn = document.querySelector(`[data-media-id="${CSS.escape(id)}"]`);
    if (btn) { btn.click(); return; }
    const slide = document.querySelector(`[data-media-id="${CSS.escape(id)}"], [data-gallery-media-id="${CSS.escape(id)}"]`);
    slide?.scrollIntoView?.({block:'nearest', inline:'center'});
  }

  function applyVariantFromUrl(){
    const v = new URLSearchParams(location.search).get('variant');
    if (!v) return;
    const variant = findVariantById(v);
    if (!variant) return;
    syncFormToVariant(variant);
    updateGallery(variant);
  }

  document.addEventListener('DOMContentLoaded', applyVariantFromUrl);
  window.addEventListener('shopify:url-changed', applyVariantFromUrl);
})();
