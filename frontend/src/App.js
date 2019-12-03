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
<div >
<div className ="wrapper">
<nav id ="sidebar">
<div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>
        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
<div id="content">


<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>

        </div>
    </nav>
<div className="container-fluid">
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
                <Route path="/Login" component={FormLogin}></Route>
            </Router>



</div>
    
</div>
</div>

</div>
        )

    }
}

export default App;
