import React from 'react'
import './style.css';


const Product = ({ match, data }) => {
    var product = data.find(p => p.id === Number(match.params.productId));
    var productData;

    if (product) {
        productData = (
            <div className="product">
                <h3> {product.name} </h3>
                <p> {product.description} </p>
                <hr />
                <h4> {product.status} </h4>{" "}
            </div>
        );
    } else {
        productData = <h2>Sorry. Product doesn't exist.</h2>
    }

    return (
        <div>
            <div className="product-data">{productData}</div>
        </div>
    );
}

export default Product;