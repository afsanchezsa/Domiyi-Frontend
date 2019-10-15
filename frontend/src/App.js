import React from 'react';

import FormProduct from './components/FormProduct'
//import './App.css';
import ListProduct from './components/ListProduct'

class App extends React.Component {

    render() {
        if(window.location == "http://localhost:3001/ProductRegister"){
            return (<FormProduct/>)
        }else{
            return (<ListProduct/>)
        }

    }


}


export default App;