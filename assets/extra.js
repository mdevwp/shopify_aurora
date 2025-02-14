function togglePagination() {
    if (window.location.search.includes('?filter')) {
        document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.classic-pagination__list').forEach(el => el.style.display = '');
    }
}

setTimeout(togglePagination, 500);

document.addEventListener('click', function(event) {
    if (event.target.matches('.shape-swatch, .checkbox__span')) {
        setTimeout(togglePagination, 500);
    }
});