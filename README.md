## Plateforme-E-commerce:

**Plateforme E-commerce** is a simple e-commerce platform that allows users to browse products, add items to their shopping cart, and complete the checkout process. The project uses static HTML, CSS, and JavaScript to manage product listings, user interactions, and cart functionalities, with data stored in a JSON file.


## Features:

1. **Product Catalog**: Display products dynamically from JSON data.
2. **Product Details**: View detailed product information.
3. **Shopping Cart**: Add, remove, and modify items in the shopping cart.
4. **Checkout**: Complete purchase flow with an interactive checkout process.
5. **Wishlist**: Save products to your wishlist for later purchase.
6. **Responsive UI**: Optimized for both desktop and mobile views.


## Tech Stack:

- **HTML**: For the basic structure of web pages.
- **CSS**: Styling with custom stylesheets (Product-Detail.css, style.css).
- **JavaScript**: Client-side interactions (e.g., cart, checkout, wishlist).
- **JSON**: Data stored in db.json for products, cart items, and more.
- **API**: Fetching product data via api.js.


## Project Structure:

The project is organized into the following directories and files:

**bash**

platphorme-ecommerce/
├── assets/
│   ├── icons/               # Icons used throughout the website
│   ├── imgs/                # Product images, banners, etc.
│   └── logo/                # Project logo images
│
├── css/
│   ├── Product-Detail.css   # Styles specific to product detail page
│   └── style.css            # General styles for the platform
│
├── js/
│   ├── cart.js              # JavaScript for shopping cart interactions
│   ├── checkout.js          # Checkout page functionalities
│   ├── main.js              # Main JavaScript file with common logic
│   ├── menu.js              # Navigation and menu-related logic
│   ├── Product-Details.js   # Product detail page logic
│   ├── shop.js              # Shop page logic
│   └── wishlist.js          # Wishlist functionalities
│
├── modules/
│   └── api.js              # API handling (fetch product data, etc.)
│
├── pages/
│   ├── 404.html            # 404 error page
│   ├── about.html           # About page
│   ├── account.html         # Account management page
│   ├── cart.html            # Shopping cart page
│   ├── checkout.html        # Checkout page
│   ├── contact.html         # Contact page
│   ├── nav-footer.html      # Navigation and footer (reusable across pages)
│   ├── page.html            # Generic page template
│   ├── Product-Details.html # Product detail page
│   ├── Shop.html            # Shop homepage with product listing
│   └── wishlist.html        # Wishlist page
│
└── db.json                 # JSON file holding product data, cart items, etc.
|
|__REDME.md



## Usage:

The website's main features are accessed through the pages:

- **Shop**: Browse products listed in the Shop.html page.
- **Product Details**: Click on a product to view more details in the Product-Details.html page.
- **Shopping Cart**: Add items to the cart in the cart.html page.
- **Checkout**: Finalize purchases and view order details in the checkout.html page.
- **Wishlist**: Save favorite products to the wishlist.html page.


## JSON Data:

The product data, cart items, and other dynamic content are stored in the db.json file. This file contains an array of products and related metadata that is fetched by the api.js module.


## Folder Details:
- **assets/**: Contains images, icons, and logos for the platform.
- **css/**: Contains the CSS files for styling the platform's pages.
- **js/**: Contains JavaScript files for the interactive parts of the platform, such as the cart and checkout pages.
- **modules/**: Contains the api.js file that handles data fetching and other helper functions.
- **pages/**: HTML files for the various pages on the platform (e.g., Shop, Checkout, Wishlist).
- **db.json**: Stores product data and user interactions (e.g., cart, wishlist) in a static format.


## Additional Notes:

- **API Handling**: The api.js file handles fetching product data and other resources. It’s useful for any dynamic content or data-driven sections of your site.
- **Local Development**: Since the site is built with static files, you can host it anywhere that serves HTML, CSS, and JavaScript files (e.g., GitHub Pages, Netlify, or your own server).
- **Customization**: You can extend the project by adding more dynamic features like user authentication, real-time inventory updates, or integrating a payment gateway.

