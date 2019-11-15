import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
import axios from 'axios'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'
import Cart from './components/Cart'
import ls from 'local-storage'
import AddProduct from "./components/AddProduct";
import Host from './Utilities/ServerUtilities'
import FormLogin from './components/FormLogin';
import Orders from "./components/Orders";

class App extends React.Component {//We render a component  depending of the action of the user in the navbar 
    state = {
        idOrder: null,
        url: 'http://localhost:3001',
        product: {},
        idsDetails: []
    }

    /*
        const res = await axios.post('http://localhost:3000/detail/register', {
        idOrder: this.state.idOrder,
        idProductOffer : this.state.idProductOffer,
        quantity : this.state.quantity,
        observation : this.state.observation,
        unitPrice : this.state.unitPrice
    });
     */
    addDetail = async (id) => {
        if (this.state.idOrder == null) {
            const res = await axios.post(Host+'/order/register', {
                idCompany: 1,
                idUser: 1,
                address: "Avenida siempre vivas 123"
            },{
                headers: {
                    authorization: ls.get('token')

                }
            });
            this.setState({
                idOrder: res.data.id
            })

        }
        var ids;
        ids = this.state.idsDetails;
        ids.push(id);
        this.setState(
            {
                idsDetails: ids
            }
        );
        console.log(this.state.idsDetails);
        console.log("idorder" + this.state.idOrder);
    }
    goToAddProduct = (product) => {
        this.setState({
            url: Host+'/addProduct',
            product: product,
        })
        //alert(id);
    }

    render() {
        return (
            <Router>
                <Navbar/>

                <Route path="/Orders" render={(props) => <Orders {...props}/>}/>
                <Route path="/Cart" render={(props) => <Cart {...props} idOrder={this.state.idOrder} idsDetails={this.state.idsDetails}/>}/>
                <Route path="/CompanyRegister" render={(props) => <FormCompany {...props} numero={1}/>}/>
                <Route path="/addProduct" render={(props) => <AddProduct {...props} product={this.state.product}
                                                                         idOrder={this.state.idOrder}
                                                                         addDetail={this.addDetail}/>}/>
                <Route path="/UserRegister" component={FormUser}/>
                <Route path="/ProductRegister" component={FormProduct}/>
                <Route path="/Products"
                       render={(props) => <ListProduct {...props} goToAddProduct={this.goToAddProduct}
                                                       idOrder={this.state.idOrder}/>}/>
                <Route path="" component={FormLogin}></Route>
            </Router>
        )

    }
}

export default App;
