import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import {Link} from 'react-router-dom';
class FormLogin extends Component {
    state = {
       username:"",
       password:""

    }
    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(json => this.setState({
          articles: json.results,
          readNow: ls.get('readNow') || [],
          readLater: ls.get('readLater') || [],
          likedSections: ls.get('likedSections') || []
        }));
        
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
        try{
            e.preventDefault();
        const res = await axios.post(Host+'/login', {
           username:this.state.username,
           password:this.state.password
        });
        
        console.log(res.data);
        ls.set('token',res.data.token);
        alert("logueado correctamente");
        this.props.history.push("./SearchProduct")

        
        }catch(e){
            if(e.response.status==401){
                alert("Usuario o contraseña incorrecta");
            }else{
                alert("Usuario no encontrado");
            }
            
        }
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Login} className="text-center border border-light ">
                   
                <p class="h4 mb-4">Iniciar Sesión</p>
                  
                    <div className="form-group">
                        <label for="Name">Username</label>
                        <input type="text" className="form-control mb-4" id="name" placeholder="Type your Username"
                               onChange={this.onChangeUsername} required></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password"
                               onChange={this.onChangePassword}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-info btn-block my-4" onSubmit={this.Login}>Iniciar Sesion</button>
                <div>
                <Link className="" to='/UserRegister'>No tienes cuenta ? Registrate</Link>
                </div>
                </form>

            </div>

        );
    }
}

export default FormLogin;