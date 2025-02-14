setTimeout(function() {
    if (window.location.search.includes('?filter')) {
        $('.classic-pagination__list').hide();
    } else {
        $('.classic-pagination__list').show();
    }
}, 500);