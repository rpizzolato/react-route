import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Category from "./components/Category";
import Products from "./components/Products";
import Menu from "./components/Menu";
import Login from "./components/Login";
import { fakeAuth } from './components/Login'

import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <div className="container">
      <Menu />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
      </Switch>
      
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
const Home = props => (
  <div className="container">
    <h2 className="home">Home {console.log(props)}</h2>
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};

export default App;
