import products from './data.js'

console.log(products)

const productTitles=products.map(
    (product)=>product.title
)

console.log(productTitles)


const rootDiv=document.querySelector("#root")

let prodTitle=""
productTitles.forEach(
    (ptitle)=>{
        prodTitle+=`<h1>${ptitle}</h1>`
    }
)

rootDiv.innerHTML=prodTitle


// const productCategories=products.map(
//     (product)=>product.category
// )

// console.log(productCategories)

// //list  allows duplicates 
// //set   does not allow duplicates

// const uniqueCategories=new Set(productCategories)

// console.log(uniqueCategories)

// console.log(typeof uniqueCategories)

// //spread operator
// const allCategories=[...uniqueCategories,'All']  //it will convert the array into individual elements
// console.log(allCategories)
// console.log(allCategories)



const categories = [...new Set(products.map(p => p.category)), 'All'];
let menus = "";
categories.forEach(cat => {
  menus += `<li class="menuitems">${cat}</li>`;
});
const olElement = document.querySelector(".navbar");
olElement.innerHTML = menus;
const menuItems = document.querySelectorAll('.menuitems');
menuItems.forEach(item => {
item.addEventListener("click", () => {
filterByCategory(item.textContent);
 });
});
function filterByCategory(category) {
let filteredProducts;
 if (category === "All") {
filteredProducts = products;
} else {
filteredProducts = products.filter(
 prod => prod.category === category
 );
}
let prodTitle1 = "";
filteredProducts.forEach(p => {
 prodTitle1 += `<h1>${p.title}</h1>`;
});
rootDiv.innerHTML = prodTitle1;
}