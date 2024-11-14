import { fetchProducts } from '../Modules/api.js';
let currentPage = 1;
const itemsPerPage = 16; 
let currentCategory = 'All';

async function renderProducts(category = 'All', searchQuery = '', page = 1) {
  const products = await fetchProducts();

  // Filter by category
  let filteredProducts = category === 'All' ? products : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  // Further filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Pagination logic
  const totalItems = filteredProducts.length;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = ''; // Clear previous products

  let wishlist = JSON.parse(localStorage.getItem("wishlistIds")) || [];

  paginatedProducts.forEach(function(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product flex flex-col';

    const firstImage = product.image[0] || 'placeholder.jpg';
    const heartIcon = document.createElement('i');

    heartIcon.className = 'fa-solid fa-heart absolute right-5 top-5 h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center max-[600px]:top-1 max-[600px]:right-1';
    heartIcon.style.color = wishlist.includes(product.id.toString()) ? 'red' : 'rgba(72, 83, 83, 0.25)';

    let forheart = document.createElement("div");
    forheart.classList = 'relative w-80 h-[350px] w-[270px] max-[600px]:w-[200px] max-[600px]:h[165px]';

    heartIcon.addEventListener('click', function() {
      if (wishlist.includes(product.id.toString())) {
        wishlist = wishlist.filter(id => id !== product.id.toString());
        heartIcon.style.color = 'rgba(72, 83, 83, 0.25)';
      } else {
        wishlist.push(product.id.toString());
        heartIcon.style.color = 'red';
      }
      localStorage.setItem('wishlistIds', JSON.stringify(wishlist));
    });

    productDiv.innerHTML = `
      <div class="flex justify-center bg-[#F5F5F5] h-[12rem] pt-10">
        <img class="h-28 w-28 mix-blend-multiply" src="${firstImage}" alt="${product.title} image">
      </div>
      <h2 class="text-base text-black font-medium h-8 overflow-hidden p-2 py-2">${product.title}</h2>
      <p class="text-bold text-[#DB4444] p-2">${product.price}$</p>
      <div class="text-sm text-yellow-500 p-2">
        ${Stars(product.rating.rate)}
        <span class="text-gray-400">(${product.rating.count} reviews)</span>
      </div>
    `;

    productDiv.addEventListener('click', function() {
      localStorage.setItem('productId', product.id);
      window.location.href = 'your-product-details-page.html';
    });

    forheart.appendChild(heartIcon);
    forheart.appendChild(productDiv);
    productsContainer.appendChild(forheart);
  });

  // Render pagination controls
  PaginationC(totalItems, page);
}

function PaginationC(totalItems, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.getElementById('paginationContainer');
  paginationContainer.innerHTML = ''; // Clear 

  // Create the navigation container
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'flex';

  // Previous Button
  const prevLi = document.createElement('li');
  const prevLink = document.createElement('button');
  prevLink.className = 'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-red-500';
  
  prevLink.setAttribute('aria-label', 'Previous');
  prevLink.innerHTML = '<span class="material-icons text-sm">keyboard_arrow_left</span>';
  prevLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      renderProducts(currentCategory, searchInput.value, currentPage - 1);
    }
  });
  prevLi.appendChild(prevLink);
  ul.appendChild(prevLi);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const pageLink = document.createElement('button');
  
    pageLink.innerText = i;
    pageLink.className = `mx-1 flex h-9 w-9 items-center justify-center rounded-full ${i === currentPage ? 'bg-red-500 text-white shadow-md' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} p-0 text-sm transition duration-150 ease-in-out hover:bg-red-500`;
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      renderProducts(currentCategory, searchInput.value, i);
    });
    li.appendChild(pageLink);
    ul.appendChild(li);
  }

  // Next Button
  const nextLi = document.createElement('li');
  const nextLink = document.createElement('button');
  nextLink.className = 'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-red-500';
  
  nextLink.setAttribute('aria-label', 'Next');
  nextLink.innerHTML = '<span class="material-icons text-sm">keyboard_arrow_right</span>';
  nextLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      renderProducts(currentCategory, searchInput.value, currentPage + 1);
    }
  });
  nextLi.appendChild(nextLink);
  ul.appendChild(nextLi);

  nav.appendChild(ul);
  paginationContainer.appendChild(nav);
}


// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function(e) {
  renderProducts(currentCategory, e.target.value, 1);
});

// Filter buttons
const filterButtons = document.querySelectorAll('ul li button');
filterButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    filterButtons.forEach(btn => btn.classList.remove('active-category'));
    e.target.classList.add('active-category');
    currentCategory = e.target.innerText;
    renderProducts(currentCategory, searchInput.value, 1);
  });
});

// Helper function to generate stars
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

  renderProducts(lCategory); // Render products for loaclstorage

  // clear category
  localStorage.removeItem("category");
} else {
  renderProducts(); 
}
