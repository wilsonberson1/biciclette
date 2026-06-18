const grid = document.getElementById('grid');
const search = document.getElementById('search');
const category = document.getElementById('category');

function renderProducts() {
  const term = search.value.toLowerCase();
  const selected = category.value;
  const products = window.PRODUCTS.filter((p) => {
    const matchesSearch = `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(term);
    const matchesCategory = selected === 'Todos' || p.category === selected;
    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span>${p.tag}</span>
      </div>
      <div class="product-body">
        <small>${p.category}</small>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom">
          <strong>${p.price}</strong>
          <div class="buy-buttons">
            <a href="${p.amazon}" target="_blank" rel="nofollow sponsored noopener">Amazon</a>
            <a href="${p.mercadoLivre}" target="_blank" rel="nofollow sponsored noopener">Mercado Livre</a>
          </div>
        </div>
      </div>
    </article>
  `).join('') || '<p class="empty">Nenhum produto encontrado.</p>';
}

search.addEventListener('input', renderProducts);
category.addEventListener('change', renderProducts);
renderProducts();
