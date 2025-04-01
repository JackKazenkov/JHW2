// Плавный скролл по якорям
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Можно добавить другие эффекты, например:
// - Ленивую загрузку фото
// - Анимации при скролле