import React from 'react';

import Search from './Search';
import Resultado from './Resultado';
import axios from 'axios';
import ProductResult from "./ProductResult";

//import './App.css';


class AddProduct extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        product: []
    }
/*
    async componentDidMount() {
        //const busq = this.state.termino;
        const res = await axios.post('http://localhost:3000/products/id', {
            id : this.props.id
        })
        const res = await axios.get(`http://localhost:3000/products`);
        //console.log(url);
        this.setState({
            products: res.data
        });
        /*fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ imagenes: resultado.image }))

    }


    async componentDidMount(e) {
      /*  //const busq = this.state.termino;
        const res = await axios.get('http://localhost:3000/products/id', {
            id : this.props.id
        })
        e.preventDefault();
        //console.log(url);
        this.setState({
            product: res.data
        });
    }*/

    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>

                </div>
                <ProductResult idProduct={this.props.idProduct}/>
            </div>

        );
    }
}
export default AddProduct;
