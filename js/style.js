// yüklenme animasyonu
AOS.init();

// mobil menü ikonu
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const icon = this.querySelector('i');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    
    if (expanded) {
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-dash');
    } else {
        icon.classList.remove('bi-dash');
        icon.classList.add('bi-plus');
    }
});

// başlık değişimi
(function () {
    let origTitle = document.title;

    window.addEventListener("blur", () => {
        document.title = "Where are you going? 🥺";
    });

    window.addEventListener("focus", () => {
        document.title = origTitle;
    });
})();
