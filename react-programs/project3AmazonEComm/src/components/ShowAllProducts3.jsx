import React from 'react';
import './ShowAllProducts.css';
import productsx from '../data/allproducts';
import './ShowAllProducts2.css'
import Product from './Product';
import FilterBar from './FilterBar';
import { useState } from 'react';

const ShowAllProducts3 = () => {

    const [products,setProducts]=useState(productsx)
    const [buproducts,setBuproducts]=useState(productsx)

    const productCategories=buproducts.map(
        (prod)=>prod.category
    )

    console.log(productCategories)

    const uniqueCategories=new Set(productCategories)
    console.log(uniqueCategories)

    const allCategories=[...uniqueCategories,'All']
    console.log(allCategories)

    function filterByCategory(userSelectedCategory)
    {
        if(userSelectedCategory==='All')
        {
            setProducts(buproducts)
        }
        else
        {
        //console.log(userSelectedCategory)
        const filteredProducts=buproducts.filter(
            (prod)=>prod.category===userSelectedCategory
        )

        //console.log(filteredProducts)
        setProducts(filteredProducts)
    }
    }
    return (
        <>
        <FilterBar categories={allCategories} handleClick={filterByCategory}/>
        <div className="container py-5">
            <div className="row g-4">
                {products.map((product, index) => {
                    return <Product key={index} product={product}/>
                })}
            </div>
        </div>
        </>
    );
};

export default ShowAllProducts3;