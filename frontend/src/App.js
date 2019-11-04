import React from 'react';

import FormProduct from './components/FormProduct'
import FormUser from './components/FormUser'
//import './App.css';
import ListProduct from './components/ListProduct'
import FormCompany from './components/FormCompany'
import AddProduct from "./components/AddProduct";

class App extends React.Component {//We render a component  depending of the action of the user in the navbar 
    state = {
        url:'http://localhost:3001',
        product:{}
    }
    goToAddProduct = (product) =>{
        this.setState({
            url:'http://localhost:3001/addProduct',
            product:product
        })

        //alert(id);


    }
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
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
    }
}
export default App;