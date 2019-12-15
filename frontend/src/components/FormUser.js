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
        try{
            const res = await axios.post(Host+'/users/register', {
                name: this.state.name,
                username:this.state.username,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address:this.state.address
            });
            
                alert("registro exitoso");
            this.props.history.push("./Login")
            
    
        }catch(e){
            if(e.response.status==400){
                alert("correo o nombre de usuario duplicado");
            }

        }
        
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Register} className="text-center border border-light ">
                <p class="h4 mb-4">Registro</p>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control mb-4" id="name" placeholder="Name of user"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control mb-4" id="username" placeholder="Username of user"
                               onChange={this.onChangeUserName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="text" className="form-control mb-4" id="email" placeholder="Email of user"
                               onChange={this.onChangeEmail}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input type="text" className="form-control mb-4" id="password" placeholder="Password of user"
                               onChange={this.onChangePassword}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input type="text" className="form-control mb-4" id="phone" placeholder="Phone of user"
                               onChange={this.onChangePhone}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text" className="form-control mb-4" id="address" placeholder="Address of user"
                               onChange={this.onChangeAddress}></input>
                    </div>

                    <button type="submit" className="btn btn-info btn-block my-4" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>
        );
    }
}


export default FormUser;