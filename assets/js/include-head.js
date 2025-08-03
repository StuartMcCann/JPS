document.addEventListener('DOMContentLoaded', function() {
    fetch('../../components/head.html')
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});