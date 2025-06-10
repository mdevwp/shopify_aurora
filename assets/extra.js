$(window).on('scroll resize', function () {
  
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 20) {
            $('.intrada-wishlist--trigger-icon').addClass('scrolled');
          
        }else{
            $('.intrada-wishlist--trigger-icon').removeClass('scrolled');
        }

        if (currentScroll > 200) {
            $('.product-form__mobile-sticky-button').addClass('is-visible');
        }else{
            $('.product-form__mobile-sticky-button').removeClass('is-visible');
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



document.addEventListener('DOMContentLoaded', () => {

  function disableSwatchNavigation(container = document) {
    const swatches = container.querySelectorAll('.color-swatch-select-parent');

    swatches.forEach(swatch => {
      if (swatch.dataset.swatchListenerAdded) return;
      swatch.dataset.swatchListenerAdded = 'true';

      swatch.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();

        // Удаляем выделение со всех соседних
        swatches.forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');

        // Проверяем input внутри (radio/hidden) и меняем его
        const input = swatch.querySelector('input[type="radio"], input[type="hidden"]');
        if (input) {
          input.checked = true;
          const evt = new Event('change', { bubbles: true });
          input.dispatchEvent(evt);
        }
      });
    });
  }

  // На загруженной странице
  disableSwatchNavigation();

  // Для содержимого quick-view/modal (если вставка происходит через Ajax)
  // Подстрой под свое событие открытия модалки
  document.addEventListener('shopify:modal:open', event => {
    disableSwatchNavigation(event.target);
  });

  // Или же под событие своего quick-view, если в теме он кастомный:
  document.addEventListener('quickview:loaded', event => {
    disableSwatchNavigation(event.detail.modal);
  });

  // Фолбэк: перехват кликов вообще на документе
  document.body.addEventListener('click', e => {
    if (e.target.closest('.color-swatch-select-parent')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
});


document.addEventListener("DOMContentLoaded", function () {
  const targetCount = document.querySelector('.wishlist-count');

  function updateCountIfAvailable() {
    const source = document.querySelector('.intrada-wishlist--count');
    if (source && targetCount) {
      const count = source.textContent.trim();
      targetCount.textContent = count;
    }
  }

  // Попробовать сразу, если элемент уже загружен
  updateCountIfAvailable();

  // Следим за <body> или другим контейнером, куда вставляется intrada-wishlist--count
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



/*
document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(event) {
        let button = event.target.closest(".basic-wishlist-button");
        if (button) {
            event.preventDefault(); 
            let variantID = document.querySelector('[name="id"]').value;
            let formData = new FormData();
            formData.append("product_id", variantID); 

            fetch("/apps/wishlist/add", {
                method: "POST",
                body: formData
            }).then(response => response.json())
              .then(data => console.log("Added to wishlist:", data))
              .catch(error => console.error("Wishlist error:", error));
        }
    });
});
*/