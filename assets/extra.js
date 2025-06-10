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


/******************/

document.addEventListener('shopify:modal:open', (event) => {
  const modal = event.target;

  modal.querySelectorAll('[data-product-url]').forEach(el => {
    el.addEventListener('click', (e) => {
      const url = el.dataset.productUrl;
      if (!url) return;

      const isQuickView = modal.matches('.shopify-modal, .quick-view-modal');
      if (isQuickView) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.warn('🛑 Блокировка перехода по data-product-url в Quick View:', url);
      }
    }, true); // useCapture = true, чтобы перехватить ДО других скриптов
  });
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