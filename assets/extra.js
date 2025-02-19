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
    let container = document.querySelector(".loo-prodpage-buttons-container");
    if (container) {
        let variantID = document.querySelector("[name='id']")?.value;
        if (variantID) {
            container.setAttribute("data-product-id", variantID);
            console.log("Wishlist product ID updated on page load:", variantID);
        }
    }

    // Если пользователь меняет вариацию — обновляем ID снова
    document.body.addEventListener("change", function (event) {
        if (event.target.matches("[name='id']")) {
            let newVariantID = event.target.value;
            if (container) {
                container.setAttribute("data-product-id", newVariantID);
                console.log("Wishlist product ID updated on variant change:", newVariantID);
            }
        }
    });
});
