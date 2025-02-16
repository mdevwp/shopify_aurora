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


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".classic-pagination__link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = this.getAttribute("href");
    });
  });
});