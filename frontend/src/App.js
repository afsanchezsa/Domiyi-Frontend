import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'


import AddProduct from "./components/AddProduct";
import Category from "./components/Category";


class App extends React.Component { //We render a component  depending of the action of the user in the navbar
        state = {
            url: 'http://localhost:3001',
            product: {}
        }
        goToAddProduct = (product) => {
            this.setState({
                    url: 'http://localhost:3001/addProduct',
                    product: product
                })
                //alert(id);
        }

        render() {
                return (
                    <Router >
                        <Navbar/>
                        <Route path = "/CompanyRegister"
                        render = {

                            (props) => < FormCompany {...props } numero = { 1 }/>}/>
                            <Route path = "/addProduct"render = {(props) => < AddProduct {...props }product = { this.state.product }/>}/>
                            <Route path = "/UserRegister"component = { FormUser }/>
                            <Route path = "/ProductRegister"component = { FormProduct }/>
                            <Route path = "/Products"render = {(props) => < ListProduct {...props }goToAddProduct = { this.goToAddProduct }/>}/>
                            <Route path = "/Category"component = { Category }/>

                    </Router>
                                )

                            }
                        }
export default App;