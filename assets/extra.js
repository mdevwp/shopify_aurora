/*
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
*/

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        let button = event.target.closest("loo-prodpage-button[data-key='loo-wishlist']");
        if (button) {
            event.preventDefault();
            let container = button.closest(".loo-prodpage-buttons-container");
            if (container) {
                let variantID = document.querySelector("[name='id']").value;
                container.setAttribute("data-product-id", variantID);
                console.log("Wishlist updated with variant:", variantID);
                button.click();
            }
        }
    });
});