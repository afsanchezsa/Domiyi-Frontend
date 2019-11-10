import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Imagen from './Imagen'
import Resultado from "./Resultado";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.setState({
            idOrder: this.props.idOrder
        });
    }

    state = {
        idOrder: "",
        products: [],
        details: [],
        idsProductOffer: [],
        idsProducts: []


    }

    componentDidMount() {
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
    }

    render() {
        return (
            <div className="container p-4">
                {this.state.products.map(dt =>
                    <div>
                        <Imagen
                            key={dt.idProduct}
                            product={this.state.products.get(dt.idProduct)}
                            goToAddProduct={() => {
                            }}
                        />
                        <p>{dt.quantity}</p>
                    </div>
                )}
            </div>

        );
    }
}

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







