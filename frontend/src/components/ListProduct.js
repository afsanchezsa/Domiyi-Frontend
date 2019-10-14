import React from 'react';

import Search from './Search';
import Resultado from './Resultado';
import axios from 'axios';



//import './App.css';


class ListProduct extends React.Component {

    state = {
       
        products: []
    }

    async componentDidMount() {
        //const busq = this.state.termino;
         const res=await axios.get(`http://localhost:3000/products`);
        //console.log(url);
        this.setState({
            products:res.data
        });
        /*fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ imagenes: resultado.image }))
            */
    }

    /*dataSearch = (termino) => {
        this.setState({
            termino
        }, () => {
            this.consultarApi();
        })

    }*/
    //<Search dataSearch={this.dataSearch} />
    render() {
        return (
            <div className="app container">
                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>
                    
                </div>
                < Resultado
                    products={this.state.products}
                />
            </div>

        );
    }

}
export default ListProduct;
