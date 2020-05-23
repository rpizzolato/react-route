import React from 'react';

import productData from '../../data/mockdata.js';
import { Link, Route } from 'react-router-dom';
import Product from '../Product/index.js';

const Products = ( {match} ) => {
    
    const linkList = productData.map(product => {
        return (
            <li key={product.id}>
                <Link to={`${match.url}/${product.id}`} >{product.name}</Link>
            </li>
        );
    });

    return(
        <div>
            <h3>Products</h3>
            <ul> { linkList } </ul>

            <Route 
                exact
                path={`${match.url}/:productId`}
                render={(props) => <Product data={productData} {...props}/>}
            />
            <Route 
                exact
                path={match.url}
                render={() => <div>Please select a product.</div>}
            />
        </div>
    );
}

export default Products;