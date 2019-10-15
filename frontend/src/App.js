import React from 'react';

import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'

class App extends React.Component {//We render a component  depending of the action of the user in the navbar 
    render() {
        if(window.location == "http://localhost:3001/ProductRegister"){
            return (<FormProduct/>)//this let the user register a product
        }
        else if(window.location == "http://localhost:3001/UserRegister"){
            return (<FormUser/>)//this let the user register a user
        }
        else if(window.location == "http://localhost:3001/CompanyRegister"){
            return (<FormCompany/>)//this let the user register a company
        }
        else{
            //by default we render the list of products
            return (<ListProduct/>)
        }
    }
}
export default App;