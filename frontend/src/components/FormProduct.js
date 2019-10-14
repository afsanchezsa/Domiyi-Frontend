import React,{Component} from 'react';
import axios from 'axios'




class FormProduct extends Component{
    state={
        users:[],
        id:"",
        idCompany:"",
        name:"",
        description:"",
        price:"",
        image:"",
        updated:"",
        status:""

    }
  async componentDidMount(){
    const res=await axios.get('http://localhost:3000/users');
    this.setState({
        users:res.data
    })
}
onChangeId=(e)=>{//las funciones  onchange obligatoriamente tienen que ser flecha pues no vincula el this a si misma
this.setState({
    id:e.target.value
});
//console.log(this.state.id);
}
onChangeIdCompany=(e)=>{
this.setState({
    idCompany:e.target.value
});
//console.log(this.state.idCompany+' '+this.state.id);
}
onChangeName=(e)=>{
    this.setState({
     name:e.target.value
    });
}
onChangeDescription=(e)=>{
    this.setState({
        description:e.target.value
    });
}
onChangePrice=(e)=>{
    this.setState({
     price:e.target.value
    });
}
onChangeStatus=(e)=>{
    this.setState({
     status:e.target.value
    });
    //console.log(this.state.status);
}
Register=async(e)=>{
    const res= await axios.post('http://localhost:3000/product/register',{
         id:this.state.id,
         idCompany:this.state.idCompany,
         name:this.state.name,
         description:this.state.description,
         price:this.state.price,
         image:"imagencilla",
         updated:"01-01-2019",
         status:this.state.status
    });
    e.preventDefault() ;
    alert(res);
//evita que al presionar el boton el formulario se limpie
}
  
    render(){
        return(
<div className="container p-4">
<form onSubmit={this.Register}>
<div className="form-group ">
    <label for="Id">Id</label>
<input type="number" className="form-control" id="Id" placeholder="Enter Id " onChange={this.onChangeId}></input>
    </div>
    <div className="form-group ">
    <label for="IdCompany">Id Company</label>
<input type="number" className="form-control" id="IdCompany" placeholder="Enter Id Company" onChange={this.onChangeIdCompany}></input>
    </div>
    <div className="form-group">
    <label for="name">Name</label>
<input type="text" className="form-control" id="name" placeholder="Name of Product" onChange={this.onChangeName}></input>
    </div>
    <div className="form-group">
    <label for="description">Description</label>
<input type="text" className="form-control" id="description" placeholder="Description"onChange={this.onChangeDescription}></input>
    </div>
    <div className="form-group">
    <label for="price">Price</label>
<input type="number"  className="form-control" id="price" placeholder="Price" onChange={this.onChangePrice}></input>
    </div>
    <div className="form-group">
    <label for="Image">Image</label>
<input type="file" className="form-control-file" id="Image"></input>
    </div>
    
    <div className="form-group">
    <label for="status">Status</label>
    
<select className="form-control form-control-md" onChange={this.onChangeStatus}>
{this.state.users.map(user=>
    <option>{user.username}</option>)}
  <option>Large select</option>
  <option>No disponible</option>
</select>
    </div>
    
    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
</form>

</div>

        );
    }
}
export default FormProduct;