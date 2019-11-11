import React from 'react';
import ShoppingProduct from './ShoppingProduct'
import Search from './Search';

import axios from 'axios';
import ProductResult from "./ProductResult";

//import './App.css';


class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        product: []
    }

    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Producto</p>

                </div>
                < ShoppingProduct
                    product={this.props.product}
                    idOrder = {this.props.idOrder}
                    addDetail={this.props.addDetail}
                />

            </div>

        );
    }
}

//
//<ProductResult
//    idProduct={this.props.idProduct}
///>
//
export default AddProduct;
/*
    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>

                </div>
                < Resultado
                    products={this.state.products}
                    goToAddProduct={this.props.goToAddProduct}
                />
            </div>
        );
    }
 */