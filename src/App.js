import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';




export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ProductList />
        <Detail />
        <Cart />
        <Default />
        
      </React.Fragment>
    );
  }
}