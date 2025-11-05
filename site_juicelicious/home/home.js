// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    // Toggle menu mobile
    mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Funcionalidade básica de busca (exemplo simples)
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando por: ${query}`); // Substitua por lógica real de busca
        } else {
            alert('Digite algo para buscar.');
        }
    });
});