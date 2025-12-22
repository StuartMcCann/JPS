(function(){
    const startYear = 1886;
    const years = new Date().getFullYear() - startYear;
    const el = document.getElementById('years-in-business');
    if (el) {
      el.setAttribute('data-purecounter-end', String(years));
      el.textContent = String(years);
    }
  })();

(function(){
const startYear = 1965;
const years = new Date().getFullYear() - startYear;
const el = document.getElementById('years-in-horticulture');
if (el) {
    el.setAttribute('data-purecounter-end', String(years));
    el.textContent = String(years);
}
})();