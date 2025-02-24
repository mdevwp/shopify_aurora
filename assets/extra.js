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

function togglePagination() {
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
        document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = 'none');
      } 
  });
},1000);

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