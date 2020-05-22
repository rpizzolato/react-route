import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Products from "./components/Products";
import Menu from "./components/Menu";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact={true} path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
