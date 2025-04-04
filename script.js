// Загрузка JSON с инструментами
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products');
    
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Цена: ${product.price} руб.</p>
        <p>${product.description}</p>
      `;
      
      // При клике открываем pop-up (можно доработать)
      card.addEventListener('click', () => {
        alert(`Вы выбрали: ${product.name}`);
      });
      
      productsContainer.appendChild(card);
    });
  });

// Обработка формы (заглушка)
document.getElementById('feedback-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Форма отправлена! Мы скоро свяжемся с вами.');
});
