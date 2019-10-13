import React,{Component} from 'react';
import axios from 'axios'

class FormProduct extends Component{
    state={
        users:[]
    }
  async componentDidMount(){
    const res=await axios.get('http://localhost:3000/users');
    this.setState({
        users:res.data
    })
}
Register=(e)=>{
e.preventDefault() ;//evita que al presionar el boton el formulario se limpie
}
  
    render(){
        return(
<div className="container p-4">
<form onSubmit={this.Register}>
    <div className="form-group ">
    <label for="Id">Id Company</label>
<input type="number" className="form-control" id="Id" placeholder="Enter Id Company"></input>
    </div>
    <div className="form-group">
    <label for="name">Name</label>
<input type="text" className="form-control" id="name" placeholder="Name of Product"></input>
    </div>
    <div className="form-group">
    <label for="description">Description</label>
<input type="text" className="form-control" id="description" placeholder="Description"></input>
    </div>
    <div className="form-group">
    <label for="price">Price</label>
<input type="number" step="0.01" className="form-control" id="price" placeholder="Price"></input>
    </div>
    <div className="form-group">
    <label for="Image">Image</label>
<input type="file" className="form-control-file" id="Image"></input>
    </div>
    
    <div className="form-group">
    <label for="status">Image</label>
    
<select className="form-control form-control-md">
{this.state.users.map(user=>
    <option>{user.username}</option>)}
  <option>Large select</option>
  <option>No disponible</option>
</select>
    </div>
    
    <button type="submit" className="btn btn-primary">Registrar</button>
</form>

</div>

        );
    }
}
export default FormProduct;