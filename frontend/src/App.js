import React from 'react';

import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'

class App extends React.Component {
    render() {
        if(window.location == "http://localhost:3001/ProductRegister"){
            return (<FormProduct/>)
        }
        else if(window.location == "http://localhost:3001/UserRegister"){
            return (<FormUser/>)
        }
        else if(window.location == "http://localhost:3001/CompanyRegister"){
            return (<FormCompany/>)
        }
        else{
            
            return (<ListProduct/>)
        }
    }
}
export default App;