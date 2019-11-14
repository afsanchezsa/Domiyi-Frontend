import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
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
        alert(ls.get('token'));
        
        }catch(e){
            if(e.response.status==401){
                alert("contraseña incorrecta");
            }
            
        }
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
                <div>
                    <a href="http://localhost:3001/UserRegister">No tienes una cuenta ? Registrate</a>
                </div>
                </form>

            </div>

        );
    }
}

export default FormLogin;