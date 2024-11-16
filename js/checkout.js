
  const containerPro = document.getElementById("container-pro");
  const Subtotal = document.getElementById("Subtotal");
  const Total = document.getElementById("Total");

  // Retrieve cart products from localStorage
  let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if cart is empty
  if (cartProducts.length === 0) {
    document.getElementById('failureModal').classList.remove('hidden');
  }

  let subtotal = 0;

  // Display cart products
  cartProducts.forEach((pro) => {
    let prodev = document.createElement("div");
    prodev.className = "flex items-center justify-between";

    prodev.innerHTML = `
      <span class="flex items-center">
        <img class="h-10 w-10 mr-4 mix-blend-multiply" src="${pro.img}" alt="${pro.title}">
        <span class="overflow-hidden">${pro.title}</span>
      </span>
      <span>$${pro.price}</span>
    `;

    subtotal += pro.price * pro.quantity;
    containerPro.appendChild(prodev);
  });

  Subtotal.textContent = `$${subtotal}`;
  Total.textContent = `$${subtotal}`;

  
  const placeOrderButton = document.getElementById("btn");

  placeOrderButton.addEventListener("click", () => {
    
    if (cartProducts.length === 0) {
      document.getElementById('failureModal').classList.remove('hidden');
      return; 
    }

    localStorage.removeItem('cart');

    containerPro.innerHTML = "";  
    Subtotal.textContent = "$0";  
    Total.textContent = "$0";    

    // Show success modal
    document.getElementById('successModal').classList.remove('hidden');

    // Optionally, redirect the user to an order confirmation page
    // window.location.href = "/order-confirmation";  // Redirect to order confirmation page or homepage
  });

  // Close the success modal
  document.getElementById('closeSuccessModal').addEventListener('click', () => {
    document.getElementById('successModal').classList.add('hidden');
    window.location.href = "404.html";  // Redirect to order confirmation page or homepage
  });

  // Close the failure modal
  document.getElementById('closeFailureModal').addEventListener('click', () => {
    document.getElementById('failureModal').classList.add('hidden');
    window.location.href = "Shop.html";  // Redirect to home or cart page
  });

