
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
