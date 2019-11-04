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

//} else if (window.location == "http://localhost:3001/CompanyRegister") {

/*

 <BrowserRouter>
     <div className="App">
         <Navbar/>
         <FormProduct/>
     </div>
 </BrowserRouter>

  */