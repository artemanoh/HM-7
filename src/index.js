import { products } from "./data.js";
import createList from "./products/products.hbs";

const body = document.querySelector("body");
const productListHTML = createList({products});

body.innerHTML = productListHTML;