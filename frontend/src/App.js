import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import AddPromoToProduct from "./components/AddPromoToProduct"
import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
import axios from 'axios'
//import './App.css';
import ListProduct from './components/ListProduct';
import FormCompany from './components/FormCompany';
import CompaniesByCategory from './components/CompaniesByCategory'
import Cart from './components/Cart'
import ls from 'local-storage'
import AddProduct from "./components/AddProduct";
import Host from './Utilities/ServerUtilities'
import FormLogin from './components/FormLogin';
import Orders from "./components/Orders";
import Sidebar from './components/Sidebar';
import CompanyOptions from './components/CompanyOptions'
import EditProduct from './components/EditProduct';
import ListProductToEdit from './components/ListProductToEdit';
import AdminProduct from './components/AdminProduct';
import CompaniesByIdAdmin from "./components/CompaniesByIdAdmin";
import SearchProduct from "./components/SearchProduct";

class App extends React.Component {//We render a component  depending of the action of the user in the navbar
    state = {
        idOrder: null,
        url: 'http://localhost:3001',
        product: {},
        idsDetails: []
    }

    addDetail = async (id) => {
        if (this.state.idOrder == null) {
            const res = await axios.post(Host + '/order/register', {
                idCompany: 1,
                idUser: 1,
                address: "Avenida siempre vivas 123"
            }, {
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
            url: Host + '/addProduct',
            product: product,
        })
        //alert(id);
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Router>
                        <Sidebar/>
                        <div id="content">


                            <div className="container-fluid">

                                <Navbar/>


                                <Route path="/Orders" render={(props) => <Orders {...props}/>}/>
                                <Route path="/CompaniesByCategory/1" render={(props) => <CompaniesByCategory {...props}/>}/>
                                <Route path="/CompaniesByCategory/2" render={(props) => <CompaniesByCategory {...props}/>}/>
                                <Route path="/Cart" render={(props) => <Cart {...props} idOrder={this.state.idOrder}
                                                                             idsDetails={this.state.idsDetails}/>}/>
                                <Route path="/CompanyRegister"
                                       render={(props) => <FormCompany {...props} numero={1}/>}/>
                                <Route path="/addProduct"
                                       render={(props) => <AddProduct {...props} product={this.state.product}
                                                                      idOrder={this.state.idOrder}
                                                                      addDetail={this.addDetail}/>}/>
                                <Route path="/UserRegister" component={FormUser}/>
                                <Route path="/ProductRegister" component={FormProduct}/>
                                <Route path="/Products"
                                       render={(props) => <ListProduct {...props} idCompany={1}
                                                                       goToAddProduct={this.goToAddProduct}
                                                                       idOrder={this.state.idOrder}/>}/>
                                <Route path="/Login" component={FormLogin}></Route>
                                <Route path="/Options" component={CompanyOptions}></Route>
                                <Route path="/EditProduct" component={EditProduct}></Route>
                                <Route path="/AdminProduct" component={AdminProduct}></Route>
                                <Route path="/MyCompanies" component={CompaniesByIdAdmin}></Route>
                                <Route path="/ListProductToEdit"
                                       render={(props) => <ListProductToEdit {...props} idCompany={1}
                                                                             goToAddProduct={this.goToAddProduct}
                                                                             idOrder={this.state.idOrder}/>}/>
                                <Route path="/AddPromo" component={AddPromoToProduct}></Route>


                                <Route path="/SearchProduct"
                                       render={(props) => <SearchProduct {...props} idCompany={1}
                                                                             goToAddProduct={this.goToAddProduct}
                                                                             idOrder={this.state.idOrder}/>}/>


                            </div>

                        </div>
                    </Router>
                </div>

            </div>
        )

    }
}

export default App;
