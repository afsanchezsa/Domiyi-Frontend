import React, {Component} from 'react';
import axios from 'axios'


class FormUser extends Component {
    state = {
        id: "",//this will be send to the backend
        email: "",
        password: "",
        name: "",
        type: ""
    }

    onChangeId = (e) => {//las funciones  onchange obligatoriamente tienen que ser flecha pues no vincula el this a si misma
        this.setState({
            id: e.target.value
        });
//console.log(this.state.id);
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    onChangeType = (e) => {
        this.setState({
            type: e.target.value
        });
    }
    Register = async (e) => {//is an async function wich wait a response 
        const res = await axios.post('http://localhost:3000/users/register', {
            id: this.state.id,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            type: this.state.type
        });
        e.preventDefault();
        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    <div className="form-group ">
                        <label for="Id">Id</label>
                        <input type="number" className="form-control" id="Id" placeholder="Enter Id "
                               onChange={this.onChangeId}></input>
                    </div>
                    <div className="form-group ">
                        <label for="Email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter email"
                               onChange={this.onChangeEmail}></input>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Type your password"
                               onChange={this.onChangePassword}></input>
                    </div>
                    <div className="form-group">
                        <label for="Name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Type your name"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label for="Type">Type</label>
                        <input type="text" className="form-control" id="type" placeholder="Type of user"
                               onChange={this.onChangeType}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>
        );
    }
}

export default FormUser;