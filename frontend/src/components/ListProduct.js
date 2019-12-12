import React from 'react';

import Search from './Search';
import Resultado from './Resultado';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
//import './App.css';


class ListProduct extends React.Component {
    constructor(props) {
        super(props);
       
    }


    state = {
        idCompany:'',
        products: [],
        details:[]
   }
    addDetail=(detail)=>{
        //this.state.details.push(detail);
    console.log("this is add detail");
    }

    async componentDidMount() {
       
        console.log("hola" );
        var res;

            try{
                 res = await axios.post(Host+'/productOffer/ByIdCompany',{
                idCompany:this.props.location.state.idCompany
                    
                 },{
                  
                headers: {
                    authorization: ls.get('token')

                }
            });
                 console.log(res.data);
            this.setState({
                products: res.data
            });
        } catch (e) {
                console.log(e);

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
                    addDetail={this.addDetail}
                    products={this.state.products}
                    goToAddProduct={this.props.goToAddProduct}
                    idOrder={this.props.idOrder}
                />
            </div>
        );
    }

}

export default ListProduct;
