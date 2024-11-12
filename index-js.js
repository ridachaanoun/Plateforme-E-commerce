//index-js.js
import { fetchProducts } from './Modules/api.js';


const products = await fetchProducts();
console.log(products);


// async function fetching() {
//     try
//     {
//     let response = await fetch('db.json');
//     let data = await response.json();
//     console.table(data);
//     }
//     catch (err)
//     {
//         console.log('Error: ', err)
//     }
// }
// fetching();