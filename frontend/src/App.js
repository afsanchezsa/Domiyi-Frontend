import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'
import AddProduct from "./components/AddProduct";

class App extends React.Component {//We render a component  depending of the action of the user in the navbar 
    state = {
        url: 'http://localhost:3001',
        product: {}
    }
    goToAddProduct = (product) => {
        this.setState({
            url: 'http://localhost:3001/addProduct',
            product: product
        })

        //alert(id);


    }

    render() {

        return (
            <Router>
                <Navbar/>
                <Route path="/CompanyRegister" render={(props) => <FormCompany {...props} numero={1}/>}/>
                <Route path="/UserRegister" component={FormUser}/>
                <Route path="/ProductRegister" component={FormProduct}/>
                <Route path="/Products" component={ListProduct}/>
            </Router>
        )

    }
}

export default App;
/*
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'

class App extends Component {//We render a component  depending of the action of the user in the navbar

    render() {
        return(
            <Router>

                <Navbar/>
                <Route path="/CompanyRegister" component = {FormCompany}/>
                <Route path="/UserRegister" component = {FormUser}/>
                <Route path="/ProductRegister" component = {FormProduct}/>
                <Route path="/Products" component = {ListProduct}/>
            </Router>
        )
    }
}

export default App;
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
 */
/*
        if(this.state.url == "http://localhost:3001/ProductRegister"){
            return (<FormProduct/>)//this let the user register a product
        }
        else if(this.state.url == "http://localhost:3001/UserRegister"){
            return (<FormUser/>)//this let the user register a user
        }
        else if(this.state.url == "http://localhost:3001/CompanyRegister"){
            return (<FormCompany/>)//this let the user register a company
        }
        else if(this.state.url == "http://localhost:3001/addProduct"){
            return (<AddProduct product={this.state.product}/>)//this let the user register a company
        }
        else if(this.state.url == "http://localhost:3001"){
            //by default we render the list of products
            return (<ListProduct goToAddProduct = {this.goToAddProduct}/>)
        }
 */