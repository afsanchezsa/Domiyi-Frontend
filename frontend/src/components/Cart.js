import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import ls from 'local-storage'
//import Imagen from './Imagen'
//import ImageDetail from "./ImageDetail";

import ResultDetail from "./ResultDetail";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.setState({
            idOrder: 1//this.props.idOrder
        });
    }

    state = {
        idOrder: "",
        products: [],
        orderDetails: [],
        idsProductOffer: [],
        idsProducts: []
    }


    async componentDidMount() {

        var res;
        try {
            res = await axios.post(`http://localhost:3000/detail/byIdOrder`, {
                idOrder: 1//this.props.idOrder
            });
            this.setState({
                orderDetails: res.data

            });
        } catch (e) {
            if (e.response.status == 401) {
                this.props.Login();
            }
        }
        console.log(this.state.orderDetails);
        console.log(this.props.idOrder);
    }

    render() {
        return (
            <div className="app container">
                <div className="jumbotron">

                    <p className="lead text-center">Productos a Comprar</p>

                </div>
                <div>
                    < ResultDetail
                        details={this.state.orderDetails}
                    />
                </div>
                <Link className="btn btn-primary btn-block" to='/Products'>Finalizar compra</Link>
            </div>
        );
    }

}

/*
               {this.state.orderDetails.map(dt =>
                    <div>
                        < ResultDetail
                            key={dt.id}
                            details = {this.state.orderDetails}
                        />
                    </div>
                )}
 */
/*
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Hola</p>

                </div>
            </div>
 */
export default Cart;

/*
    state = {

        products: []
    }
    async componentDidMount() {
        //const busq = this.state.termino;
        //alert(ls.get('token'));
        var res;
        try{
            res = await axios.get(`http://localhost:3000/products`,{
                headers:{
                    authorization:ls.get('token')
                }
            });
            this.setState({
                products: res.data
            });
        } catch(e){
            if(e.response.status==401){

                this.props.Login();
            }
        }
    }
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
/*

esto lo q iba en cart

        /*
        const idsProductOffer = axios.post(`http://localhost:3000/detail/idsbyIdOrder`, {
            idOrder: 1
        }).then(() => {
            console.log(idsProductOffer);
            this.setState({
                idsProductOffer: idsProductOffer
            });
        }).then(() => {
            console.log(this.state.idsProductOffer);
            const idsproducts = axios.post('http://localhost:3000/productOffer/IdsProductById', {
                ids: this.state.idsProductOffer
            });
            this.setState({
                idsProducts: idsproducts

            });
        }).then(() => {
            var i;
            var dict = [];
            for (i = 0; i < this.state.idsProducts.length; i++) {
                var pr = axios.post('http://localhost:3000/products/id',
                    {
                        id: this.state.idsProducts[i].idProduct
                    }).then(() => {
                    dict.push(pr);
                })
            }
            this.setState({
                products: dict
            });

        }).catch(e => {
            console.log(e);
        });

         */


/*      inicialmente asi
                        <ImageDetail
                            key={dt.id}
                            detail = {this.state.orderDetails.get(dt.id)}
                            addDetail={() => {
                            }}
                        />
 */





