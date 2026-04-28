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


const categories=[...new Set(products.map(
    (product)=>product.category
)),'All']

console.log(categories)

let menus=""
categories.forEach(
    (cat)=>menus+=`<li class="menuitems">${cat}</li>`
)

function filterByCategory(value)
{
    console.log(value)
    const filteredProducts=products.filter(
        (prod)=>prod.category===value
    )
    prodTitle1=""
    filteredProducts.forEach(
    (ptitle)=>{
        prodTitle1+=`<h1>${ptitle}</h1>`
    }
)
     rootDiv.innerHTML=prodTitle1
}
const menuItems=document.querySelectorAll('.menuitems')
Array.from(menuItems).forEach(
    (item)=>item.addEventListener("click",()=>filterByCategory(item))
)
const olElement=document.querySelector(".navbar")
olElement.innerHTML=menus

