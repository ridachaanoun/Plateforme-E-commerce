import { fetchProducts } from '../Modules/api.js';

async function renderProducts() {
  const products = await fetchProducts();
  console.log(products);

  const productsContainer = document.getElementById('products');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Generate images HTML
    let imagesHtml = '';
    product.image.slice(0, 3).forEach(img => {
      imagesHtml += `<img src="${img}" alt="${product.title}">`;
    });

    // Populate productDiv with product data
    productDiv.innerHTML = `
      <h2>${product.title}</h2>
      <div class="images-container">
        ${imagesHtml}
      </div>
      <p class="price">Price: $${product.price}</p>
      <p>${product.description}</p>
      <p><strong>Category:</strong> ${product.category} - ${product.childCategory}</p>
      <p class="rating">Rating: ${product.rating.rate} 
        <span>(${product.rating.count} reviews)</span>
      </p>
    `;
    productsContainer.appendChild(productDiv);
  });
}

renderProducts();
