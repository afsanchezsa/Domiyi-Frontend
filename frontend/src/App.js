import React from 'react';

import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'
import FormLogin from './components/FormLogin';

class App extends React.Component {//We render a component  depending of the action of the user in the navbar 
    goToLogin=(e)=>{
        window.location="http://localhost:3001/login";
    }
    
    render() {
        if(window.location == "http://localhost:3001/ProductRegister"){
            return (<FormProduct Login={this.goToLogin.bind(this)}/>)//this let the user register a product
        }
        else if(window.location == "http://localhost:3001/UserRegister"){
            return (<FormUser Login={this.goToLogin.bind(this)}/>)//this let the user register a user
        }
        else if(window.location == "http://localhost:3001/CompanyRegister"){
            return (<FormCompany Login={this.goToLogin.bind(this)}/>)//this let the user register a company
        }else if(window.location=="http://localhost:3001/login"){
            return (<FormLogin Login={this.goToLogin.bind(this)}/>)
        }
        else{
            //by default we render the list of products
            
            return (<ListProduct Login={this.goToLogin.bind(this)}/>)
        }
    }
}
export default App;