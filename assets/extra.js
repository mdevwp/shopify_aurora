/*
function addRelAttr(){
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href]').forEach(function (link) {
        const url = new URL(link.href, window.location.origin);
        if (url.origin !== window.location.origin && !link.hasAttribute('rel')) {
            link.setAttribute('rel', 'nofollow');
            link.setAttribute('target', '_blank');
        }
    });
  });
}

addRelAttr();
*/
//setTimeout(addRelAttr, 2500);


$(document).ready(function() {
  var count = $('.intrada-wishlist--count').text().trim();
  $('.wishlist-count').text(count);
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
    if(button){
      button.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
    }
    

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
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