import createList from "./products/products.hbs";
import { products } from "./data.js";

const body = document.querySelector("body");
const productListHTML = createList({products});

body.innerHTML = productListHTML;