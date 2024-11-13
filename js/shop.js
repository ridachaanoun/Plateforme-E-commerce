import { fetchProducts } from '../Modules/api.js';

async function renderProducts(category = 'All', searchQuery = '') {
  const products = await fetchProducts();

  // Filter by category
  let filteredProducts;
  if (category === 'All') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(function(product) {
      return product.category.toLowerCase() === category.toLowerCase();
    });
  }

  // Further filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(function(product) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }




  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = ''; // Clear previous products

  // Retrieve existing wishlist from localStorage or initialize as an empty array
  let wishlist = JSON.parse(localStorage.getItem("wishlistIds")) || [];
  

  filteredProducts.forEach(function(product) {

    const productDiv = document.createElement('div');
    productDiv.className = 'product rounded-lg shadow-md hover:shadow-lg transition flex flex-col';

    const firstImage = product.image[0] || 'placeholder.jpg';
    const heartIcon = document.createElement('i');

    heartIcon.className = 'fa-solid fa-heart absolute right-5 top-5 h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center';
    heartIcon.style.color = wishlist.find((element) => element == product.id)
    ? 'red'
    : 'rgba(72, 83, 83, 0.25)';


    let forheart = document.createElement("div");
    forheart.classList='relative w-80 h-[350px] w-[270px]'

    heartIcon.addEventListener('click', function() {

        if (wishlist.includes(product.id.toString())) {
            wishlist = wishlist.filter(id => id !== product.id.toString());
            heartIcon.style.color = 'rgba(72, 83, 83, 0.25)'; // Change color to default
        } else {
            wishlist.push(product.id);
            heartIcon.style.color = 'red'; // Change color to red
        }
    
        localStorage.setItem('wishlistIds', JSON.stringify(wishlist));
      
        // Store the updated wishlist back in localStorage
        localStorage.setItem('wishlistIds', JSON.stringify(wishlist));
      });

    productDiv.innerHTML = `
        <div class="flex justify-center bg-[#F5F5F5] h-[12rem] pt-10  ">
        <img class=" h-28 w-28 mix-blend-multiply " src="${firstImage}" alt="${product.title} image">
        </div>

        <h2 class="text-xl font-semibold h-8 overflow-hidden p-2 mt-2 py-2">${product.title}</h2>

        <p class="text-bold  text-[#DB4444] p-2 "> ${product.price}$
  <div class="text-sm text-yellow-500 p-2">
    ${Stars(product.rating.rate)}
    <span class="text-gray-400">(${product.rating.count} reviews)</span>
  </div>

    `;

    // Add click event listener to each product
    productDiv.addEventListener('click', function() {
      // Store product ID in localStorage
      localStorage.setItem('productId', product.id);
      // Redirect to the product details page
      window.location.href = 'anwar add your page here';
    
    });

    forheart.appendChild(heartIcon)
    forheart.appendChild(productDiv);
    productsContainer.appendChild(forheart);
  });
}



//for Filter by category
const filterButtons = document.querySelectorAll('ul li button');
let currentCategory = 'All';

filterButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // Reset all buttons' styles
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active-category'); // Remove active class
    });

    // Apply active class to the clicked button
    e.target.classList.add('active-category');

    currentCategory = e.target.innerText.toLowerCase();
    if (currentCategory === 'all') {
      currentCategory = 'All'; // Reset to 'All' if clicked "All"
    }

    renderProducts(currentCategory, searchInput.value);
  });
});

  
  
  
  const searchInput = document.getElementById('search');
  // Filter by search input
  searchInput.addEventListener('input', function(e) {
    renderProducts(currentCategory, e.target.value);
  });

// for testing
// localStorage.setItem("category","jewelery");

// category from localStorage
let lCategory = localStorage.getItem("category"); 

if (lCategory) {
  filterButtons.forEach(function (btn) {
    if (btn.innerText.toLowerCase() === lCategory.toLowerCase()) {
      btn.classList.add('active-category'); 
    } else {
      btn.classList.remove('active-category'); 
    }
  });

  
  // clear category
  localStorage.removeItem("category");
  renderProducts(lCategory); // Render products for loaclstorage
} else {
  renderProducts(); 
}




// function to generate stars
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

