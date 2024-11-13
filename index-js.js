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
    product.classList.add('flex', 'flex-col', 'gap-2', 'w-[20%]', 'min-w-[50px]')
    product.innerHTML = `
                    <img  class="w-[40vh]" src= "${products[generatedIndex].image[0]}" alt="">
                    <div class="text-l">${products[generatedIndex].title}</div>
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
    product.classList.add('flex', 'flex-col', 'gap-4', 'w-[20%]', 'h-[40%]', 'min-w-[200px]')
    product.innerHTML = `
                    <img  class="" src= "${products[generatedIndex].image[0]}" alt="">
                    <div class="text-l">${products[generatedIndex].title}</div>
                    <div class="text-[#DB4444] text-s">${products[generatedIndex].price}$</div>
    `
    imagesContainer.appendChild(product);
}

for (let i = 0; i < 4; i++)
    {
        featuredProducts();
    }

// you have to access the array[random]then access all the informations of that random index and place them
// in the html
// let's start with one element