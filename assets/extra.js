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

(function() {
    let originalFetch = window.fetch;
    window.fetch = function(input, options) {
        if (typeof input === "string" && input.includes("wishlist.oldev.net/api/a") && options && options.body) {
            let data = JSON.parse(options.body);
            let variantID = document.querySelector("[name='id']")?.value;
            let variantImage = document.querySelector(".product__media img")?.src; 
            let currentURL = new URL(window.location.href);
            
            if (variantID && data.products) {
                let oldProductID = Object.keys(data.products)[0]; 
                let newURL = `${currentURL.pathname}?variant=${variantID}`;
                
                data.products = {
                    [variantID]: {
                        ...data.products[oldProductID], 
                        id: variantID,
                        url: newURL,
                        image: variantImage || data.products[oldProductID].image
                    }
                };

                options.body = JSON.stringify(data);
                console.log("Modified wishlist request:", data);
            }
        }
        return originalFetch.apply(this, arguments);
    };
})();
