import React, {Component} from 'react';
import axios from 'axios'


class FormLogin extends Component {
    state = {
       username:"",
       password:""

    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    
    
  
    Login = async (e) => {//with axios send the request to the route with the body 
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/login', {
           username:this.state.username,
           password:this.state.password
        });
        console.log(res.data);
        localStorage.set('token',res.data.token);
        
        
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Login}>
                   
                    <div className="form-group">
                        <label for="Name">Username</label>
                        <input type="text" className="form-control" id="name" placeholder="Type your Username"
                               onChange={this.onChangeUsername} required></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password"
                               onChange={this.onChangePassword}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={this.Login}>Iniciar Sesion</button>
                </form>

            </div>

        );
    }
}

export default FormLogin;