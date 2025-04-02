// Загрузка товаров
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/products.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            
            products.forEach(product => {
                const productHTML = `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <img src="${product.image}" alt="${product.name}">
                        <p>${product.description}</p>
                        <p><strong>Price: ${product.price}</strong></p>
                    </div>
                `;
                container.innerHTML += productHTML;
            });
        })
        .catch(error => console.error('Error loading products:', error));

    // Плавный скролл
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
});
