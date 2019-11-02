import React from 'react';

import Search from './Search';
import Resultado from './Resultado';
import axios from 'axios';
import ls from 'local-storage'

//import './App.css';


class ListProduct extends React.Component {

    state = {

        products: []
    }

    async componentDidMount() {
        //const busq = this.state.termino;
        //alert(ls.get('token'));
        var res;
            try{
                 res = await axios.get(`http://localhost:3000/products`);
                 this.setState({
                    products: res.data
                });
                } catch(e){
                if(e.response.status==401){
                    
                }
                }
            

                //console.log(url);
        
        
            
        
        
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
//render all products 
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
