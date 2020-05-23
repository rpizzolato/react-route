import React from 'react';
import { Link } from "react-router-dom";

import './style.css';

const Menu = () => {
    return(
        <div>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin area</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;