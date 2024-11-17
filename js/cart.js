const containerPro = document.getElementById("container-pro");
const Subtotal = document.getElementById("Subtotal");
const Total = document.getElementById("Total");

let cartProducts = JSON.parse(localStorage.getItem('cart')) || []; 

let subtotal = 0;
let total = 0;

cartProducts.forEach((pro, index) => {
    let prodev = document.createElement("div");
    prodev.className = "h-16 flex justify-between px-4 md:px-8 items-center shadow-sm relative";
    prodev.dataset.index = index; 
    
    prodev.innerHTML = `
        <span><img class="h-10 w-10 mix-blend-multiply" src="${pro.img}" alt=""></span> 
        <span>${pro.price}</span> 
        <span class="border w-10 h-6 text-center">${pro.quantity}</span> 
        <span>${pro.price * pro.quantity}</span>
        <i class="fas fa-trash cursor-pointer text-red-500 delete-btn right-0 absolute "></i>
    `;
    
    subtotal += pro.price * pro.quantity;
    containerPro.appendChild(prodev); 
});

Subtotal.textContent = `$${subtotal}`;
Total.textContent = `$${subtotal}`;  

document.querySelectorAll('.delete-btn').forEach((btn, index) => {
    btn.addEventListener('click', (event) => deleteProduct(event, index));
});

function deleteProduct(event, index) {

    cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    event.target.closest('div').remove();

    updateTotals();
}

function updateTotals() {
    subtotal = 0; 
    cartProducts.forEach(pro => {
        subtotal += pro.price * pro.quantity; 
    });

    Subtotal.textContent = `$${subtotal}`;
    Total.textContent = `$${subtotal}`;
}

