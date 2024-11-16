//index-js.js
import { fetchProducts } from './Modules/api.js';


const products = await fetchProducts();

function generateIndex ()
{
    //generate index from 0 to 41
    return (Math.floor(Math.random() * 41))
}

function mostPopular()
{
    let imagesContainer = document.getElementById("imagesContainer");
    
    let generatedIndex = generateIndex();

    let product = document.createElement("div");

    product.className =' max-[452px]:w-[175px] relative h-[350px] w-[300px]  max-[600px]:w-[200px] max-[600px]:h[165px]';
    product.innerHTML = `
       <div class="flex justify-center bg-[#F5F5F5] h-[12rem] pt-10">
          <img class="h-28 w-28 mix-blend-multiply" src="${products[generatedIndex].image[0]}" alt="${products[generatedIndex].title} image">
        </div>
        <h2 class="text-base text-black font-medium h-8 overflow-hidden p-2 py-2">${products[generatedIndex].title}</h2>
        <p class="text-bold text-[#DB4444] p-2">${products[generatedIndex].price}$</p>
        <div class="text-sm text-yellow-500 p-2">
          ${Stars(products[generatedIndex].rating.rate)}
          <span class="text-gray-400">(${products[generatedIndex].rating.count} reviews)</span>
        </div>
    `
    product.addEventListener('click', function() {
      
      localStorage.setItem('productId', products[generatedIndex].id);
    
      window.location.href = 'google.com';
    });
    imagesContainer.appendChild(product);
}
for (let i = 0; i < 8; i++)
{
    mostPopular();
}

function featuredProducts()
{
    let imagesContainer = document.getElementById("imagesContainer2");

    let generatedIndex = generateIndex();
    console.log("generated index" + generatedIndex);
    let product = document.createElement("div");
    product.className ='max-[452px]:w-[175px] relative h-[350px] w-[300px]  max-[600px]:w-[200px] max-[600px]:h[165px]   '
    product.innerHTML = `
        <div class="flex justify-center bg-[#F5F5F5] h-[12rem] pt-10">
          <img class="h-28 w-28 mix-blend-multiply" src="${products[generatedIndex].image[0]}" alt="${products[generatedIndex].title} image">
        </div>
        <h2 class="text-base text-black font-medium h-8 overflow-hidden p-2 py-2">${products[generatedIndex].title}</h2>
        <p class="text-bold text-[#DB4444] p-2">${products[generatedIndex].price}$</p>
        <div class="text-sm text-yellow-500 p-2">
          ${Stars(products[generatedIndex].rating.rate)}
          <span class="text-gray-400">(${products[generatedIndex].rating.count} reviews)</span>
        </div>

    `
    
    product.addEventListener('click', function() {
      // Store product ID in localStorage
      localStorage.setItem('productId', products[generatedIndex].id);
      // Redirect to the product details page
      window.location.href = 'google.com';
    });
    imagesContainer.appendChild(product);
}

for (let i = 0; i < 4; i++)
    {
        featuredProducts();
    }

  
  document.getElementById("nvidia-graphics-card").addEventListener('click', function() {
    // Store product ID in localStorage
    localStorage.setItem("category","nvidia graphics card");
    // Redirect to the product details page
    window.location.href = 'pages/shop.html';
  
  });

    
  document.getElementById("clothing").addEventListener('click', function() {
    // Store product ID in localStorage
    localStorage.setItem("category","clothing");
    // Redirect to the product details page
    window.location.href = 'pages/shop.html';
  
  });

  document.getElementById("electronics").addEventListener('click', function() {
    // Store product ID in localStorage
    localStorage.setItem("category","electronics");
    // Redirect to the product details page
    window.location.href = 'pages/shop.html';
  
  });

  document.getElementById("jewelery").addEventListener('click', function() {
    // Store product ID in localStorage
    localStorage.setItem("category","jewelery");
    // Redirect to the product details page
    window.location.href = 'pages/shop.html';
  
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