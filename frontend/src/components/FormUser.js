import React, {Component} from 'react';
import axios from 'axios'
import Host from '../Utilities/ServerUtilities'

class FormUser extends Component {
    state = {
        id: "",//this will be send to the backend
        name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        });
    }
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post(Host+'/users/register', {
            name: this.state.name,
            username:this.state.username,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            address:this.state.address
        });

        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name of user"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username of user"
                               onChange={this.onChangeUserName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email of user"
                               onChange={this.onChangeEmail}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Password of Company"
                               onChange={this.onChangePassword}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Phone of user"
                               onChange={this.onChangePhone}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Address of user"
                               onChange={this.onChangeAddress}></input>
                    </div>

                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>
        );
    }
}


export default FormUser;