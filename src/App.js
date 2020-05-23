import React from 'react';
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route 
          path="/:id" 
          render={() => (<p>I want this text to show up for all routes other than '/', '/products' and '/category'</p>)} />
      </Switch>
      
    </div>
  );
}

export default App;
