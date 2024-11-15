import { fetchProducts } from '../Modules/api.js';

// Fetch all products
const products = await fetchProducts();
console.log(products);

// Get the wishlist from localStorage
let wishlist = localStorage.getItem("wishlistIds");
console.log(wishlist);

// Get the wishlist counter span element
const wishlistCounter = document.querySelector('.conter-wishlist');

// If no wishlist is found, display a message and exit
if (!wishlist || wishlist === '[]') {
    const message = "Nothing to show"; 
    const root = document.querySelector("#productDiv");
    root.innerHTML = `<p class="text-center text-xl">${message}</p>`;
    // Set wishlist counter to 0 if no items in wishlist
    if (wishlistCounter) {
        wishlistCounter.textContent = '0';
    }
} else {
    // If wishlist exists, parse it from JSON
    wishlist = JSON.parse(wishlist);

    // Update the counter with the number of items in the wishlist
    if (wishlistCounter) {
        wishlistCounter.textContent = wishlist.length;
    }

    // Filter the products to show only those that are in the wishlist
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));

    // If no products are found in the wishlist, display a message
    if (wishlistProducts.length === 0) {
        const message = "Nothing to show"; 
        const root = document.querySelector("#productDiv");
        root.innerHTML = `<p class="text-center text-xl">${message}</p>`;
    } else {
        // Display the filtered wishlist products
        cards(wishlistProducts);
    }
}

// Function to display product cards
function cards(products) {
    const root = document.querySelector("#productDiv");
    let htmlContent = "";  // String to accumulate the HTML
    
    products.forEach(product => {
        // Generate the HTML for each product card
        htmlContent += `
        <div class="flex flex-col items-center justify-between bg-[#F5F5F5] p-4 rounded-lg shadow-lg w-[350px] h-[322px]" id="product-${product.id}">
            <div class="flex justify-center bg-[#F5F5F5] h-[12rem] pt-10">
                <img class="h-28 w-28 mix-blend-multiply" src="${product.image[0]}" alt="${product.title} image">
            </div>
            <h2 class="text-base text-black font-medium h-8 overflow-hidden p-2 py-2">${product.title}</h2>
            <p class="text-bold text-[#DB4444] p-2">${product.price}$</p>
            <div class="text-sm text-yellow-500 p-2">
                ${Stars(product.rating.rate)}
                <span class="text-gray-400">(${product.rating.count} reviews)</span>
            </div>
        </div>
        `;
    });

    // Insert all the HTML at once
    root.innerHTML = htmlContent;

    // Add click event listeners to each product card
    products.forEach(product => {
        const productCard = document.getElementById(`product-${product.id}`);
        if (productCard) {
            productCard.addEventListener('click', () => {

                    localStorage.setItem('productId', product.id);
                    window.location.href = 'your-product-details-page.html';

            });
            console.log(productCard);
            
        }
    });
}

// Function to generate the star rating display
function Stars(rating) {
    const maxStars = 5;
    let starHTML = '';
  
    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        starHTML += '<i class="fa-solid fa-star text-yellow-500"></i>';
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        starHTML += '<i class="fa-solid fa-star-half-stroke text-yellow-500"></i>';
      } else {
        starHTML += '<i class="fa-regular fa-star text-gray-300"></i>';
      }
    }
  
    return starHTML;
}
console.log(
    "%c today tomorrow that s it", 
    "background-color: black; color: red; font-size: 16px; padding: 8px; border-radius: 4px; display: inline-block;"
  );
