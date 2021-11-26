import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Products.css'


const Products = () => {
    const [product , setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://aqueous-falls-64682.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log(product);
    return (
        <div>
            <Header></Header>
            <Container className="my-5">
           <h1 className=" display-5 text-secondary">Featured Products</h1>
            <p className=" mb-5 text-secondary">Recently added our store</p>
            <div className="product-collection">{
            product.map(product =><Product
                key={product.key}
                product={product}
            ></Product>
            )
        }
        </div>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Products;