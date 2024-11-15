// Get the product ID from local storage
let x = localStorage.getItem("productId");
const addToCartBtn = document.getElementById('addToCart')
console.log(x);

// Asynchronously fetch the product
async function fetchProduct() {
    const response = await fetch(`http://localhost:3000/products/${x}`);
    const product = await response.json();
    return product;
}
const product = await fetchProduct();  // Wait for the product data to resolve
console.log(product);


// Immediately-invoked function to fetch and display the product
(async function displayProduct() {
        const productContainer = document.getElementById('product-container');
        const imgSrc = product.image[0];
        productContainer.innerHTML = `
        <img src='${imgSrc}' class='product-img'>
        <h5>$${product.price}</h5>
        <p class="desc">${product.description}</p>
        `;
})();


addToCartBtn.addEventListener('click', function(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productExists = cart.find(item => item.id === product.id);

    if (productExists) {
        alert('This product is already in your cart.');
        return;
    }

    cart.push({
        img: product.image[0],
        title: product.title,
        price: product.price,
        quantity: 1,
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
})