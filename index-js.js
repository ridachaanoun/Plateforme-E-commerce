//index-js.js
import { fetchProducts } from './Modules/api.js';


const products = await fetchProducts();

function generateIndex ()
{
    //generate index from 0 to 41
    return (Math.floor(Math.random() * 41))
}

// console.log(products[generatedIndex]);
// console.log(products[generatedIndex].title)
// console.log(products[generatedIndex].price)
// console.log(products[generatedIndex].image[0]);
function mostPopular()
{
    let imagesContainer = document.getElementById("imagesContainer");
    // console.log(imagesContainer);
    let generatedIndex = generateIndex();
    // console.log("generated index" + generatedIndex);
    let product = document.createElement("div");
    product.classList.add('flex', 'flex-col', 'gap-2')
    product.innerHTML = `
                    <div class="flex justify-center">
                    <img class="h-[150px] w-[150px]"src= "${products[generatedIndex].image[0]}" alt="">
                    </div>
                    <div class="text-l max-w-[150px]">${products[generatedIndex].title}</div>
                    <div class="text-[#DB4444] text-s">${products[generatedIndex].price}$</div>
    `
    imagesContainer.appendChild(product);
}
for (let i = 0; i < 6; i++)
{
    mostPopular();
}

function featuredProducts()
{
    let imagesContainer = document.getElementById("imagesContainer2");
    // console.log(imagesContainer);
    let generatedIndex = generateIndex();
    console.log("generated index" + generatedIndex);
    let product = document.createElement("div");
    product.classList.add('flex', 'flex-col', 'gap-2')
    product.innerHTML = `
                    <div class="flex justify-center">
                    <img  class="h-[150px] w-[150px]" src= "${products[generatedIndex].image[0]}" alt="">
                    </div>
                    <div class="text-l max-w-[150px]">${products[generatedIndex].title}</div>
                    <div class="text-[#DB4444] text-s">${products[generatedIndex].price}$</div>
    `
    imagesContainer.appendChild(product);

    product.addEventListener('click', function() {
        // Store product ID in localStorage
        localStorage.setItem('productId', products[generatedIndex].id);
        // Redirect to the product details page
        window.location.href = 'google.com';
      });
}

for (let i = 0; i < 4; i++)
    {
        featuredProducts();
    }

// you have to access the array[random]then access all the informations of that random index and place them
// in the html
// let's start with one element

// document.getElementById("clothing").addEventListener('click', function() {
//     // Store product ID in localStorage
//     localStorage.setItem("category","clothing");
//     // Redirect to the product details page
//     window.location.href = 'pages/shop.html';
  
//   });

  
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
// product.addEventListener('click', function() {
//     // Store product ID in localStorage
//     localStorage.setItem("category","jewelery");
//     // Redirect to the product details page
//     window.location.href = 'shop.html';
  
//   });
